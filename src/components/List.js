import { connect } from "react-redux";
import { deleteTodo } from "../actions";

const List = (props) => {
  return (
    <div>
      <h1>List Items</h1>
      <ul>
        {props.todos &&
          props.todos.map((todo) => (
            <div className="list-box">
              <li
                className="list-items"
                key={todo.id}
                onClick={() => {
                  window.location = `/list-id:${todo.id}`;
                }}
              >
                {todo.message}
              </li>
              <button onClick={() => props.dispatch(deleteTodo(todo.id))}>
                Delete
              </button>
            </div>
          ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos.data,
});

export default connect(mapStateToProps)(List);
