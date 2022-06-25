import { useEffect } from 'react';
import axios from 'axios';


const Question = (props) => {
  const { questionText, value} = props;

  return (
    <div>
    <h1>Question</h1>
    <h2>for {value}</h2>
    <p>
      {questionText}
    </p>
    </div>
  );
};

export default Question;