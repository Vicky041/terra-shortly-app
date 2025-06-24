import { useReducer } from "react";
import { initialState, ShortenContext, shortenReducer } from "./shortenReducer";

const ShortenProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shortenReducer, initialState);
  
  return (
    <ShortenContext.Provider value={{ state, dispatch }}>
      {children}
    </ShortenContext.Provider>
  );
};

export default ShortenProvider;
