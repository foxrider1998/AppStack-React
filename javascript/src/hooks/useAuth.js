import { useContext } from "react";

// import { app } from "../../firebase";
// import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
// import AuthContext from "../contexts/JWTContext";
import AuthContext from "../contexts/FirebaseAuthContext";
// import AuthContext from "../contexts/Auth0Context";
// import AuthContext from "../contexts/CognitoContext";

const useAuth = () => {
  const context = useContext(AuthContext);
  console.log(AuthContext)
  if (!context)
    throw new Error("AuthContext must be placed within AuthProvider");

  // const [user, setUser] = useState(null);

  //   const handleLogin = () => {
  //       signInWithPopup(auth, provider)
  //           .then((result) => {
  //               setUser(result.user);
  //               console.log(result.user)
  //           })
  //           .catch((error) => console.log(error));
  //   };

  return context;
};

export default useAuth;
