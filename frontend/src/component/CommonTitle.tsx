import React from "react";

interface Props {
  children: React.ReactNode;
}

const CommonTitle: React.VFC<Props> = ({children}: Props) => {
  return(
    <p className='Title'>{children}</p>
  )
}

export default CommonTitle;
