import React, { useContext, useState } from "react";

//components
import TodoBox from "./shared/TodoBox";

//context
import { DataContext } from "../contexts/DataContexProvider";

//styles
import styles from "./TodoMenu.module.css";

function TodoMenu(props) {
  const { state, dispatch } = useContext(DataContext);
  // console.log(state)
  const [inputs, setValue] = useState({ text: "", selection: "study" });
  const changeHandler = (event) => {
    setValue({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };
  const [inputVisible, setVisible] = useState(false);
  return (
    <div className={styles.container}>
      {!inputVisible ? (
        <button
          onClick={() => {
            setVisible(true);
          }}
          className={styles.addNewBtn}
        >
          add new item
        </button>
      ) : (
        <div className={styles.inputPart}>
          <form>
            <input
              type="text"
              name="text"
              value={inputs.text}
              onChange={changeHandler}
              placeholder="type here"
            />
            <select
              name="selection"
              value={inputs.selection}
              onChange={changeHandler}
            >
              <option value="work">work</option>
              <option value="study">study</option>
              <option value="fun">fun</option>
            </select>
            <button
              type="button"
              onClick={() => {
                dispatch({
                  type: "ADD_NEW",
                  payload: {
                    sort: inputs.selection,
                    text: inputs.text,
                    isChecked: false,
                  },
                });
                setValue({ text: "", selection: "study" });
              }}
            >
              Add
            </button>
          </form>
        </div>
      )}
      <div className={styles.todoMenu}>
        {state.length ? (
          state.map((item) => <TodoBox data={item} key={item.key} />)
        ) : (
          <p>What if you add an item 😥</p>
        )}
      </div>
    </div>
  );
}

export default TodoMenu;
