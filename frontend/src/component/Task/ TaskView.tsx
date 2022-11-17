import React from "react";

interface Props {
  array: string[];
}


const TaskModal: React.VFC<Props> = (props) => {

  return(
    <div className="task--view">
        {
        props.array.map((value) => 
        <p>{value}</p>)
        }
    </div>
  )
}

export default TaskModal;