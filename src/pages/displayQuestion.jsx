
import LeftSidebar from "../components/leftSidebar";
import RightSidebar from "../components/rightSidebar";
import Questionsdetails from "./questiondetails";


const DisplayQuestion = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2">
        <Questionsdetails />
        <RightSidebar />
      </div>
    </div>
  );
};

export default DisplayQuestion;