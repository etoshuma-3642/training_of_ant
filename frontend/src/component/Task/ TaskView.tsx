import React from "react";

interface Props {
  array: string[];
}


const TaskModal: React.VFC<Props> = (todoArray) => {

  return(
    <div className="task--view">
        {
        todoArray.array.map((value) => 
        <p>{value}</p>)
        }
    </div>
  )
}

export default TaskModal;