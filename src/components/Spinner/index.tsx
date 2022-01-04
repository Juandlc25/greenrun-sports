import { ReactElement } from "react";
import Text from "../Typography/Text";
import ReactLoading from "react-loading";

function Spinner(): ReactElement {
  return (
    <div>
      <ReactLoading type="spin" color="#fff" />
      <Text color="#fff">Loading</Text>
    </div>
  );
}

export default Spinner;
