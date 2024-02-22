// src/components/QuestionList.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { markForReview, moveToNextQuestion, answerQuestion,resetExam } from '../redux/Slices/questionSlice';


const QuizQuestions = () => {
   
    const questions = useSelector((state) => state.questions.list);
    const currentQuestionIndex = useSelector((state) => state.questions.currentQuestionIndex);
    const currentQuestion = questions[currentQuestionIndex]
    
    // const userAnswers = useSelector((state) => state.questions.userAnswers);

    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setSelectedOption(value);
    
        
    };
    const handleSave= ()=>{
        dispatch(answerQuestion({ selectedOptionIndex: selectedOption }));
        dispatch(moveToNextQuestion());
        
          setSelectedOption('');
    }

      const handleMarkForReviewAndNext = () => {
        dispatch(markForReview());
        dispatch(moveToNextQuestion()); 
    };
    
    const handleReset = () => {
        dispatch(resetExam());
    };
    const handleSkip = ()=>{
        dispatch(moveToNextQuestion()); 
      }

    const buttonstyle = {
        cursor:'pointer'
    }

  return (
    <div className="quiz-questions">

        <div>
            <div className='questionTop'>
                <h3>{currentQuestion.id}</h3>
            </div>
            <p>{currentQuestion.text}</p>
            <form>
                {currentQuestion.options.map((option, index) => (
                <div key={index}>
                    <input
                    type="radio"
                    id={`option${index}`}
                    name="answer"
                    value={index}
                    onChange={handleChange}
                    />
                    <label htmlFor={`option${index}`}>{option}</label>
                </div>
                ))}
            </form>
        </div>

        <div className='buttons'>
            <div className='insideButton' >
                <button onClick={handleMarkForReviewAndNext} style={buttonstyle}>Mark for review and Next</button>
                <button onClick={handleReset}  style={buttonstyle}>Reset</button>
                <button onClick={handleSkip}  style={buttonstyle}>Skip</button>
            </div>
            <div>
                <button onClick={handleSave}  style={buttonstyle}>
                    Save and Next
                </button>
            </div>
        </div>
  </div>
  );
};

export default QuizQuestions;
