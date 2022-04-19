import styled from 'styled-components/macro';

export function Work() {
  return (
    <Div>
      <div style={{ display: 'flex' }}>
        <div>
          <div>
            <Title>My Work</Title>
          </div>
          <Text>asdasdsdsadasd</Text>
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  margin-top: 40px;
`;
const Title = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.primary};
  display: inline-block;
  width: 400px;
  margin-bottom: 40px;
  font-weight: 600;
  ::after {
    content: ' ';
    display: block;
    height: 1px;
    background-color: #5ceaca;
    position: relative;
    display: block;
    margin-left: 45%;
    margin-top: -6%;
  }
`;

const Text = styled.span`
  font-size: 1rem;
  color: ${props => props.theme.text};
`;
