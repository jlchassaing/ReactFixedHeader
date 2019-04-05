import React from "react";
import { useIsFixedPosition } from "./useIsFixedPosition";
import useMedia from "./useMedia";

let FixedMenuContext = React.createContext();

function FixedMenuContextProvider({
  limit = 10,
  mobileDetectionMediaQuery = "(max-width: 400px)",
  children
}) {
  const isFixed = useIsFixedPosition({ limit });
  const matches = useMedia(mobileDetectionMediaQuery);

  const value = { isFixed, isMobile: matches };

  return (
    <FixedMenuContext.Provider value={value}>
      {children}
    </FixedMenuContext.Provider>
  );
}

export { FixedMenuContext, FixedMenuContextProvider };
