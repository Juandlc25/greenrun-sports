import { ReactElement, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { RouteList } from "../../App";
import H2 from "../Typography/H2";
import Text from "../Typography/Text";
import StyledLayout, { StyledLayoutContent } from "./StyledLayout";

function Layout({
  title,
  subtitle,
  user,
  password,
  forgot,
  repeatPassword,
  button,
  toRegister,
  link,
  linkRoute,
  warning,
  toLogin,
}: {
  title: string;
  subtitle: string;
  user: ReactNode;
  password: ReactNode;
  repeatPassword?: ReactNode;
  button: ReactNode;
  forgot?: string;
  link: string;
  linkRoute: string;
  toRegister?: string;
  toLogin?: string;
  warning?: string;
}): ReactElement {
  const navigate = useNavigate();

  return (
    <StyledLayout>
      <H2>{title}</H2>
      <Text margin="10px 0">{subtitle}</Text>
      <StyledLayoutContent>
        {user}
        {password}
        {forgot && (
          <Text margin="10px 0">
            <span
              className="span"
              onClick={() => navigate(RouteList.FORGOT_PASSWORD)}
            >
              {forgot}
            </span>
          </Text>
        )}
        {repeatPassword && repeatPassword}
        {button}
        {toRegister && (
          <Text margin="10px 0">
            {toRegister}{" "}
            <span className="span" onClick={() => navigate(linkRoute)}>
              {link}
            </span>
          </Text>
        )}
        {toLogin && (
          <Text margin="10px 0">
            {toLogin}{" "}
            <span className="span" onClick={() => navigate(linkRoute)}>
              {link}
            </span>
          </Text>
        )}
      </StyledLayoutContent>
      {warning && <Text>{warning}</Text>}
    </StyledLayout>
  );
}

export default Layout;
