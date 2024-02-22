import React, { useEffect } from 'react';
import QuizQuestions from './QuizQuestions';
import RightPanel from './RightPanel'
import Modal from "react-modal"


const Test = () => {
  const [showModal, setShowModal] = React.useState(false);
  
  useEffect(() => {

    
    const handleBeforeUnload = (event) => {
      const confirmationMessage = 'Are you sure you want to leave? Your progress may be lost.';
      event.returnValue = confirmationMessage; 
      setShowModal(true);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  },[]);
    
  const closeModal = () => {
    setShowModal(false);
  };


  return (
    <div className='container'>
      <QuizQuestions/>
       <RightPanel/>
       <Modal isOpen={showModal} onRequestClose={closeModal}>
        <p>Are you sure you want to leave? Your progress may be lost.</p>
        <button onClick={closeModal}>Stay on Page</button>
      </Modal>
     </div>
  )
}

export default Test
