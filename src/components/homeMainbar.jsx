
import { useLocation } from 'react-router-dom';
import Questions from './questions';
import QuestionList from './questionList';

const HomeMainbar = () => {

  const questionsList=[
    {
      id:1,
      votes:1,
      title:"what is a function",
      noOfAnswers:5,
      
    },
    {
      id:2,
      votes:3,
      title:"what is a function",
      noOfAnswers:15,
      
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