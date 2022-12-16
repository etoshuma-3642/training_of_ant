import React from "react";
interface Props {
  todoArray: string[];
  clickCallback: (index:number) => void;
}


const TaskView: React.FC<Props> = ({todoArray,clickCallback}) => {

  return(
    <div className="task--view">
        {
        todoArray.map((value,index) => 
        <div className="task__list--view"><input type="button" value="達成" onClick={() => clickCallback(index)} /><p>{value}</p></div>)
        }
    </div>
  )
}

export default TaskView;