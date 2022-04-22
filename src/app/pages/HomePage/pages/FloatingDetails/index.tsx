import styled from 'styled-components/macro';
import { hero } from 'app/data/data';

export function FloatingDetails() {
  return (
    <Div>
      <div className="details">
        <div className="detail-right">
          <span className="email">
            <a href={`mailto:${hero.email}`}>{hero.email}</a>
          </span>
        </div>
        <div className="detail-left">
          <span className="resume">
            <a href={hero.resumeLink || ''}>DOWNLOAD RESUME</a>
          </span>
        </div>
      </div>
    </Div>
  );
}
const height = '170px';
const Div = styled.div`
  position: fixed;
  bottom: ${height};
  .details {
  }
  .detail-right {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    transform: rotate(90deg);
    right: -6.5rem;
    position: fixed;

    ::before {
      content: ' ';
      width: ${height};
      height: 1px;
      background-color: ${props => props.theme.textSecondary};
    }
  }
  .detail-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    transform: rotate(-90deg);
    left: -6.5rem;
    position: fixed;

    ::before {
      content: ' ';
      width: ${height};
      height: 1px;
      background-color: ${props => props.theme.textSecondary};
    }
  }
  .resume a {
    color: ${props => props.theme.textSecondary};
    font-size: 1.2rem;
    text-decoration: none;
    margin: 1rem;
    :hover {
      color: ${props => props.theme.primary};
    }
  }

  .email a {
    color: ${props => props.theme.textSecondary};
    font-size: 1.2rem;
    text-decoration: none;
    margin: 1rem;
    :hover {
      color: ${props => props.theme.primary};
    }
  }
  @media only screen and (max-width: 1300px) {
    .details {
      display: none;
    }
  }
`;
