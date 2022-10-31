import './assets/scss/styles.scss';
import ModalBtn from './component/ModalBtn';

function App() {
  return (
    <div className="App">
      <ModalBtn genre="help" />
      <ModalBtn genre="task" />
      <ModalBtn genre="addTask" />
      <ModalBtn genre="charaDescription" />
    </div>
  );
}

export default App;
