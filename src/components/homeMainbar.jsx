
import { useLocation } from 'react-router-dom';

const HomeMainbar = () => {

  const questionsList=[
    {
      id:1,
      votes:1,
      title:"what is a function"
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
          </>
        }
      </div>

    </div>
  )
}

export default HomeMainbar;