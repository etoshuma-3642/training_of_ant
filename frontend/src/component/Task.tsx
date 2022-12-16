import React,{useState} from "react";
import TaskView from "./Task/ TaskView";

const todoRandomlist = [
    'スクワット3回',
    '大きく深呼吸10回',
    'その場で足踏み10回',
    '"生麦生米生卵"を噛まずに3回"',
    'ちょっと贅沢',
    'コーヒーブレイク',
    '好きな音楽を聴く',
    '仮眠をとる',
    '甘いものを食べる',
    '雑談をする',
    '整理整頓をする',
    'ストレッチをする',
    'いい香りを嗅ぐ',
];

const Task: React.FC= () => {
    const [task, setTask] = useState('');
    const [todolist,setTodolist] = useState(todoRandomlist);
    
    const clickCallback = (index: number) => {
        const newTodos = [...todolist]
        newTodos.splice(index,1)
        setTodolist(newTodos)
	};

    // stateを作成

    //入力値をtextに反映
    const handleChange = (e: { target: { value: any; }; }) => {
        if(e.target.value.length<30){
            setTask(e.target.value);
        }
        else{
            alert("タスクの文字列は30文字以内で入力してください")
        }
    }

    // Enter押下時、ToDoに追加
    const handleEnter = (e: { key: string; }) => {
    if (e.key === 'Enter') {
        // 入力値が空白文字の場合終了
        if (!task.match(/\S/g) ) return;
        // ToDoAppクラスの「handleAdd」関数を実行
        // const randomTask = todoRandomlist[Math.floor(Math.random() * todoRandomlist.length)];
        console.log(todolist.length)
        // setTodolist([...todolist,randomTask])
        setTodolist([...todolist, task])
        setTask('')
    }
    };

return(
    <div className="task">
        <TaskView todoArray={todolist} clickCallback={clickCallback}/>
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