import React from "react";
import Explanation from "./Explanation";

const InstantFeedback = ({showInstantFeedback, incorrectAnswer, correctAnswer, question}) => {

    const renderMessageForCorrectAnswer = (question) => {
        const defaultMessage = 'You are correct. Please click Next to continue.';
        return question.messageForCorrectAnswer || defaultMessage;
    };

    const renderMessageForIncorrectAnswer = (question) => {
        const defaultMessage = 'Incorrect answer. Please try again.';
        return question.messageForIncorrectAnswer || defaultMessage;
    };


    return (
        <div className='explanation-text'>
            {incorrectAnswer && showInstantFeedback &&
              <>
                <div className="alert incorrect">
                  {renderMessageForIncorrectAnswer(question)}
                  <Explanation question={question} isResultPage={false} />
                </div>
              </>
            }
            {correctAnswer && showInstantFeedback &&
            <>
              <div className="alert correct">
                  {renderMessageForCorrectAnswer(question)}
              </div>
              <Explanation question={question} isResultPage={false} />
            </>
            }
            <div className='explanation'>
        </div>
        </div>)
}

export default InstantFeedback;
