import { useState, useEffect } from "react";
import axios from "axios";

import './App.css';
import CategoryHeader from './components/CategoryHeader';
import Question from './components/Question';
import Answer from './components/Answer';
import Button from './components/Button';
import { cleanQuestionData } from './helpers/cleanQuestionData';

function App(props) {
  const [question, setQuestion] = useState({});
  const [isDisplayed, setIsDisplayed] = useState(false);

  const fetchQuestionData = () => {
    return axios
    .get(`https://jservice.io/api/random`)
    .then((res) => res.data);
  }

  const updateQuestion = () => {
    setIsDisplayed(false)
    fetchQuestionData()
    .then((data) => {
      setQuestion(cleanQuestionData(data[0]))   
    })
    .catch((err) => {console.log(err)})
  }
 
  useEffect(() => {
    setInterval(() => {
      setIsDisplayed(true);
    }, 15000);
  }, []);


  return (
    <div className="App">
      <CategoryHeader title={question.category} />
      <Question questionText={question.questionText} value={question.value}/>
      <Answer answerText={isDisplayed && question.answerText}/>
      <Button onClick={updateQuestion} />
      </div>
  );
}

export default App;
