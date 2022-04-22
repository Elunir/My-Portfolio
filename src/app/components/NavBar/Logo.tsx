import * as React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as LogoIcon } from './assets/logo.svg';

export function Logo() {
  return (
    <Wrapper onClick={() => window.scrollTo(0, 0)}>
      <LogoIcon className="logoIcon" />
    </Wrapper>
  );
}

const Wrapper = styled.a`
  display: flex;
  align-items: center;
  .logoIcon {
    width: 100%;
    height: 36px;
  }
`;
