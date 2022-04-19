import styled, { keyframes } from 'styled-components/macro';
import { ReactComponent as CodingIcon } from '../../assets/coding.svg';
import useMediaQuery from '@mui/material/useMediaQuery';
import { hero } from 'app/data/data';
import { FloatingDetails } from '../FloatingDetails';
import { zoomInDown, slideInUp, rubberBand } from 'react-animations';

const zoomDown = keyframes`${zoomInDown}`;
const slideUp = keyframes`${slideInUp}`;
const rubberband = keyframes`${rubberBand}`;

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
      <FloatingDetails />
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 93vh;
  overflow: hidden;
  .designation {
    animation: 2s ${zoomDown};
  }
  .codingIcon {
    width: 100%;
    height: 565px;
    margin-top: 4px;
    animation: 2s ${slideUp};
  }
`;
const Intro = styled.span`
  color: ${props => props.theme.primary};
  font-size: 1rem;
  animation: 1s ${rubberband};
`;
const Name = styled.span`
  color: ${props => props.theme.text};
  font-size: 4rem;
  font-weight: bold;
  animation: 1s ${zoomDown};
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
  animation: 3s ${zoomDown};
`;
