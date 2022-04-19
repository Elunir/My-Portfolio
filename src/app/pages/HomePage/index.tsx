import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { Hero } from './pages/Hero';
import { About } from './pages/About';
import { Experience } from './pages/Experience';
import { Work } from './pages/Work';
import { Contact } from './pages/Contact';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <NavBar />
      <PageWrapper>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
      </PageWrapper>
    </>
  );
}
