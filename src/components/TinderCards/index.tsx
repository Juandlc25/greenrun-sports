import { ReactElement, useState, useRef, useMemo, createRef } from "react";
import { SportModel } from "../../models/sport.model";
import StyledTinderCards, { Cards } from "./StyledTinderCards";
import TinderCard from "react-tinder-card";
import H3 from "../Typography/H3";
import SwipeButtons from "../SwipeButtons";
import {
  query,
  addDoc,
  where,
  collection,
  getDocs,
} from "firebase/firestore/lite";
import { db } from "../../hooks/useAuth";
import { toast } from "react-toastify";
import resources from "../../assets/json/string-resources.json";

function TinderCards({ sports }: { sports: SportModel[] }): ReactElement {
  const [currentIndex, setCurrentIndex] = useState<number>(sports.length - 1);
  const [lastDirection, setLastDirection] = useState<string | null>();
  const currentIndexRef = useRef(currentIndex);
  const sportsCol = collection(db, "sports");

  const childRefs: React.RefObject<any>[] = useMemo(
    () =>
      Array(sports.length)
        .fill(0)
        .map((i) => createRef()),
    []
  );

  const updateCurrentIndex = (val: any) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };
  const canSwipe = currentIndex >= 0;

  const swiped = async (
    direction: string,
    sport: SportModel,
    index: number
  ) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
    const newDoc = {
      idSport: sport.idSport,
      strSport: sport.strSport,
      strFormat: sport.strFormat,
      strSportThumb: sport.strSportThumb,
      strSportIconGreen: sport.strSportIconGreen,
      strSportDescription: sport.strSportDescription,
    };
    const q = query(
      collection(db, "sports"),
      where("idSport", "==", sport.idSport)
    );
    const docSnap = await getDocs(q);
    if (direction === "right") {
      if (!docSnap.empty) {
        toast(resources.errors.alreadyExists);
      } else {
        await addDoc(sportsCol, {
          direction: "right",
          ...newDoc,
        });
      }
    } else {
      if (!docSnap.empty) {
        toast(resources.errors.alreadyExists);
      } else {
        await addDoc(sportsCol, {
          direction: "left",
          ...newDoc,
        });
      }
    }
  };

  const outOfFrame = (name: any, idx: any) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir: any) => {
    if (canSwipe && currentIndex < sports.length) {
      const { current } = childRefs[currentIndex];
      if (current) await childRefs[currentIndex].current.swipe(dir);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyledTinderCards>
        {sports.map((sport, idx) => (
          <TinderCard
            ref={childRefs[idx]}
            onSwipe={(dir) => swiped(dir, sport, idx)}
            className="swipe"
            key={sport.idSport}
            preventSwipe={["up", "down"]}
            onCardLeftScreen={() => outOfFrame(sport.strSport, idx)}
          >
            <Cards backgroundImage={`url(${sport.strSportThumb})`}>
              <H3 color="#fff">{sport.strSport}</H3>
            </Cards>
          </TinderCard>
        ))}
      </StyledTinderCards>
      <SwipeButtons
        onClickLeft={() => swipe("right")}
        onClickRight={() => swipe("left")}
      />
    </div>
  );
}

export default TinderCards;
