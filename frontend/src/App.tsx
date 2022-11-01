import './assets/scss/styles.scss';
import CommonTitle from './component/CommonTitle';
import ModalBtn from './component/ModalBtn';
import CommonTxt from './component/CommonTxt';

function App() {
  return (
    <div className="globalContainer">
      <div className="container">
        <CommonTitle>タイトルコンポーネント</CommonTitle>
        <div className="moduleArea _help">
          <ModalBtn genre="help" />
        </div>
        <div className="moduleArea _chara">
          <ModalBtn genre="charaDescription" />
        </div>
        <div className="moduleArea _task">
          <ModalBtn genre="task" />
        </div>
        <div className="moduleArea _addTask">
          <ModalBtn genre="addTask" />
        </div>
        <CommonTxt>テキストコンポーネント</CommonTxt>
      </div>
    </div>
  );
}

export default App;
