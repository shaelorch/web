import { Button, Loader } from "semantic-ui-react";
import LoginForm from "../components/LoginForm";
import { useRouter } from "next/router";
import { useState } from "react";


export default function Home() {
  // beforee, during, after

  const [loginState, setLoginState] = useState ("before");

  const r = useRouter();

  const HandleButton = () => {
    if(loginState === "before") {
      setLoginState("during");
    }
    if(loginState === "during") {
      setLoginState("after");
    }
    if(loginState === "after") {
      r.push("/dashboard");
    }
  }

  const Login = async () => {
    setLoginState("during");
    await new Promise(resolve => setTimeout(resolve, 2000));

    setLoginState("after");
    await new Promise(resolve => setTimeout(resolve, 2000));

    r.push("/dashboard");
  }

  return (
    <div>
     <LoginForm
        loginState={loginState}
        onLoginClick={()=>Login()}
        />
    </div>
  )
}
