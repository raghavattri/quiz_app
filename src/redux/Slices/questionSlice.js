import { createSlice } from '@reduxjs/toolkit';
import questions from "../../utils/questions"

const questionsSlice = createSlice({
  name: 'questions',
  initialState: {
    list: 
        questions
    , 
    currentQuestionIndex: 0,
    markedForReview: [],
    userAnswers: [],
    score:0,
  },
  reducers: {
    markForReview: (state) => {
        const currentQuestionId = state.list[state.currentQuestionIndex].id;
        
        if (!state.markedForReview.includes(currentQuestionId)) {
          state.markedForReview.push(currentQuestionId);
        }
      },
    skipQuestion: (state) => {
      state.currentQuestionIndex = Math.min(state.currentQuestionIndex + 1, state.list.length - 1);
    },
    answerQuestion: (state, action) => {
        const currentQuestion = state.list[state.currentQuestionIndex];
        const userAnswerIndex = state.userAnswers.findIndex((answer) => answer.questionId === currentQuestion.id);
      
        if (userAnswerIndex !== -1) {
        
          state.userAnswers[userAnswerIndex].userAnswer = parseInt(action.payload.selectedOptionIndex);
        } else {
            let  correct = false
            if(currentQuestion.correctAnswer === parseInt(action.payload.selectedOptionIndex)){
                correct = true;
            }
            
          state.userAnswers.push({
            questionId: currentQuestion.id,
            correctAnswer: currentQuestion.correctAnswer,
            userAnswer: parseInt(action.payload.selectedOptionIndex),
            correct:correct
          });
        }
      },
      jumpToQuestion: (state, action) => {
        const { payload: questionId } = action;
        const questionIndex = state.list.findIndex((question) => question.id === questionId);
  
        if (questionIndex !== -1) {
          state.currentQuestionIndex = questionIndex;
        }
        },
    
    moveToNextQuestion: (state) => {
        state.currentQuestionIndex = Math.min(state.currentQuestionIndex + 1, state.list.length - 1);
    },
    resetExam: (state) => {
        state.userAnswers = [];
        state.markedForReview = [];
        state.currentQuestionIndex = 0;
      },
      calculateScore: (state) => {
        state.userAnswers.forEach((ans) => {
          if (ans.correct === true) {
             state.score += 1;
          }else{
            console.log("no")
          }
        });
      },
      
  },
});

export const {
  markForReview,
  skipQuestion,
  answerQuestion,
  moveToNextQuestion,
  jumpToQuestion,
  resetExam,
  calculateScore
} = questionsSlice.actions;

export default questionsSlice.reducer;
