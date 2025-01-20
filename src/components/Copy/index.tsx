import React from "react";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import CopyIcon from "../icons/CopyIcon";
import { themes } from "@/config";
interface IComponentCopy {
  stringCopy: string;
  color?: string
}
const WraperCopy = styled.div`
  position: relative;
  height: 100%;
`;

const WapperCopyIcon = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
const ComponentCopy = ({ stringCopy,color }: IComponentCopy) => {
  const copyAddress = () => {
    if (navigator.clipboard && navigator.permissions) {
      navigator.clipboard.writeText(stringCopy).then(() => displayToast());
    } else if (document.queryCommandSupported("copy")) {
      const ele = document.createElement("textarea");
      ele.value = stringCopy;
      document.body.appendChild(ele);
      ele.select();
      document.execCommand("copy");
      document.body.removeChild(ele);
      displayToast();
    }
  };

  function displayToast() {
    toast.success("Copied!");
  }
  return (
    <>
      <ToastContainer />
      <WraperCopy>
        <WapperCopyIcon onClick={copyAddress}>
          <CopyIcon height='18px' width='18px' fill={color ?? themes.main} />
        </WapperCopyIcon>
      </WraperCopy>
    </>
  );
};

export default ComponentCopy;
