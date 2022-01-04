import { ReactElement, useState, useEffect } from "react";
import Button from "../../components/Button";
import resources from "../../assets/json/string-resources.json";
import { useAuth } from "../../hooks/useAuth";
import sportService from "../../services/sport.service";
import { SportModel } from "./../../models/sport.model";
import { toast } from "react-toastify";
import StyledHome from "./StyledHome";
import Footer from "../../components/Footer";
import { MoonSvg, SunSvg } from "../../helpers/icons";
import IconContainer from "../../styles/IconContainer";
import TinderCards from "../../components/TinderCards";
import Spinner from "../../components/Spinner";

function Home({
  themeToggler,
  theme,
}: {
  theme: string | (() => void);
  themeToggler: any;
}): ReactElement {
  const auth = useAuth();
  const [sports, setSports] = useState<SportModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getSports = () => {
    sportService.getAll().then((response: any) => {
      if (response.status === 200) {
        setSports(response.data.sports);
        setLoading(false);
      } else {
        toast(`${resources.errors.somethingWrong}!`);
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    getSports();
  }, []);

  return (
    <StyledHome>
      <div style={{ zIndex: "1000" }} onClick={themeToggler}>
        <IconContainer
          background={theme === "light" ? "#FFFFFF" : "#222243"}
          position="fixed"
          top="20px"
          left="20px"
        >
          {theme === "light" ? <MoonSvg /> : <SunSvg />}
        </IconContainer>
      </div>

      <Button
        style={{
          position: "fixed",
          right: "20px",
          top: "20px",
          zIndex: "1000",
        }}
        onClick={() => auth.logout()}
        title={resources.commom.logout}
      />
      {loading ? <Spinner /> : <TinderCards sports={sports} />}
      <Footer />
    </StyledHome>
  );
}

export default Home;
