import { connect } from "react-redux";
import { useState } from "react";
import { deleteItems } from "../actions/itemsAction";
import { editItems } from "../actions/itemsAction";

const ListItems = (props) => {
  const [editable, setEditadle] = useState(false);
  const [name, setName] = useState("");

  const onChangeHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h1>List Items</h1>
      <ul>
        {props.items &&
          props.items.map((item) => (
            <div className="list-box">
              {editable ? (
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={onChangeHandler}
                  required
                ></input>
              ) : (
                <li key={item.itemId}>{item.textdata}</li>
              )}
              <button
                onClick={() => {
                  if (editable) {
                    setName(item.textdata);
                    props.dispatch(editItems(name, item.itemId));
                  }
                  setEditadle(!editable);
                }}
              >
                {editable ? "Update" : "Edit"}
              </button>

              <button onClick={() => props.dispatch(deleteItems(item.itemId))}>
                Delete
              </button>
            </div>
          ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.items.itemData,
});

export default connect(mapStateToProps)(ListItems);
