import styled from 'styled-components/macro';
import { experience } from 'app/data/data';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';

export function Experience() {
  const matches = useMediaQuery('(min-width:980px)');

  return (
    <Div id="experience" style={{ marginLeft: matches ? 40 : 0 }}>
      <div>
        <div>
          <Title>Where I've Worked</Title>
        </div>
        <WorkedAt>
          {experience.map((item, index) => {
            return (
              <Job key={index}>
                <JobTitle>
                  <Designation>{item.designation}</Designation>
                  {item.company}
                </JobTitle>
                <Year>{item.duration}</Year>
                <List>
                  {item.list.map((listItem, index) => {
                    return <ListItem key={index}>{listItem.text}</ListItem>;
                  })}
                </List>
              </Job>
            );
          })}
        </WorkedAt>
      </div>
    </Div>
  );
}

const Div = styled.div`
  margin-top: 40px;
`;

const Title = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.primary};
  display: inline-block;
  margin-bottom: 40px;
  font-weight: 600;
`;

const WorkedAt = styled.div``;

const Job = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  background-color: #0e213d;
  padding: 16px;
  border-radius: 8px;
`;

const JobTitle = styled.span`
  font-size: 1.2rem;
  color: ${props => props.theme.primary};
`;

const Designation = styled.span`
  font-size: 1.2rem;
  color: ${props => props.theme.text};
  ::after {
    content: '@ ';
    color: ${props => props.theme.primary};
    margin-left: 0.8rem;
  }
`;

const Year = styled.span`
  font-size: 0.8rem;
  color: ${props => props.theme.textSecondary};
`;

const List = styled.ul`
  padding-left: unset;
  list-style: none;
`;
const ListItem = styled.li`
  font-size: 1rem;
  color: ${props => props.theme.text};
  ::before {
    content: '>';
    color: ${props => props.theme.primary};
    margin: 0 10px;
  }
`;
