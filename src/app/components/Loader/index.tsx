/**
 *
 * Loader
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export function Loader() {
  return (
    <LoadingWrapper>
      <LoadingIndicator />
    </LoadingWrapper>
  );
}

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
