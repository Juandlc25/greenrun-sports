import { ReactElement } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RouteList } from "../../App";
import {
  ProfileSvg,
  HouseSimpleFillSvg,
  NotepadFillSvg,
  TimerFillSvg,
  HouseSimpleSvg,
  TimerSvg,
} from "../../helpers/icons";
import IconContainer from "../../styles/IconContainer";
import StyledFooter from "./StyledFooter";

function Footer(): ReactElement {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <StyledFooter>
      {location.pathname === RouteList.ROOT ? (
        <IconContainer>
          <div onClick={() => navigate(RouteList.ROOT)}>
            <HouseSimpleFillSvg />
          </div>
        </IconContainer>
      ) : (
        <div className="pointer" onClick={() => navigate(RouteList.ROOT)}>
          <HouseSimpleSvg />
        </div>
      )}
      {location.pathname === RouteList.HISTORY ? (
        <IconContainer>
          <div onClick={() => navigate(RouteList.HISTORY)}>
            <TimerFillSvg />
          </div>
        </IconContainer>
      ) : (
        <div className="pointer" onClick={() => navigate(RouteList.HISTORY)}>
          <TimerSvg />
        </div>
      )}

      <NotepadFillSvg />
      <ProfileSvg />
    </StyledFooter>
  );
}

export default Footer;
