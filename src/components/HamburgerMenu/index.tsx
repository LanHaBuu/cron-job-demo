import React, { FC } from "react";
import styles from "./index.module.css"; // Adjust the path if necessary

const HamburgerMenu: FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ open, setOpen }) => {
  return (
    <div
      className={`${styles.navIcon} ${open ? styles.open : ""}`}
      onClick={() => setOpen((prev) => !prev)}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default HamburgerMenu;
