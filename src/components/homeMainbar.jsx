
import { useLocation, useNavigate } from 'react-router-dom';
import Questions from './questions';
import QuestionList from './questionList';
import "./homemainbar.scss";

const HomeMainbar = () => {

  const navigate=useNavigate();
  const location=useLocation();
  const user=2;

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

  const redirect=()=>{

    if(user===null){
      alert("login or signup to ask question")
      navigate('/auth')
    }
    else{
      navigate("/askquestion");
    }
    
  }

  
  return (
    <div className='main-bar'>

      <div className='main-bar-header'>

        {

          location.pathname==='/'?<h1>Top Questions</h1>:<h1>ALL Questions</h1>
        }
        <button onClick={redirect} className='ask-btn'>Ask Question</button>

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