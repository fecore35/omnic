import React, { FunctionComponent } from "react";
import s from "./Title.module.scss";

interface TitleProps {
  type: "h2" | "h3";
  children: string;
  className?: string;
}

const Title: FunctionComponent<TitleProps> = ({
  type = "h2",
  children,
  className,
  ...props
}) => {
  const elementClass = `${className ? className : ""} ${s.title}`;

  return React.createElement(
    type,
    { ...props, className: elementClass },
    children
  );
};

export default Title;
