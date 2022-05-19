import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper, PageWrapperMobile } from 'app/components/PageWrapper';
import { Hero } from './pages/Hero';
import { About } from './pages/About';
import { Experience } from './pages/Experience';
import { Work } from './pages/Work';
import { Footer } from './pages/Footer';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components/macro';
import { useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { allData } from 'app/api/slice/selectors';
import { Loader } from 'app/components/Loader';
// import Scroll from 'react-scroll';
// var Element = Scroll.Element;

// var Link = Scroll.Link;
// var DirectLink = Scroll.DirectLink;
// var Events = Scroll.Events;
// var scroll = Scroll.animateScroll;
// var scrollSpy = Scroll.scrollSpy;

export function HomePage() {
  const matches = useMediaQuery('(min-width:980px)');
  const portfolio = useSelector(allData);

  if (portfolio.isLoading) {
    return <Loader />;
  }

  return (
    <Div>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <NavBar />
      {matches ? (
        <PageWrapper>
          <Hero />
          <Fade left>
            <About />
          </Fade>
          <Fade right>
            <Experience />
          </Fade>
          <Fade left>
            <Work />
          </Fade>
        </PageWrapper>
      ) : (
        <PageWrapperMobile>
          <Hero />
          <Fade left>
            <About />
          </Fade>
          <Fade right>
            <Experience />
          </Fade>
          <Fade left>
            <Work />
          </Fade>
        </PageWrapperMobile>
      )}
      <Footer />
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
