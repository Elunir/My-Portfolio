import styled from 'styled-components/macro';

export function About() {
  return (
    <Div>
      <Title>About</Title>
    </Div>
  );
}

const Div = styled.div`
  margin-top: 40px;
`;

const Title = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.primary};
`;
