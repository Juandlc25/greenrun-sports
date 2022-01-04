import { deleteDoc, doc } from "firebase/firestore/lite";
import { ReactElement } from "react";
import { toast } from "react-toastify";
import { BlueHeartSvg, XSvg } from "../../helpers/icons";
import { db } from "../../hooks/useAuth";
import H3 from "../Typography/H3";
import StyledHistoryItem, { Img } from "./StyledHistoryItem";
import resources from "../../assets/json/string-resources.json";

function HistoryItem({
  id,
  name,
  img,
  direction,
}: {
  id: string;
  name: string;
  img: string;
  direction: string;
}): ReactElement {
  const deleteOne = async () => {
    const sportDoc = doc(db, "sports", id);
    await deleteDoc(sportDoc);
    toast(`${resources.commom.deleteSport}`);
    setTimeout(function () {
      window.location.reload();
    }, 5000);
  };

  return (
    <StyledHistoryItem>
      <Img backgroundImage={`url(${img})`}>
        <H3 color="#fff">{name}</H3>
      </Img>
      <div className="mr-5 pointer" onClick={deleteOne}>
        {direction === "left" ? <XSvg /> : <BlueHeartSvg />}
      </div>
    </StyledHistoryItem>
  );
}

export default HistoryItem;
