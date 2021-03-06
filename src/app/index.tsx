/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { ProjectDetails } from './pages/HomePage/pages/ProjectDetails';
import { useEffect } from 'react';
import { usePortfolioDataSlice } from './api/slice';
import { useDispatch } from 'react-redux';

export function App() {
  const { i18n } = useTranslation();
  const { actions } = usePortfolioDataSlice();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadData());
    //eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Idris Attar"
        defaultTitle="Idris Attar - Portfolio"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="Idris Attar's Portfolio" />
      </Helmet>

      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
        <Route
          exact
          path={process.env.PUBLIC_URL + '/work/:projectID'}
          render={({ match }) => {
            return (
              <ProjectDetails
                projectID={parseInt(match.params.projectID || '')}
              />
            );
          }}
        />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
