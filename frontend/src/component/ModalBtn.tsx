import React from "react";
import Btn from "./Common/Btn";
import CharaDescriptionModal from "./Modal/CharaDescriptionModal";
import HelpModal from "./Modal/HelpModal";

interface Props {
  genre: string;
}

const ModalBtn: React.VFC<Props> = ({genre}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const clickKcBtn = () => {
    setIsOpen(prevState => !prevState)
  }

  const SwitchModalContent = () => {
    switch (genre) {
      case "help":
        return <HelpModal />;
      case "charaDescription":
        return <CharaDescriptionModal />;
      default:
        return <p>じゃないよー</p>;
    }
  }

  return(
    <div className={`moduleArea moduleArea--${genre}`}>
      <Btn openModal={clickKcBtn} genre={genre} />
      <div className={`modal ${isOpen ? 'modal--open' : 'modal--close'}`}>
        <SwitchModalContent />
      </div>
    </div>
  )
}

export default ModalBtn;