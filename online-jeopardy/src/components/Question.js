import { useEffect } from 'react';
import axios from 'axios';


const Question = (props) => {
  const { questionText } = props;
  // let americanHistory = axios.get("https://jservice.io/api/category?id=780");
  // let sports = axios.get("https://jservice.io/api/category?id=42");
  // let science = axios.get("https://jservice.io/api/category?id=25");
  // let television = axios.get("https://jservice.io/api/category?id=67");
  // let threeLetterWords = axios.get("https://jservice.io/api/category?id=105");

  //   useEffect(() => {
  //     Promise.all([americanHistory, sports, science, television, threeLetterWords])
  //     .then((results) => {
  //       console.log(results);
  
  //       americanHistory = results[0].data;
  //       sports = results[1].data;
  //       science = results[2].data;
  //       television = results[3].data;
  //       threeLetterWords = results[4].data;
  //     })
  //   });
  return (
    <div>
    <h1>Question</h1>
    <p>
      {questionText}
    </p>
    </div>
  );
};

export default Question;