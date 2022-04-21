import styled from 'styled-components/macro';
import { about } from 'app/data/data';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';

export function About() {
  const matches = useMediaQuery('(min-width:700px)');

  return (
    <Div>
      <div>
        <Title>About me</Title>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: matches ? '' : 'center',
          flexDirection: matches ? 'row' : 'column',
        }}
      >
        <div>
          <div className="textSection">
            <Text>{about.description}</Text>
          </div>
        </div>
        <Image src={about.image} />
      </div>
    </Div>
  );
}

const Div = styled.div`
  margin-top: 40px;
  .textSection {
    background-color: #0e213d;
    padding: 16px;
    border-radius: 8px;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.primary};
  display: inline-block;
  margin-bottom: 40px;
  font-weight: 600;
`;

const Text = styled.span`
  font-size: 1rem;
  color: ${props => props.theme.text};
`;

const Image = styled.img`
  margin: 20px;
  height: 300px;
`;
