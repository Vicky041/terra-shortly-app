import { createContext } from "react";
import { loadFromLocalStorage, saveToLocalStorage } from "../utils/storage";

export const ShortenContext = createContext();

export const initialState = {
  link: "",
  shortenedLink: "",
  error: null,
  loading: false,
  history: loadFromLocalStorage("shortenedLinks") || [],
};

export const shortenReducer = (state, action) => {
  switch (action.type) {
    case "SET_LINK":
      return {
        ...state,
        link: action.payload,
      };
    case "SET_SHORTENED_LINK": {
      const updatedHistory = [
        { original: state.link, short: action.payload },
        ...state.history,
      ].slice(0, 10);

      saveToLocalStorage("shortenedLinks", updatedHistory);

      return {
        ...state,
        loading: false,
        shortenedLink: action.payload,
        history: updatedHistory,
      };
    }
    case "SET_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        error: null,
        loading: true,
      };
    default:
      return state;
  }
};
