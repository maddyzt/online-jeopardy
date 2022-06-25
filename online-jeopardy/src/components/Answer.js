const Answer = (props) => {
  const { answerText } = props;
  return (
    <div>
    <h1>Answer (will appear after 15 seconds)</h1>
    <p>
      {answerText}
    </p>
    </div>
  )
}

export default Answer;