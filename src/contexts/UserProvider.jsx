import { useMemo } from "react";
import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const UserContext = createContext({
  username: "",
});

export function UserProvider({ children }) {
  const [username, setUsername] = useLocalStorage("username", "");

  const values = useMemo(
    () => ({ username, setUsername }),
    [username, setUsername]
  );

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}
