"use client";

import React, { useContext, useState, useEffect } from "react";

type TogglerContextType = {
  mobileNavbar: boolean;
  setMobileNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  aboutSidebar: boolean;
  setAboutSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const TogglerContext = React.createContext<TogglerContextType>({
  mobileNavbar: false,
  setMobileNavbar: () => {},
  aboutSidebar: false,
  setAboutSidebar: () => {},
});

export const useTogglerContext = () => useContext(TogglerContext);

export const TogglerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [aboutSidebar, setAboutSidebar] = useState(false);

  useEffect(() => {
    document.body.style.overflow =
      mobileNavbar || aboutSidebar ? "hidden" : "auto";
  }, [mobileNavbar, aboutSidebar]);

  return (
    <TogglerContext.Provider
      value={{
        mobileNavbar,
        setMobileNavbar,
        aboutSidebar,
        setAboutSidebar,
      }}
    >
      {children}
    </TogglerContext.Provider>
  );
};
