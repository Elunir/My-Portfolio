/* eslint-disable array-callback-return */
import styled from 'styled-components/macro';
import { Link } from 'app/components/Link';
import { Helmet } from 'react-helmet-async';
import { project } from 'app/data/data';
import { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';
import { PageWrapper, PageWrapperMobile } from 'app/components/PageWrapper';

interface Props {
  projectID: number;
}

export function ProjectDetails(props: Props) {
  const { projectID } = props;
  const [thisProject, setThisProject] = useState([] as any);
  const [thisProjectDetails, setThisProjectDetails] = useState([] as any);
  const [thisProjectQuestions, setThisProjectQuestions] = useState([] as any);

  const matches = useMediaQuery('(min-width:980px)');

  useEffect(() => {
    window.scrollTo(0, 0);
    project.map((project, i) => {
      if (project.id === projectID) {
        setThisProject(project);
        setThisProjectDetails(project.details);
        setThisProjectQuestions(project.details?.topics);
      }
    });
  });

  const ProjectDetailsWrapper = (
    <>
      <Helmet>
        <title>{thisProject.name}</title>
        <meta name="description" content={thisProject.name} />
      </Helmet>
      <Link to={process.env.PUBLIC_URL + '/'}>
        <div style={{ marginTop: -40 }}>Go Back</div>
      </Link>
      <Wrapper>
        <Image
          src={thisProjectDetails.image}
          style={{
            display: thisProjectDetails.visibility === true ? 'block' : 'none',
          }}
        />
        <Title
          style={{
            marginTop: thisProjectDetails.visibility === true ? '0px' : '48px',
          }}
        >
          {thisProject.name}
        </Title>
        {thisProjectQuestions.map((topic, i) => {
          return (
            <Questions
              key={i}
              className={topic.position !== 'none' ? topic.position : undefined}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {topic.topic ? <Question>{topic.topic}</Question> : undefined}
                {topic.description ? (
                  <Answer>{topic.description}</Answer>
                ) : undefined}
              </div>
              <Image
                className={topic.position === 'none' ? 'none' : undefined}
                src={topic.image}
                loading="lazy"
              />
            </Questions>
          );
        })}
      </Wrapper>
    </>
  );

  return (
    <>
      {matches ? (
        <PageWrapper>{ProjectDetailsWrapper}</PageWrapper>
      ) : (
        <PageWrapperMobile>{ProjectDetailsWrapper}</PageWrapperMobile>
      )}
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 320px;
  .top {
    display: flex;
    flex-direction: column-reverse;
  }
  .bottom {
    display: flex;
    flex-direction: column;
  }
  .right {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
  }
  .left {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
    direction: rtl;
    text-align: left;
  }
  .none {
    display none;
  }
`;

const Title = styled.div`
  font-weight: bold;
  color: ${p => p.theme.primary};
  font-size: 1.75rem;
`;

const Image = styled.img`
  width: 100%;
  margin: 20px 0;
  height: auto;
  border-radius: 8px;
`;
const Questions = styled.div`
  margin: 8px 0 20px 0;
`;
const Question = styled.span`
  font-weight: 500;
  color: ${p => p.theme.white};
  font-size: 1.5rem;
  margin-bottom: 10px;
`;
const Answer = styled.span`
  color: ${p => p.theme.text};
  font-size: 1.25rem;
`;
