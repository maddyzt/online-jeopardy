// const data = {
//   "id": 2,
//   "answer": "the Western division",
//   "question": "The Atlanta Braves are in this division of the National League",
//   "value": 100,
//   "airdate": "1985-02-08T12:00:00.000Z",
//   "created_at": "2014-02-11T22:47:18.829Z",
//   "updated_at": "2014-02-11T22:47:18.829Z",
//   "category_id": 2,
//   "game_id": null,
//   "invalid_count": null,
//   "category": {
//       "id": 2,
//       "title": "baseball",
//       "created_at": "2014-02-11T22:47:18.706Z",
//       "updated_at": "2014-02-11T22:47:18.706Z",
//       "clues_count": 45
//   }
// }

export const cleanQuestionData = (questionData) => {
  
  if (questionData) {
    const cleanQuestionOutput = {
      questionText: questionData.question,
      answerText: questionData.answer,
      value: questionData.value,
      category: questionData.category.title
    }
    return cleanQuestionOutput;
  }
}

// console.log(cleanQuestionData(data));