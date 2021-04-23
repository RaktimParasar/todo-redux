import { connect } from "react-redux";
import { addItems } from "../actions/itemsAction";

const AddItems = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let input = e.target.userData.value;
    props.dispatch(addItems(input));
    e.target.userData.value = "";
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input type="text" name="userData" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default connect()(AddItems);
