import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  card: {
    maxWidth: 250,
    margin: 5,
  },
  media: {
    height: 250,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/alliyah.jpg"
          title="Alliyah Mohammed"
          component="a" href="https://github.com/Alliyah-M"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Alliyah Mohammed
          </Typography>
          <Typography variant="body1" color="textPrimary" component="h1">
            Content & Research
          </Typography>
          <br></br>
          <Divider/>
          <br></br>
          <Typography variant="body2" color="textSecondary" component="span" align="left">
              <li>Researched information on frameworks</li>
              <li>Added documentation and content on several pages</li>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component="a" href="https://github.com/Alliyah-M/" target="_blank">
          GitHub
        </Button>
        <Button size="small" color="primary" component="a" href="https://www.linkedin.com/in/alliyah-mohammed/" target="_blank">
          LinkedIn
        </Button>
        <Button size="small" color="primary" component="a" href="https://alliyah-m.github.io/" target="_blank">
          Website
        </Button>
      </CardActions>
    </Card>
    
  );
}
