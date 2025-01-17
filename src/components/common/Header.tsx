import { devices, themes } from "@/config";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Flex from "../commonStyled/Flex";
import Box from "../commonStyled/Box";
import { pixel, rowdies } from "@/fonts";
import { links } from "@/config/constant";
import HamburgerMenu from "../HamburgerMenu";
import { useClickAway, useWindowSize } from "react-use";
import { useRouter } from "next/router";

const MB_MENU_HEIGHT = 250;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  background-color: #0000008a;
`;

const Navbar = styled.nav`
  width: 100%;
  height: 85px;

  @media ${devices.mobileM} {
    max-width: 540px;
    padding-left: 0;
  }
  @media ${devices.mobileL} {
    max-width: 720px;
  }
  @media ${devices.tablet} {
    max-width: 960px;
  }
  @media ${devices.laptop} {
    max-width: 1140px;
  }
  @media ${devices.laptopL} {
    max-width: 1320px;
  }
`;

const NavInner = styled(Flex)`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Menu = styled(Box)`
  display: none;

  @media ${devices.tablet} {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 0 30px;
  }
`;

const Text = styled.p`
  margin: 0;
  font-size: 30px;
  font-weight: 700;
  color: ${themes.main};
  text-transform: uppercase;

  @media ${devices.desktop} {
    font-size: 18px;
  }
`;

const MenuItem = styled(Flex)`
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  position: relative;
  color: ${themes.main};

  &:hover {
    & > ${Text} {
      color: #fff;
      transition: color 0.5s ease;
    }
    & > svg {
      fill: #fff;
      transition: fill 0.5s ease;
    }
  }
`;

const HamberMenu = styled(Flex)`
  align-items: center;

  @media ${devices.laptop} {
    display: none;
  }
`;

const MobileMenu = styled.div<{ show?: boolean; height: number }>`
  width: 100%;
  height: ${({ show, height }) => (show ? height : 0)}px;
  background-color: #0000002d;
  transition: height 0.3s ease;
  overflow: hidden;

  @media ${devices.laptop} {
    display: none;
  }
`;

const MbMenuText = styled(Flex)`
  margin: 0;
  color: ${themes.main};
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;
`;

const MbMenuItem = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    & > ${MbMenuText} {
      color: ${themes.text};
      transition: color 0.5s ease;
    }
    & > svg {
      fill: ${themes.text};
      transition: fill 0.5s ease;
    }
  }
`;

const Button = styled.div`
  font-weight: 700;
  font-size: 20px;
  border-radius: 10px;
  background-color: #03c1ff;
  color: #fff;
  width: 110px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.5s ease;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
  font-size: 14px;

  @media ${devices.laptop} {
    width: 150px;
    height: 50px;
    font-size: 20px;
  }
`;

const Header = () => {
  const [showMenuMb, setShowMenuMb] = useState(false);
  const [mbMenuHeigh, setMbMenuHeigh] = useState(MB_MENU_HEIGHT);

  const { width } = useWindowSize();

  useEffect(() => {
    if (width > 992) {
      setMbMenuHeigh(MB_MENU_HEIGHT);
      setShowMenuMb(false);
    }
  }, [width]);

  const headerRef = useRef(null);

  useClickAway(headerRef, () => {
    setShowMenuMb(false);
  });

  const { push } = useRouter();

  return (
    <StyledHeader ref={headerRef} suppressHydrationWarning>
      <Navbar>
        <NavInner>
          <Menu className={pixel.className}>
            <MenuItem
              onClick={() => {
                push("/#about");
              }}
            >
              <Text>About</Text>
            </MenuItem>
            <MenuItem
              onClick={() => {
                push("/#howtobuy");
              }}
            >
              <Text>How to buy</Text>
            </MenuItem>
            <MenuItem
              onClick={() => {
                push("/#why");
              }}
            >
              <Text>Mission</Text>
            </MenuItem>

            <MenuItem
              onClick={() => {
                push("/image");
                window.scrollTo(0, 0);
              }}
            >
              <Text>Image</Text>
            </MenuItem>

            <MenuItem
              onClick={() => {
                window.open(links.telegram);
              }}
            >
              <Text>Telegram</Text>
            </MenuItem>

            <MenuItem
              onClick={() => {
                window.open(links.twitter);
              }}
            >
              <Text>Twitter</Text>
            </MenuItem>
          </Menu>

          <Flex>
            <Button
              onClick={() =>
                window.open(
                  "https://suiai.fun/pool/0x4b1c21a50c9c62c30d80592082f0997c815017de8b84168e2fddb748076eec63"
                )
              }
            >
              BUY $AICAT
            </Button>
            <HamberMenu>
              <HamburgerMenu open={showMenuMb} setOpen={setShowMenuMb} />
            </HamberMenu>
          </Flex>
        </NavInner>
      </Navbar>

      <MobileMenu
        show={showMenuMb ? showMenuMb : undefined}
        height={mbMenuHeigh}
        className={rowdies.className}
      >
        <MbMenuItem>
          <MbMenuText
            onClick={() => {
              push("/#about");
              setShowMenuMb(false);
            }}
          >
            About
          </MbMenuText>
        </MbMenuItem>

        <MbMenuItem>
          <MbMenuText
            onClick={() => {
              push("/#howtobuy");
              setShowMenuMb(false);
            }}
          >
            How to buy
          </MbMenuText>
        </MbMenuItem>
        <MbMenuItem>
          <MbMenuText
            onClick={() => {
              push("/#why");
              setShowMenuMb(false);
            }}
          >
            Mission
          </MbMenuText>
        </MbMenuItem>

        <MbMenuItem>
          <MbMenuText
            onClick={() => {
              push("/image");
              setShowMenuMb(false);
            }}
          >
            Image
          </MbMenuText>
        </MbMenuItem>

        <MbMenuItem>
          <MbMenuText
            onClick={() => {
              window.open(links.telegram);
              setShowMenuMb(false);
            }}
          >
            Telegram
          </MbMenuText>
        </MbMenuItem>

        <MbMenuItem>
          <MbMenuText
            onClick={() => {
              window.open(links.twitter);
              setShowMenuMb(false);
            }}
          >
            Twitter
          </MbMenuText>
        </MbMenuItem>
      </MobileMenu>
    </StyledHeader>
  );
};

export default Header;
