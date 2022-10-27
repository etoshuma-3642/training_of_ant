import React from "react";
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
      default:
        return <p>ヘルプじゃないよー</p>;
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