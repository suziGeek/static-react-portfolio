import React from "react";
import "./hovercard.css";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  MuiPaperElevation1: {
    boxShadow: "unset",
  },
}));

const HoverCard = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <section className='body-container'>
      <div className='project-title'>
        <h4>Latest Projects.</h4>
      </div>
      <div className='wrapper'>
        <div className='card'>
          <Card className={classes.root}>
            <CardHeader
              title='Full Stack Camping App'
              subheader='C# .Net Core Razor MySQL XML API Consumption.'
            />
            <Typography>
              <a className='button' href='http://www.glamper.io'>
                Demo
              </a>
              <a className='button' href='https://github.com/suziGeek/Glamp'>
                GitHub
              </a>
            </Typography>
            <br />
            <CardMedia
              className={classes.media}
              image='img/glamper.png'
              title='Javascript Drum Machine'
            />
            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>
                C# .Net Core Razor pages consuming XML API for content. Google
                Maps API integration. MySQL and SQL backend.
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className='card'>
          <Card className={classes.root}>
            <CardHeader
              title='TMDB Movie App'
              subheader='React, React Hooks, FlexBox.'
            />
            <Typography>
              <a
                className='button'
                href='https://optimistic-brown-cf1ac7.netlify.app/'
              >
                Demo
              </a>
              <a
                className='button'
                href='https://github.com/suziGeek/Movie-Firebase-Material-TMDB'
              >
                GitHub
              </a>
            </Typography>
            <br />
            <CardMedia
              className={classes.media}
              image='img/movies.jpg'
              title='TMDB Movie Ap'
            />

            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>
                Built with React using hooks and Material UI. Firebase for
                authentication and NoSql Database Backend.
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div className='card'>
          <Card className={classes.root}>
            <CardHeader
              title='Drum Machine'
              subheader='HTML5, Flex Box CSS3, and Javascript.'
            />
            <Typography>
              <a className='button' href='https://pheedme.netlify.app/'>
                Demo
              </a>
              <a
                className='button'
                href='https://github.com/suziGeek/drum-machine'
              >
                GitHub
              </a>
            </Typography>
            <br />
            <CardMedia
              className={classes.media}
              image='/img/drums.png'
              title='Javascript Drum Machine'
            />
            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>
                A fun simple javascript drum machine also using jQuery. Key
                stroke and Button clicks to trigger action.
                <br />
                <br />
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HoverCard;
