import React from 'react';

const Message = (props) => {
  const textStyle = {};
  if (props.isNewest) {
    textStyle.fontWeight = 'bold';
  }
  return (
    <div style={textStyle}>
      [{props.dateTime}] {props.author}: "{props.message}"
    </div>
  );
}

export default Message;
