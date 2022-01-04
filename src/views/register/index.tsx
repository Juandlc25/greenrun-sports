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

function Register(): ReactElement {
  const auth = useAuth();
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const navigate = useNavigate();
  const validEmail = validateEmail(user);

  const reset = () => {
    setUser("");
    setPassword("");
    setRepeatPassword("");
  };

  const signUp = async () => {
    try {
      await auth.signup(user, password);
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
      repeatPassword={
        <Input
          label={resources.views.login.repeat}
          name={resources.views.login.repeat}
          type="password"
          value={repeatPassword}
          setValue={setRepeatPassword}
          style={{ margin: "10px 0" }}
        />
      }
      button={
        <Button
          disabled={
            !validEmail ||
            !user ||
            !(password.length > 4) ||
            !(repeatPassword.length > 4) ||
            !(password === repeatPassword)
          }
          onClick={signUp}
          title={resources.commom.registerBtn}
        />
      }
      linkRoute={RouteList.LOGIN}
      link={resources.commom.loginHere}
      warning={resources.errors.warning}
      toLogin={resources.commom.toLogin}
    />
  );
}

export default Register;
