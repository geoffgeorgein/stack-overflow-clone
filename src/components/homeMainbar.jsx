
import { useLocation } from 'react-router-dom';
import Questions from './questions';
import QuestionList from './questionList';
import "./homemainbar.scss";

const HomeMainbar = () => {

  const questionsList=[
    {
      id:1,
      votes:1,
      title:"what is a function",
      noOfAnswers:5,
      questionTags:['js','react','nodejs']
      
    },
    {
      id:2,
      votes:3,
      title:"what is a function",
      noOfAnswers:15,
      questionTags:['R','python','nodejs']
      
    }
  ]

  const location=useLocation();
  return (
    <div className='main-bar'>

      <div className='main-bar-header'>

        {

          location.pathname==='/'?<h1>Top Questions</h1>:<h1>ALL Questions</h1>
        }

      </div>
      
      <div>
        {
          questionsList===null?
          <h1>...Loading</h1>:
          <>
            <p>{questionsList.length}questions</p>
            <QuestionList questionsList={questionsList}/>
          </>
        }
      </div>

    </div>
  )
}

export default HomeMainbar;