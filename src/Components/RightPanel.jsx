import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { jumpToQuestion , calculateScore} from '../redux/Slices/questionSlice';
import { useNavigate } from 'react-router-dom';
import WebcamCapture from './Webcam';

const RightPanel = () => {
    const questions = useSelector((state) => state.questions.list);
    const markedForReview = useSelector((state) => state.questions.markedForReview);
    const userAnswers = useSelector((state) => state.questions.userAnswers);
    const navigate = useNavigate();
    const [examTime, setExamTime] = useState(30);

    const dispatch = useDispatch();
    const jumpToQuestionHandler = (questionId) => {
        dispatch(jumpToQuestion(questionId));
    };

    useEffect(() => {
        
        const timerInterval = setInterval(() => {
            if (examTime > 0) {
              setExamTime(examTime-1); 
            } else {
              clearInterval(timerInterval);
            }
          }, 1000); 

      }, [examTime]);

      
      const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
      };


      if(examTime === 0 ){
        
            dispatch(calculateScore());
            navigate("/score");


      }
  return (
    <div className="right-panel">
      <div style={{height:'150px',width:'150px',backgroundColor:'white',padding:'5px',margin:'10px'}}>
          
      </div>
     <div className="timer">
        <span>Time Remaining: {formatTime(examTime)}</span>
      </div>
      <h3>Questions List</h3>
      <ul>
        {questions.map((question) => (
            <li
            key={question.id}
            className={`${
                markedForReview.includes(question.id) ? 'marked-for-review' : ''
            } ${userAnswers.some((answer) => answer.questionId === question.id) ? 'alreadyAnswered' : ''}`}
            
            onClick={() => jumpToQuestionHandler(question.id)}
            >
            {question.id}
            </li>
        ))}
        </ul>

    </div>
  );
};

export default RightPanel;
