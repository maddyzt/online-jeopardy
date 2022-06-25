const Button = (props) => {
  const { onClick } = props;
  return (
    <button onClick={onClick}>New Question</button>
  )
}

export default Button;