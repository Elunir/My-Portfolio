import * as React from 'react';
import styled from 'styled-components/macro';

export function Nav() {
  return (
    <Wrapper>
      <Item href="#home" target="_self" title="Home" rel="noopener noreferrer">
        Home
      </Item>
      <Item
        href="#about"
        target="_self"
        title="About"
        rel="noopener noreferrer"
      >
        About
      </Item>
      <Item
        href="#experience"
        target="_self"
        title="Experience"
        rel="noopener noreferrer"
      >
        Experience
      </Item>
      <Item href="#work" target="_self" title="Work" rel="noopener noreferrer">
        Work
      </Item>
      <Item href="#contact" title="Contact">
        <Button type="button" className="btn btn-primary">
          Contact
        </Button>
      </Item>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;
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
