import { createSlice } from "@reduxjs/toolkit";
import reducers from "../../assets/js/reducerMaker";
import initialState from "../../assets/js/initialStateMaker";

const weeklySlice = createSlice({
  name: "weekly",
  initialState: initialState("weekly"),
  reducers: reducers,
});

const { addTask, deleteTask, editTask, setTasks, updateTime, selectTag, setUpload } = weeklySlice.actions;
export const actions = {
  set: setTasks,
  add: addTask,
  edit: editTask,
  delete: deleteTask,
  updateTime: updateTime,
  selectTag: selectTag,
  setUpload: setUpload
};
export default weeklySlice.reducer;
