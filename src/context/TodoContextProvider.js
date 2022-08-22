import React, { useReducer, createContext } from "react";
import { uniqueId } from "../helper/function";

export const TodoData = createContext();

const initialState = [];

const reducer = (data = initialState, { payload, type }) => {
  switch (type) {
    case "ADD_ITEM": {
      const newData = {
        text: payload.text,
        category: payload.type ? payload.type : "دیگر",
        isChecked: false,
        ID: uniqueId(),
      };
      return [newData, ...data];
    }
    case "REMOVE_ITEM": {
      const removedIndex = data.findIndex((item) => item.ID === payload.ID);
      const newData = [...data];
      newData.splice(removedIndex, 1);
      return [...newData];
    }
    case "CHECK_ITEM": {
      const checkedIndex = data.findIndex((item) => item.ID === payload.ID);
      const newData = [...data];
      newData.splice(checkedIndex, 1);
      if (!data[checkedIndex].isChecked) {
        return [
          ...newData,
          { ...data[checkedIndex], isChecked: !data[checkedIndex].isChecked },
        ];
      }
      return [
        { ...data[checkedIndex], isChecked: !data[checkedIndex].isChecked },
        ...newData,
      ];
    }
    case "LOAD_DATA": {
      return [...payload];
    }
    default:
      return data;
  }
};

const TodoContextProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoData.Provider value={{ dispatch, data }}>{children}</TodoData.Provider>
  );
};

export default TodoContextProvider;
