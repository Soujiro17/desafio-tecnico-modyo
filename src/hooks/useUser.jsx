import { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";

export function useUser() {
  return useContext(UserContext);
}
