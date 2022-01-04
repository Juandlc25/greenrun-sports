import { ReactElement } from "react";
import HistoryItem from "../HistoryItem";
import StyledHistoryItems from "./StyledHistoryItems";
import resources from "../../assets/json/string-resources.json";
import H3 from "../Typography/H3";

function HistoryItems({ sports }: { sports: any[] }): ReactElement {
  return (
    <>
      {sports.length === 0 ? (
        <StyledHistoryItems>
          <H3>{resources.commom.noSport}</H3>
        </StyledHistoryItems>
      ) : (
        <StyledHistoryItems>
          {sports.map((sport) => (
            <HistoryItem
              key={sport.id}
              id={sport.id}
              name={sport.strSport}
              img={sport.strSportThumb}
              direction={sport.direction}
            />
          ))}
        </StyledHistoryItems>
      )}
    </>
  );
}

export default HistoryItems;
