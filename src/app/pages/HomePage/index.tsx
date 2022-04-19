import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { Hero } from './pages/Hero';
import { About } from './pages/About';
import { Experience } from './pages/Experience';
import { Work } from './pages/Work';
import { Footer } from './pages/Footer';
import Fade from 'react-reveal/Fade';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <NavBar />
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
      <Footer />
    </>
  );
}
