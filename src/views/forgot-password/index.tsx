import { ReactElement, useState } from "react";
import resources from "../../assets/json/string-resources.json";
import H2 from "../../components/Typography/H2";
import StyledForgotPassword from "./StyledForgotPassword";
import Input from "../../components/Input";
import Text from "../../components/Typography/Text";
import Button from "../../components/Button";
import { validateEmail } from "../../helpers/validation";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { RouteList } from "../../App";
import { useNavigate } from "react-router-dom";

function ForgotPassword(): ReactElement {
  const [email, setEmail] = useState<string>("");
  const validEmail = validateEmail(email);
  const auth = useAuth();
  const navigate = useNavigate();
  const forgotPassword = async () => {
    try {
      await auth.passwordResetEmail(email);
      toast(resources.errors.checkEmail);
      setEmail("");
      navigate(RouteList.LOGIN);
    } catch (error) {
      toast.error(resources.errors.resettingPassword);
    }
  };
  return (
    <StyledForgotPassword>
      <H2>{resources.views.forgotPassword.title}</H2>
      <Text margin="10px 0">{resources.commom.subtitle}</Text>
      <Input
        label={resources.views.forgotPassword.enterEmail}
        name={resources.views.forgotPassword.email}
        type="text"
        value={email}
        setValue={setEmail}
        style={{ margin: "10px 0" }}
      />
      <Button
        disabled={!email || !validEmail}
        onClick={forgotPassword}
        title={resources.commom.submit}
        style={{ marginTop: "10px" }}
      />
    </StyledForgotPassword>
  );
}

export default ForgotPassword;
