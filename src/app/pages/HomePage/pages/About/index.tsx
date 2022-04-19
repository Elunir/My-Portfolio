import styled from 'styled-components/macro';
import { about } from 'app/data/data';

export function About() {
  return (
    <Div>
      <div style={{ display: 'flex' }}>
        <div>
          <div>
            <Title>About me</Title>
          </div>
          <Text>{about.description}</Text>
        </div>
        <Image src={about.image} />
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

const Image = styled.img`
  margin: 20px;
  height: 300px;
`;
