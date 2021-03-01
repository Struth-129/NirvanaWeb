import React from 'react'; 
import Header from '../components/Header';
// import {Score} from './Test';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

const Result = (props) => {
    return(
        <>
        <h1>{props.score}</h1>
        <div id = 'wrapper'>
            <Header/>
            <Card className={makeStyles.root}>
                <CardActionArea>
                    <CardMedia className={makeStyles.media} image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"/>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">Result</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {/* <Score.Consumer>{(score)=>{
                    return <h1>{score}</h1>
            }}</Score.Consumer> */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
            </div>
        </>
    )
}



export default Result;