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

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
    console.log(todoList);
  };

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
            name="task"
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
        {todoList.map((displayTask: ITask, key: number) => {
          return (
            <ToDoTask
              key={key}
              displayT={displayTask}
              completeTask={completeTask}
            />
          );
        })}
        {/* <ToDoTask /> for styling*/}
      </div>
    </div>
  );
};

export default App;
