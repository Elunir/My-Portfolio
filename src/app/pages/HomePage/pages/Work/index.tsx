import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from 'styled-components/macro';
import { themes } from 'styles/theme/themes';
import { motion } from 'framer-motion';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';
import { Link } from 'react-router-dom';
import { allData } from 'app/api/slice/selectors';
import { useSelector } from 'react-redux';

export function Work() {
  const matches = useMediaQuery('(min-width:980px)');
  const portfolio = useSelector(allData);
  const project = portfolio.data.projects;

  return (
    <Box id="work" style={{ marginTop: 20 }} sx={{ flexGrow: 1 }}>
      <div>
        <Title>Things I've built</Title>
      </div>
      <Grid
        display={'grid'}
        gap={'28px'}
        gridTemplateColumns={matches ? '1fr 1fr' : '1fr'}
      >
        {project.map((project, index) => (
          <Div
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: 'tween',
              duration: 0.3,
            }}
            key={index}
          >
            <Link to={`/work/${project.id}`} className="projectLink">
              <Grid
                item
                style={{
                  backgroundColor: themes.dark.backgroundVariant,
                  padding: 24,
                  borderRadius: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Image src={project.image} />
                <Text style={{ marginTop: 16, fontSize: 20 }}>
                  {project.name}
                </Text>
              </Grid>
            </Link>
          </Div>
        ))}
      </Grid>
    </Box>
  );
}

const Div = styled(motion.div)`
  .projectLink {
    :link {
      text-decoration: none;
      color: ${p => p.theme.text};
    }
  }
`;

const Title = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.primary};
  display: inline-block;
  margin-bottom: 40px;
  font-weight: 600;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const Text = styled.span`
  font-size: 1rem;
  color: ${props => props.theme.text};
`;
