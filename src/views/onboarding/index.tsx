import { ReactElement } from "react";
import { OnboardingSvg } from "../../helpers/icons";
import resources from "../../assets/json/string-resources.json";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { RouteList } from "../../App";
import StyledOnboarding, { StyledOnboardingContent } from "./StyledOnboarding";
import Text from "../../components/Typography/Text";
import H3 from "../../components/Typography/H3";

function Onboarding(): ReactElement {
  const navigate = useNavigate();
  return (
    <StyledOnboarding>
      <OnboardingSvg />
      <StyledOnboardingContent>
        <H3>{resources.views.onboarding.title}</H3>
        <Text margin="10px 0">{resources.commom.subtitle}</Text>
        <Button
          onClick={() => navigate(RouteList.LOGIN)}
          title={resources.commom.loginBtn}
        />
      </StyledOnboardingContent>
    </StyledOnboarding>
  );
}

export default Onboarding;
