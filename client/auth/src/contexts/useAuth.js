import { useContext } from "react";
import { AuthContext } from "./AuthProvider"; // Adjust the path as necessary

export const useAuth = () => useContext(AuthContext);
