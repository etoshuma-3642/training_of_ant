import React,{useState} from "react";
import TaskModal from "./Task/ TaskView";

const todolist = ['a','b'];

const Task: React.VFC= () => {

    // stateを作成
    const [task, setTask] = useState('');

    //入力値をtextに反映
    const handleChange = (e: { target: { value: any; }; }) => setTask(e.target.value);

    // Enter押下時、ToDoに追加
    const handleEnter = (e: { key: string; }) => {
    if (e.key === 'Enter') {
        // 入力値が空白文字の場合終了
        if (!task.match(/\S/g) ) return;
        // ToDoAppクラスの「handleAdd」関数を実行
        todolist.push(task);
        setTask('');
    }
    };

return(
    <div className="task">
        <TaskModal array={todolist} />
        <input
            className="task--add"
            type="text"
            placeholder="Enter to add"
            value={task}
            onChange={handleChange}
            onKeyPress={handleEnter}
        />
    </div>
)
}

export default Task;