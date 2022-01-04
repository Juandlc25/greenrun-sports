import { ReactElement } from "react";
import { HeartSvg, XSvg } from "../../helpers/icons";
import IconContainer from "../../styles/IconContainer";
import StyledSwipeButtons from "./StyledSwipeButtons";

function SwipeButtons({
  onClickLeft,
  onClickRight,
}: {
  onClickRight?: (event?: any) => void;
  onClickLeft?: (event?: any) => void;
}): ReactElement {
  return (
    <StyledSwipeButtons>
      <div onClick={onClickRight}>
        <IconContainer width="51px" height="51px" borderRadius="50%">
          <XSvg />
        </IconContainer>
      </div>
      <div onClick={onClickLeft}>
        <IconContainer
          width="81px"
          height="81px"
          borderRadius="50%"
          background="linear-gradient(125.02deg, #236BFE -17.11%, #063BA8 98.58%)"
        >
          <HeartSvg />
        </IconContainer>
      </div>
    </StyledSwipeButtons>
  );
}

export default SwipeButtons;
