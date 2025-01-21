import { themes } from "@/config";
import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";
import styled from "styled-components";

const WrapperLink = styled(Link)`
  color: ${themes.main};
  outline: none;
  border: none;
  text-decoration: none;

`;

interface ILinkCustom extends LinkProps {
  children: ReactNode;
  target?: string;
  style?: {};
}

const LinkCustom = ({ children, ...props }: ILinkCustom) => {
  return <WrapperLink {...props}>{children}</WrapperLink>;
};

export default LinkCustom;
