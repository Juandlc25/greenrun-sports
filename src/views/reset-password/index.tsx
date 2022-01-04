import { ReactElement, useState } from "react";
import resources from "../../assets/json/string-resources.json";
import H2 from "../../components/Typography/H2";
import StyledResetPassword from "./StyledResetPassword";
import Input from "../../components/Input";
import Text from "../../components/Typography/Text";
import Button from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import queryString from "query-string";
import { RouteList } from "../../App";

function ResetPassword(): ReactElement {
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const reset = () => {
    setPassword("");
    setRepeatPassword("");
  };

  const resetPassword = async () => {
    try {
      const parsed = queryString.parse(location.search);
      await auth.confirmPassword(parsed.oobCode, password);
      toast(resources.commom.passwordReset);
      reset();
      navigate(RouteList.LOGIN);
    } catch {
      toast.error(resources.errors.resettingPassword);
    }
  };
  return (
    <StyledResetPassword>
      <H2>{resources.views.resetPassword.title}</H2>
      <Text margin="10px 0">{resources.commom.subtitle}</Text>
      <Input
        label={resources.views.login.password}
        name={resources.views.login.password}
        type="password"
        value={password}
        setValue={setPassword}
        style={{ marginTop: "10px" }}
      />
      <Input
        label={resources.views.login.repeat}
        name={resources.views.login.repeat}
        type="password"
        value={repeatPassword}
        setValue={setRepeatPassword}
        style={{ margin: "10px 0" }}
      />
      <Button
        disabled={
          !(password.length > 4) ||
          !(repeatPassword.length > 4) ||
          !(password === repeatPassword)
        }
        onClick={resetPassword}
        title={resources.commom.submit}
        style={{ marginTop: "10px" }}
      />
    </StyledResetPassword>
  );
}

export default ResetPassword;
