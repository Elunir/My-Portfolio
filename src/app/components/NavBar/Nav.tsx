import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';
import * as React from 'react';
import styled from 'styled-components/macro';
import { stack as Menu } from 'react-burger-menu';
import { hero } from 'app/data/data';
import Scroll from 'react-scroll';

var Link = Scroll.Link;

export function Nav() {
  const matches = useMediaQuery('(min-width:980px)');
  const resumeLink = useMediaQuery('(min-width:1300px)');

  const mobileNav = (
    <MobileWrapper>
      <Menu right>
        <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
          <Item>Home</Item>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
          <Item>About</Item>
        </Link>
        <Link
          to="experience"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <Item>Experience</Item>
        </Link>
        <Link to="work" spy={true} smooth={true} offset={-100} duration={500}>
          <Item>Work</Item>
        </Link>
        <Item
          href={hero.resumeLink || ''}
          target="_self"
          title="Download Resume"
          rel="noopener noreferrer"
        >
          Download Resume
        </Item>
        <Item href="#contact" title="Contact">
          <Button type="button" className="btn btn-primary">
            Contact
          </Button>
        </Item>
      </Menu>
    </MobileWrapper>
  );
  const desktopNav = (
    <Wrapper>
      <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
        <Item>Home</Item>
      </Link>
      <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
        <Item>About</Item>
      </Link>
      <Link
        to="experience"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        <Item>Experience</Item>
      </Link>
      <Link to="work" spy={true} smooth={true} offset={-100} duration={500}>
        <Item>Work</Item>
      </Link>
      {resumeLink ? undefined : (
        <Item
          href={hero.resumeLink || ''}
          target="_self"
          title="Download Resume"
          rel="noopener noreferrer"
        >
          Download Resume
        </Item>
      )}
      <Item href="#contact" title="Contact">
        <Button type="button" className="btn btn-primary">
          Contact
        </Button>
      </Item>
    </Wrapper>
  );

  return <>{matches ? desktopNav : mobileNav}</>;
}

const Wrapper = styled.div`
  display: flex;
  margin-right: -1rem;
  align-items: center;
  .active {
    border-bottom: 2px solid #fff;
  }
`;

const MobileWrapper = styled.div`
  display: flex;
  margin-right: -1rem;
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 40px;
    top: 24px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #a90000;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100vh;
    top: 0;
    right: 0;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
    height: 200vh !important;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    opacity: 1;
    transition: opacity 0.3s ease 0s;
    top: 0;
    right: 0;
  }
`;

const Item = styled.a`
  color: ${p => p.theme.textSecondary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;
  margin: 1rem 0;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  .icon {
    margin-right: 0.25rem;
  }
`;

const Button = styled.button`
  color: ${p => p.theme.primary};
  background-color: transparent;
  border: unset;
  border 1px solid ${p => p.theme.primary};
  padding: 0.5rem 1rem;
  border-radius: 0.35rem;
  :hover {
    background-color: ${p => p.theme.primary};
    color: ${p => p.theme.background};
    font-weight: 400;
  }
`;
