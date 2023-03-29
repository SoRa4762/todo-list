import React, { ChangeEvent, FC, useState } from "react";
import "./App.css";
import ToDoTask from "./Components/ToDoTask";
import { ITask } from "./Interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  //setting a type
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    //narrowing
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else if (e.target.name === "deadline") {
      setDeadline(parseInt(e.target.value));
      //Number(e.target.value) is valid as well
    } //else if (e.key === "Enter")
    //!i cannot do this because HTMLInputElements donot support "key" event
  };

  //adding values to the array of setTodoList because we cannot add it otherwise, becasue it is not JS but TS
  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline }; //*we didnt need this in JSX but here we need this becasue we need to tell it that these are actually legit values that satisfies our requirement
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
    // console.log(todoList);
  };

  //this is a function that will be called by the to do list section to remove the list OFC!
  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((removeTask) => {
        return removeTask.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            name="task" //added name because we need it for narrowing the variables through if else
            placeholder="Task"
            onChange={handleChange}
            value={task}
          />
          <input
            type="number"
            name="deadline"
            placeholder="Deadline (in Days)"
            onChange={handleChange}
            value={deadline}
          />
        </div>
        <button onClick={addTask}>Add task</button>
      </div>
      <div className="todoList">
        {/* we have mapped the array of the setTodoList to here so we can check it thorugh TS and then pass it the props to ToToTask which will display our values there */}
        {todoList.map((displayTask: ITask, key: number) => {
          return (
            <ToDoTask
              key={key}
              displayT={displayTask} //this just passes the values to the other side
              completeTask={completeTask} //this passes the remove function to the other side
            />
          );
        })}
        {/* <ToDoTask /> for styling*/}
      </div>
    </div>
  );
};

export default App;
