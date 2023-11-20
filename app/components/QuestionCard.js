import React from 'react'

const QuestionCard = (props) => {

    const { currentQuestionIndex, questions, answers, userAnswer, correct_answer, onClik } = props;

    const getBGColor = (userAnswer, correct_answer, answer) => {
        const isCorrect = userAnswer ? userAnswer === correct_answer : undefined;

        if ((isCorrect === true && answer === userAnswer) || (isCorrect === false && answer === correct_answer)) {
            return 'bg-green-500 text-white';
        }

        if (isCorrect === false && answer === userAnswer) return 'bg-red-500 text-white';

        return 'bg-white text-red-500';
    }

    return (
        <main>
            {/* <p className='text-md max-w-[400px]' dangerouslySetInnerHTML={{ __html: questions}} /> */}
            <h1 className='text-xl bg-gray-300 p-2.5 rounded-md shadow-md mb-2'>{currentQuestionIndex + 1}. {questions}</h1>
            <div className='flex flex-col justify-center items-center gap-2 shadow-sm'>
                {
                    answers.map((answer, index) => {
                        return <div
                            key={answer}
                            className={`${getBGColor(userAnswer, correct_answer, answer)} w-full flex flex-col justify-center items-center p-1.5 bg-gray-400 hover:bg-gray-800 hover:cursor-pointer rounded-md shadow-md hover:text-white`}
                            onClick={() => onClik(answer, index)}>
                            <p className='truncate' dangerouslySetInnerHTML={{ __html: answer }} />
                        </div>
                    })
                }
            </div>
        </main>

    )
}

export default QuestionCard