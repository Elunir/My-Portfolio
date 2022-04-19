import styled from 'styled-components/macro';
import { ReactComponent as CodingIcon } from '../../assets/coding.svg';
import useMediaQuery from '@mui/material/useMediaQuery';
import { hero } from 'app/data/data';

export function Hero() {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <Div>
      <Intro>Hi, My name is</Intro>
      <Name>{hero.name}</Name>
      <div className="designation">
        <Designation style={{ marginRight: 16, fontWeight: 500 }}>
          I'm a
        </Designation>
        <Designation>Frontend Developer</Designation>
      </div>
      <Description>Turning UI Designs into working websites.</Description>
      <Description>{`Width > 600: ${matches}`}</Description>

      <CodingIcon className="codingIcon" />
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 93vh;
  .codingIcon {
    width: 100%;
    height: 565px;
    margin-top: 4px;
  }
`;
const Intro = styled.span`
  color: ${props => props.theme.primary};
  font-size: 1rem;
`;
const Name = styled.span`
  color: ${props => props.theme.text};
  font-size: 4rem;
  font-weight: bold;
`;
const Designation = styled.span`
  color: ${props => props.theme.text};
  font-size: 3rem;
  font-weight: bold;
`;
const Description = styled.span`
  color: ${props => props.theme.textSecondary};
  font-size: 1.2rem;
  font-weight: regular;
  margin-top: 10px;
`;
