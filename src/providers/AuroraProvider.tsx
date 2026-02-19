import { createContext, useContext, useState, type ReactNode } from "react";

interface AuroraContextType {
  isAuroraEnabled: boolean;
  toggleAurora: () => void;
}

const AuroraContext = createContext<AuroraContextType | undefined>(undefined);

export const AuroraProvider = ({ children }: { children: ReactNode }) => {
  const [isAuroraEnabled, setIsAuroraEnabled] = useState<boolean>(() => {
    const saved = localStorage.getItem("aurora-enabled");
    return saved !== null ? JSON.parse(saved) : true;
  });

  const toggleAurora = () => {
    setIsAuroraEnabled((prev) => {
      const newState = !prev;
      localStorage.setItem("aurora-enabled", JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <AuroraContext.Provider value={{ isAuroraEnabled, toggleAurora }}>
      {children}
    </AuroraContext.Provider>
  );
};

export const useAurora = () => {
  const context = useContext(AuroraContext);
  if (context === undefined) {
    throw new Error("useAurora must be used within an AuroraProvider");
  }
  return context;
};
