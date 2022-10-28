import React from "react";

interface Props {
  children: React.ReactNode;
}

const CommonTxt: React.VFC<Props> = ({children}: Props) => {
  return(
    <p className="text">{children}</p>
  )
}

export default CommonTxt;
