import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  displayT: ITask;
  completeTask(taskNameToDelete: string): void;
}

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
