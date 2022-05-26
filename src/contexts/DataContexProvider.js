import React, { useReducer, createContext } from "react";

//func
import { keyGenerator } from "../helper/functions";

export const DataContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW":
      if (!action.payload.text) return [...state];
      state.push({
        ...action.payload,
        key: keyGenerator(action.payload.text, action.payload.sort),
        edit: false,
      });
      console.log(state);
      return [...state];
    case "CHECKED":
      let indexOfChecked = state.findIndex(
        (item) => item.key === action.payload.key
      );
      state[indexOfChecked].isChecked = !state[indexOfChecked].isChecked;
      return [...state];
    case "EDIT":
      let indexOfEdit = state.findIndex(
        (item) => item.key === action.payload.key
      );
      state[indexOfEdit].edit = true;
      return [...state];
    case "SAVE_EDITS":
      let indexOfSave = state.findIndex(
        (item) => item.key === action.payload.key
      );
      state[indexOfSave] = {
        text: action.payload.text,
        sort: action.payload.sort,
        key: keyGenerator(action.payload.text, action.payload.sort),
        edit: false,
        isChecked: state[indexOfSave].isChecked,
      };
      return [...state];
    case "DELETE":
      let indexOfDelete = state.findIndex(
        (item) => item.key === action.payload.key
      );
      state.splice(indexOfDelete, 1);
      return [...state];
    default:
      return [];
  }
};

const DataContexProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContexProvider;
