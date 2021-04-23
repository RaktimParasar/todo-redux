import { connect } from "react-redux";
import { addTodo } from "../actions";

const Addtodo = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let input = e.target.userInput.value;
    props.dispatch(addTodo(input));
    e.target.userInput.value = "";
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input type="text" name="userInput" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default connect()(Addtodo);
