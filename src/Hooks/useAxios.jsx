import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
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
