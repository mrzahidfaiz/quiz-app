import Quiz from "./Quiz";


const Home = async () => {

    const QuestionLimit = 10;
    const difficulty = 'easy';

    const getQuestions = async (QuestionLimit, difficulty) => {
        const response = await fetch(`https://opentdb.com/api.php?amount=${QuestionLimit}&difficulty=${difficulty}&type=multiple`)
        const Questions = await response.json();
        return Questions.results.map((question) => ({
            ...question,
            answers: [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5)
        }))
    }

    const Questions = await getQuestions(QuestionLimit, difficulty);

    return <Quiz
        questions={Questions}
        totalQuestions={QuestionLimit}
    />
}

export default Home