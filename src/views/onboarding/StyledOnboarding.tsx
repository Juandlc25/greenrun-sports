import styled from "styled-components";

const StyledOnboarding = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const StyledOnboardingContent = styled.div`
  position: absolute;
  bottom: 0;
  background: ${(props) => props.theme.colors.onboardingBg};
  /* background: white; */
  border-radius: 36px;
  padding: 46px 32px;
`;

export default StyledOnboarding;
