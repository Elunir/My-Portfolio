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

// const Title = styled.div`
//   font-size: 1.25rem;
//   color: ${p => p.theme.primary};
//   font-weight: bold;
//   margin-right: 1rem;
// `;
