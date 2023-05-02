import React, { useState } from "react";

type NavigationContextProviderProps = {
  children: React.ReactNode;
};

const defaultContext = {
  isSidebarCollapsed: false,
  isMobileMenuOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleSidebar: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleMobileMenu: () => {},
};

export const NavigationContext = React.createContext(defaultContext);

export function NavigationProvider({
  children,
}: NavigationContextProviderProps) {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(
    defaultContext.isSidebarCollapsed
  );
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(
    defaultContext.isMobileMenuOpen
  );

  return (
    <NavigationContext.Provider
      value={{
        isSidebarCollapsed,
        toggleSidebar: () => setSidebarCollapsed((isCollapsed) => !isCollapsed),
        isMobileMenuOpen,
        toggleMobileMenu: () => setMobileMenuOpen((isOpen) => !isOpen),
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
