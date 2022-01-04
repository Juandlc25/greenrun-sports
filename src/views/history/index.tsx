import { ReactElement, useEffect, useState } from "react";
import StyledHistory from "./StyledHistory";
import resources from "../../assets/json/string-resources.json";
import H2 from "../../components/Typography/H2";
import Text from "../../components/Typography/Text";
import HistoryItems from "../../components/HistoryItems";
import { collection, getDocs } from "firebase/firestore/lite";
import { db, useAuth } from "../../hooks/useAuth";
import Spinner from "../../components/Spinner";
import { toast } from "react-toastify";
import Footer from "../../components/Footer";
import { ArrowLeftSvg } from "../../helpers/icons";
import { RouteList } from "../../App";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

function History(): ReactElement {
  const [sports, setSports] = useState<any[]>([]);
  const sportsCol = collection(db, "sports");
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    const getSports = async () => {
      try {
        const data = await getDocs(sportsCol);
        setSports(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
      } catch (error) {
        toast(`${resources.errors.somethingWrong}!`);
        setLoading(false);
      }
    };
    getSports();
  }, []);

  return (
    <StyledHistory>
      <div
        className="pointer"
        style={{ padding: "20px", maxWidth: "100px" }}
        onClick={() => navigate(RouteList.ROOT)}
      >
        <ArrowLeftSvg />
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

      <H2>{resources.commom.history}</H2>
      <Text margin="10px 0">{resources.commom.subtitle}</Text>
      {loading ? <Spinner /> : <HistoryItems sports={sports} />}
      <Footer />
    </StyledHistory>
  );
}

export default History;
