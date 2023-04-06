import { createContext, useState } from "react";

interface LanguageContextProps {
  language: string;
  setLanguage: (language: string) => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: "",
  setLanguage: () => {},
});

export const LanguageContextProvider = ({ children }: any) => {
  const [language, setLanguage] = useState<string>("");
  const initialContextValue = { language, setLanguage };

  return (
    <LanguageContext.Provider value={initialContextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
