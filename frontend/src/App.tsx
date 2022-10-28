import './App.css';
import CommonTxt from './component/CommonTxt';
import ModalBtn from './component/ModalBtn';

function App() {
  return (
    <div className="App">
      <ModalBtn genre="help" />
      <ModalBtn genre="task" />
      <ModalBtn genre="addTask" />
      <ModalBtn genre="charaDescription" />
      <CommonTxt>テキストコンポーネント</CommonTxt>
    </div>
  );
}

export default App;
