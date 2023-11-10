import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageProvider";

export function useLanguage() {
  return useContext(LanguageContext);
}
