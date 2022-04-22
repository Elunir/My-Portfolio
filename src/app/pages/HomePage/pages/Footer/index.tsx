import styled from 'styled-components/macro';

export function Footer() {
  return (
    <Foot id='test1'>
      <Text>© Idris Attar - 2022</Text>
    </Foot>
  );
}

const Foot = styled.footer`
  background-color: ${props => props.theme.background};
  height: 60px;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.span`
  color: ${props => props.theme.textSecondary};
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
`;
