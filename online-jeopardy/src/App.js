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
  
  const fetchQuestionData = () => {
    return axios
    .get(`https://jservice.io/api/random`)
    .then((res) => res.data);
  }

  const updateQuestion = () => {
    fetchQuestionData()
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
      setQuestion(cleanQuestionData(data[i]))
      }
    })
    .catch((err) => {console.log(err)})
  }

  return (
    <div className="App">
      <CategoryHeader title="American History" />
      <Question />
      <Answer />
      <Button onClick={updateQuestion} />
      </div>
  );
}

export default App;
