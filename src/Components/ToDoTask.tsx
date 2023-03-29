import React from "react";
import { ITask } from "../Interfaces";

//setting rules for the array and function that we get from the App.tsx
interface Props {
  displayT: ITask;
  completeTask(taskNameToDelete: string): void;
}

//implementing interface to the props that we got
const ToDoTask = ({ displayT, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{displayT.taskName}</span>
        <hr />
        <span>{displayT.deadline}</span>
      </div>
      <button
        onClick={() => {
          //passing value to the function so that we can execute it
          completeTask(displayT.taskName);
        }}
      >
        X
      </button>
    </div>
  );
};

//for styling only
// const ToDoTask = () => {
//   return (
//     <div className="task">
//       <div className="content">
//         <span>Watch AOT!!!</span>
//         <span>45</span>
//       </div>
//       <button>X</button>
//     </div>
//   );
// };
export default ToDoTask;
