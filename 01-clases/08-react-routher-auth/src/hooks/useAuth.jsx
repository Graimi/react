import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// Creamos la siguiente función para vincular el context con los datos del usar
export const useAuth = () => {
    return useContext(AuthContext);
}