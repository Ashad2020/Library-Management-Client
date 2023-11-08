import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { auth } from "../../config/firebaseConfig";
import useAxios from "../../Hooks/useAxios";

export default function SocialLogin() {
  const axios = useAxios();
  const navigate = useNavigate();
  const { googleLogin } = useAuth();

  const handleSocialLogin = (media) => {
    media()
      .then((res) => {
        toast.success("Logged In successfully");
        if (res?.user?.email) {
          let obj = { email: res.user?.email };
          res.user?.email === "admin@gmail.com"
            ? (obj.role = "librarian")
            : (obj.role = "user");
          axios.post("/auth/access-token", obj, { withCredentials: true });
          navigate("/");
        }
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className="mx-auto">
      <button
        onClick={() => handleSocialLogin(googleLogin)}
        className="btn btn-ghost hover:bg-primary hover:text-white"
      >
        Continue with Google
      </button>
    </div>
  );
}
