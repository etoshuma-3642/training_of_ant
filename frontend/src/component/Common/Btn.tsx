import React from "react";

interface Props {
  genre: string;
  openModal: () => void;
}

const Btn: React.VFC<Props> = ({genre, openModal}) => {

  return(
    <p onClick={openModal} className="modalBtn">{genre}コンポーネント</p>
  )
}

export default Btn;