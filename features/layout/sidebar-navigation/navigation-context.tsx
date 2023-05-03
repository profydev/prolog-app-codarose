import React, { useState } from "react";

type NavigationContextProviderProps = {
  children: React.ReactNode;
};

const defaultContext = {
  isSidebarCollapsed: false,
  isMobileMenuOpen: false,
  isModalVisible: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleSidebar: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleMobileMenu: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleIsModalVisible: () => {},
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
  const [isModalVisible, setIsModalVisible] = useState(
    defaultContext.isModalVisible
  );

  return (
    <NavigationContext.Provider
      value={{
        isSidebarCollapsed,
        toggleSidebar: () => setSidebarCollapsed((isCollapsed) => !isCollapsed),
        isMobileMenuOpen,
        toggleMobileMenu: () => setMobileMenuOpen((isOpen) => !isOpen),
        isModalVisible,
        toggleIsModalVisible: () =>
          setIsModalVisible((isModalVisible) => !isModalVisible),
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
