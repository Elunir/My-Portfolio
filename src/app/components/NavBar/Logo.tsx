import * as React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as LogoIcon } from './assets/logo.svg';

export function Logo() {
  return (
    <Wrapper>
      <LogoIcon className="logoIcon" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  .logoIcon {
    width: 100%;
    height: 36px;
  }
`;
