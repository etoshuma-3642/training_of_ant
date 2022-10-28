import React from "react";
import AddTaskModal from "./Modal/ AddTaskModal";
import TaskModal from "./Modal/ TaskModal";
import CharaDescriptionModal from "./Modal/CharaDescriptionModal";
import HelpModal from "./Modal/HelpModal";

interface Props {
  genre: string;
}

const ModalBtn: React.VFC<Props> = ({genre}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const clickKcBtn = () => {
    setIsOpen(!isOpen)
  }

  const SwitchModalContent = () => {
    switch (genre) {
      case "help":
        return <HelpModal />;
      case "task":
        return <TaskModal />;
      case "addTask":
        return <AddTaskModal />;
      case "charaDescription":
        return <CharaDescriptionModal />;
      default:
        return <p>じゃないよー</p>;
    }
  }

  return(
    <>
      <p className="modalBtn" onClick={clickKcBtn}>{genre}コンポーネント</p>
      <div className={`${isOpen ? 'modal--open' : 'modal--close'}`}>
        <SwitchModalContent />
      </div>
    </>
  )
}

export default ModalBtn;