import React from "react";
import { useWindowScrollPosition } from "./useWindowScrollPosition";

let FixedMenuContext = React.createContext();

function FixedMenuContextProvider({ limit, children }) {
  const position = useWindowScrollPosition();

  return (
    <FixedMenuContext.Provider value={position.y > limit}>
      {children}
    </FixedMenuContext.Provider>
  );
}

export { FixedMenuContext, FixedMenuContextProvider };
