import React from "react";

export const Colorful = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color: color,
    fontSize: '30px',
  }
  return (
    <p style={ contentStyle }>{children}</p>
  );
};
