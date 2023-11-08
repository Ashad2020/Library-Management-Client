import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";

const instance = axios.create({
  baseURL: "https://library-server-kappa.vercel.app/api/v1",
  withCredentials: true,
});

export default function useAxios() {
  const { logOut } = useAuth();
  useEffect(() => {
    instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          logOut();
        }
      }
    );
  }, []);
  return instance;
}
