import {LinkProps} from "react-router-dom";
import React from "react";
import {LinkStyles} from "./link.styles";

interface Props extends Omit<LinkProps, "className" | "style" | "children"> {
  children: React.ReactNode
}

const LinkWrapper: React.FC<Props> = (props) => {
  return <LinkStyles {...props}>{props.children}</LinkStyles>
}

export default LinkWrapper;