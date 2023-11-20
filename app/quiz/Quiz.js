"use client"

import React, { useState } from 'react'
import QuestionCard from '../components/QuestionCard';
import Button from '../components/Button';
import { useRouter } from 'next/navigation';

const Quiz = ({ questions, totalQuestions }) => {

    const router = useRouter();

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [userAnswer, setUserAnswer] = useState({});

    const isQuestionAnserd = userAnswer[currentQuestionIndex] ? true : false;


    const correctAnswerhandler = (answer, index) => {

        if (isQuestionAnserd) return; // already answerd

        const isCorrectAnswer = questions[currentQuestionIndex].correct_answer === answer;

        if (isCorrectAnswer) {
            setScore(prev => prev + 1);
        }

        setUserAnswer(prev => ({ ...prev, [currentQuestionIndex]: answer })) // save user's answer in Object 
    }

    const questionChangeHandler = (change) => {

        const newQuestionIndex = currentQuestionIndex + change;

        if (newQuestionIndex < 0 || newQuestionIndex >= totalQuestions) return; // no more questions

        setCurrentQuestionIndex(newQuestionIndex);

        // if (currentQuestionIndex < totalQuestions - 1) {
        //     setCurrentQuestionIndex(currentQuestionIndex => currentQuestionIndex + 1);
        // } else {
        //     alert(`Your Score = ${score}/10 , Click to Reset Quiz`)
        //     if (alert) {
        //         setScore(0);
        //         router.push('/');
        //     }

        // }

    }



    return (
        <main className='w-full h-screen flex flex-col justify-center items-center '>
            <h1 className='mb-4 font-bold'>Score: {score} Out of {totalQuestions}</h1>
            <section className='flex flex-col justify-center items-center gap-2'>
                <strong className='w-full text-right text-red-800'>Question {(currentQuestionIndex + 1) + "-" + totalQuestions}</strong>
                <div className='bg-gray-200 w-full p-3 rounded-md'>
                    <QuestionCard
                        currentQuestionIndex={currentQuestionIndex}
                        questions={questions[currentQuestionIndex].question}
                        answers={questions[currentQuestionIndex].answers}
                        userAnswer={userAnswer[currentQuestionIndex]}
                        correct_answer={questions[currentQuestionIndex].correct_answer}
                        onClik={correctAnswerhandler}
                    />
                </div>
                <div className='flex justify-between w-full'>
                    <Button onClik={() => questionChangeHandler(-1)} text='Prev' />
                    <Button onClik={currentQuestionIndex === totalQuestions - 1 ? () => router.push('/') : () => questionChangeHandler(1)} text={currentQuestionIndex === totalQuestions - 1 ? "End" : "Next"} />
                </div>
            </section>
        </main>
    )
}

export default Quiz