import './assets/scss/styles.scss';
import CommonTitle from './component/CommonTitle';
import ModalBtn from './component/ModalBtn';
import Gauge from './component/ Motivationgauge';
import CommonTxt from './component/CommonTxt';

function App() {
  return (
    <div className="App">
      <CommonTitle>タイトルコンポーネント</CommonTitle>
      <ModalBtn genre="help" />
      <ModalBtn genre="task" />
      <ModalBtn genre="addTask" />
      <ModalBtn genre="charaDescription" />
      <CommonTxt>テキストコンポーネント</CommonTxt>
      <Gauge />
    </div>
  );
}

export default App;
