import { useContext } from "react";
import { ShortenContext } from "../contexts/shortenReducer";

export const useShorten = () => {
  const { state, dispatch } = useContext(ShortenContext);
  if (!state || !dispatch) {
    throw new Error("useShorten must be used within a ShortenProvider");
  }

  const setLink = (value) => {
    dispatch({ type: "SET_LINK", payload: value });
  };

  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  const setShortenedLink = (url) => {
    dispatch({ type: "SET_SHORTENED_LINK", payload: url });
  };

  const setError = (message) => {
    dispatch({ type: "SET_ERROR", payload: message });
  };

  return {
    setError,
    setLoading,
    setShortenedLink,
    setLink,
    state,
    dispatch,
  };
};
