import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { auth } from "../../config/firebaseConfig";

export default function SocialLogin() {
  const navigate = useNavigate();
  const { googleLogin } = useAuth();

  const handleSocialLogin = (media) => {
    media()
      .then((res) => {
        toast.success("Logged In successfully");
        console.log("firebase res", res);
        navigate("/");
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
