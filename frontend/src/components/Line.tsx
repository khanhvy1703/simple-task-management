import React from 'react';

interface ILineProps {
  width?: string, 
  height?: string, 
  backgroundColor?: string,
  opacity?: string
}
const Line = ({width, height, backgroundColor, opacity}:ILineProps) => {
  return (
    <div style={{
      width: width?? '100%',
      height: height?? '2px',
      backgroundColor: backgroundColor ?? 'black',
      opacity: opacity?? '1',
    }} />
  )
}

export default Line;