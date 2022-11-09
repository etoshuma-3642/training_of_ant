import React from "react";
import Unmotivated from "../assets/images/ant_unmotivated.png";

interface Props {
  quote: string;
}

const Ant: React.VFC<Props> = ({quote}) => {
  return(
    <div className="">
      <img src={Unmotivated} alt=""/>
      <p>{quote}</p>
    </div>
  )
}

export default Ant;
