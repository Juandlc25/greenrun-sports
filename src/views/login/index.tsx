import { ReactElement, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import resources from "../../assets/json/string-resources.json";
import { RouteList } from "../../App";
import { validateEmail } from "./../../helpers/validation";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";

function Login(): ReactElement {
  const auth = useAuth();
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const validEmail = validateEmail(user);
  const navigate = useNavigate();

  const reset = () => {
    setUser("");
    setPassword("");
  };

  const login = async () => {
    try {
      await auth.login(user, password);
      toast(`${resources.views.login.title}! 👋`);
      reset();
      navigate(RouteList.ROOT);
    } catch {
      toast.error(resources.errors.login);
      reset();
    }
  };

  return (
    <Layout
      title={resources.views.login.title}
      subtitle={resources.views.login.subtitle}
      user={
        <Input
          label={resources.views.login.user}
          name={resources.views.login.user}
          type="text"
          value={user}
          setValue={setUser}
        />
      }
      password={
        <Input
          label={resources.views.login.password}
          name={resources.views.login.password}
          type="password"
          value={password}
          setValue={setPassword}
          style={{ marginTop: "10px" }}
        />
      }
      button={
        <Button
          disabled={!user || !(password.length > 4) || !validEmail}
          onClick={login}
          title={resources.commom.loginBtn}
        />
      }
      forgot={resources.views.login.forgot}
      linkRoute={RouteList.REGISTER}
      link={resources.commom.registerBtn}
      toRegister={resources.commom.toRegister}
    />
  );
}

export default Login;
