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
        if (res.user?.email) {
          fetch(
            `https://brand-shop-server-jnrp8x8gj-md-ashads-projects.vercel.app/user/${res.user?.uid}`
          )
            .then((response) => {
              console.log(auth.currentUser?.uid);
              return response.json();
            })
            .then((data) => {
              console.log("data uid", data.uid);
              console.log(auth.currentUser?.uid);
              if (!data?.uid) {
                if (auth.currentUser?.email) {
                  const createdAt = auth.currentUser?.metadata?.creationTime;
                  const uid = auth.currentUser?.uid;
                  const email = auth.currentUser?.email;
                  const user = {
                    email,
                    createdAt,
                    uid,
                  };
                  fetch(
                    `https://brand-shop-server-jnrp8x8gj-md-ashads-projects.vercel.app/user`,
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(user),
                    }
                  )
                    .then((res) => {
                      return res.json();
                    })
                    .then((data) => {
                      if (!data.insertedId) {
                        toast.error("This user already exist!");
                      }
                    });
                }
              }
            })
            .catch((err) => console.log(err));
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
