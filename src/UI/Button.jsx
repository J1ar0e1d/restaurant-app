import React from "react";

const Button = ({ children, textOnly, ...props }) => {
  const cssClasses = textOnly ? "text-button" : "button";

  return (
    <>
      <button className={cssClasses} {...props}>
        {children}
      </button>
    </>
  );
};

export default Button;
