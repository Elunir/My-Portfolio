import styled, { keyframes } from 'styled-components/macro';
import { ReactComponent as CodingIcon } from '../../assets/coding.svg';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FloatingDetails } from '../FloatingDetails';
import { zoomInDown, slideInUp, rubberBand, fadeIn } from 'react-animations';
import { motion } from 'framer-motion';
import { themes } from 'styles/theme/themes';
import TextTransition, { presets } from 'react-text-transition';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { allData } from 'app/api/slice/selectors';

const zoomDown = keyframes`${zoomInDown}`;
const slideUp = keyframes`${slideInUp}`;
const rubberband = keyframes`${rubberBand}`;
const fade = keyframes`${fadeIn}`;

export function Hero() {
  const matches = useMediaQuery('(min-width:980px)');
  const [index, setIndex] = useState(0);
  const portfolio = useSelector(allData);
  const hero = portfolio.data.hero;

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex(index => index + 1),
      3500, // every 4 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Div id="home" style={{ alignItems: matches ? 'center' : 'flex-start' }}>
      <Intro
        whileHover={{ scale: 1.1, color: themes.dark.primary }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        Hi, My name is
      </Intro>
      <Name
        whileHover={{
          scale: 1.1,
          color: themes.dark.primary,
          textShadow: `0px 0px 6px ${themes.dark.primary}`,
        }}
        transition={{ type: 'spring', stiffness: 300 }}
        style={{
          fontSize: matches ? undefined : 48,
          color: matches ? undefined : themes.dark.primary,
        }}
      >
        {hero.name}
      </Name>
      <div style={{ display: matches ? 'flex' : 'contents' }}>
        <Designation
          style={{
            marginRight: 16,
            fontWeight: 500,
            fontSize: matches ? undefined : 28,
          }}
        >
          I'm a
        </Designation>
        <Designation>
          <TextTransition
            text={hero.role[index % hero.role.length].name}
            springConfig={presets.gentle}
          />
        </Designation>
      </div>
      <Description
        style={{
          height: matches ? '62px' : '180px',
          textAlign: matches ? 'center' : 'left',
        }}
      >
        <TextTransition
          text={hero.role[index % hero.role.length].description}
          springConfig={presets.slow}
        />
      </Description>
      <CodingIcon className="codingIcon" height={matches ? '580px' : '100%'} />
      <FloatingDetails />
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  width: 100%;
  .designation {
    animation: 3s ${fade};
  }
  .codingIcon {
    width: 100%;
    margin-top: 4px;
    animation: 2s ${slideUp};
  }
`;
const Intro = styled(motion.span)`
  color: ${props => props.theme.primary};
  font-size: 1rem;
  animation: 1s ${rubberband};
  margin-top: 10px;
`;
const Name = styled(motion.span)`
  color: ${props => props.theme.text};
  font-size: 4rem;
  font-weight: bold;
  animation: 0.5s ${zoomDown};
`;
const Designation = styled.span`
  color: ${props => props.theme.text};
  font-size: 3rem;
  font-weight: bold;
`;
const Description = styled(motion.span)`
  color: ${props => props.theme.textSecondary};
  font-size: 1.2rem;
  font-weight: regular;
  margin-top: 10px;
  animation: 3s ${fade};
`;
