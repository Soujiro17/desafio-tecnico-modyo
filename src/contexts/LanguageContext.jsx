import { createContext } from "react";
import { ENLanguage, ESLanguage } from "../data/language";
import { useState } from "react";
import { useMemo } from "react";

export const LanguageContext = createContext({
  language: ESLanguage,
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(ESLanguage);

  const changeLanguage = () =>
    setLanguage((lang) => (lang.id === "es_CL" ? ENLanguage : ESLanguage));

  const values = useMemo(
    () => ({ language, setLanguage, changeLanguage }),
    [language]
  );

  return (
    <LanguageContext.Provider value={values}>
      {children}
    </LanguageContext.Provider>
  );
}
