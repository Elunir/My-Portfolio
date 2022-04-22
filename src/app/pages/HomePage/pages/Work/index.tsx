import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

export function Work() {
  return (
    <Box id="work" style={{ marginTop: 20 }} sx={{ flexGrow: 1 }}>
      <div>
        <Title>Things I've built</Title>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card
            className="Card"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            <h1>Card</h1>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

const Card = styled(motion.div)`
  background-color: ${p => p.theme.primary};
  opacity: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 8px;
`;

const Title = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.primary};
  display: inline-block;
  margin-bottom: 40px;
  font-weight: 600;
`;
