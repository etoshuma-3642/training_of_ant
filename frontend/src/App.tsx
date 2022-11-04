import './assets/scss/styles.scss';
import CommonTitle from './component/CommonTitle';
import CommonTxt from './component/CommonTxt';
import ModalBtn from './component/ModalBtn';

function App() {
  return (
    <div className="App">
      <CommonTitle>タイトルコンポーネント</CommonTitle>
      <ModalBtn genre="help" />
      <ModalBtn genre="task" />
      <ModalBtn genre="addTask" />
      <ModalBtn genre="charaDescription" />
      <CommonTxt>テキストコンポーネント</CommonTxt>
    </div>
  );
}

export default App;
