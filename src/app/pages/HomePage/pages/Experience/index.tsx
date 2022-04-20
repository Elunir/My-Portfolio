import styled from 'styled-components/macro';
import { experience } from 'app/data/data';

export function Experience() {
  return (
    <Div>
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
  margin-left: 40px;
`;

const Title = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.primary};
  display: inline-block;
  width: 400px;
  margin-bottom: 40px;
  font-weight: 600;
  ::after {
    content: ' ';
    display: block;
    height: 1px;
    background-color: #5ceaca;
    position: relative;
    margin-left: 80%;
    margin-top: -6%;
    width: 424px;
}
  }
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
