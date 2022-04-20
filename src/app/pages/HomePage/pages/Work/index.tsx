import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from 'styled-components/macro';

export function Work() {
  return (
    <Box style={{ marginTop: 20 }} sx={{ flexGrow: 1 }}>
      <div>
        <Title>Things I've built</Title>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card className="Card">
            <h1>Card</h1>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className="Card">
            <h1>Card</h1>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className="Card">
            <h1>Card</h1>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className="Card">
            <h1>Card</h1>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className="Card">
            <h1>Card</h1>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className="Card">
            <h1>Card</h1>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className="Card">
            <h1>Card</h1>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className="Card">
            <h1>Card</h1>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className="Card">
            <h1>Card</h1>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

const Card = styled.div`
  background-color: ${p => p.theme.primary};
  opacity: 0.5;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 8px;
  :hover {
    opacity: 1;
  }
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
    display: block;
    margin-left: 68%;
    margin-top: -6%;
    width: 400px;
  }
`;
