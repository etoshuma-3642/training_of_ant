import CommonTxt from './component/CommonTxt';
import './assets/scss/styles.scss';
import CommonTitle from './component/CommonTitle';
import CommonTxt from './component/CommonTxt';
import Ant from './component/Ant';
import ModalBtn from './component/ModalBtn';
import Gauge from './component/ Motivationgauge';

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <CommonTitle>タイトルコンポーネント</CommonTitle>
      <ModalBtn genre="help" />
      <ModalBtn genre="task" />
      <ModalBtn genre="addTask" />
      <ModalBtn genre="charaDescription" />
      <CommonTxt>テキストコンポーネント</CommonTxt>
      <Gauge />
=======
    <div className="globalContainer">
      <div className="container">
        <div className="content">
          <CommonTitle>働きたくないアリ</CommonTitle>
          <Ant quote="働きたくない"/>
          <CommonTxt>テキストコンポーネント</CommonTxt>
        </div>
        <ModalBtn genre="help" />
        <ModalBtn genre="charaDescription" />
        <ModalBtn genre="task" />
        <ModalBtn genre="addTask" />
      </div>
>>>>>>> 8e2224232fdd8956f22dde7f30aa6ef760ab10b1
    </div>
  );
}

export default App;
