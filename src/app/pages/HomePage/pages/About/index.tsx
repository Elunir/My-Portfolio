import styled from 'styled-components/macro';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';
import { allData } from 'app/api/slice/selectors';
import { useSelector } from 'react-redux';

export function About() {
  const matches = useMediaQuery('(min-width:700px)');
  const portfolio = useSelector(allData);
  const about = portfolio.data.about;

  return (
    <Div id="about">
      <div>
        <Title>About me</Title>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: matches ? 'flex-start' : 'center',
          flexDirection: matches ? 'row' : 'column',
        }}
      >
        <div>
          <div className="textSection">
            <Text>{about.description}</Text>
          </div>
        </div>
        {about.useImage ? <Image src={about.image} /> : undefined}
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
  font-size: 1.3rem;
  color: ${props => props.theme.text};
`;

const Image = styled.img`
  width: 100%;
  margin: 20px;
  height: auto;
  border-radius: 8px;
`;
