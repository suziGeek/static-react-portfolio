import React, { Component } from "react";
//import CardContent from "@material-ui/core/CardContent";
//import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import "./projectdata.css";

class Projects extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      projects: [
        {
          id: "1001",
          title: "Movie Ranker",
          tech: "React, Bootstrap",
          desc: "A simple movie database app",
          itemImage: "./assets/images/movie.jpg",
          link: "https://relaxed-wozniak-18557b.netlify.com/movies"
        },
        {
          id: "1002",
          title: "Drum Machine",
          tech: "Javascript, Custom CSS",
          desc: "A simple Drum Machine app",
          itemImage: "./assets/images/drummachine.jpg",
          link: "https://pheedme.netlify.com/"
        }
      ]
    };
  }

  renderTableData() {
    return this.state.projects.map((project, index) => {
      const { id, title, tech, desc, link } = project; //destructuring

      const numId = parseInt(project.id);

      const useStyles = numId % 2 === 0 ? "row_odd lt-blue " : "row_even cor";

      
      return (
        <td key={id} className={useStyles}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Tech Used: {tech}.{desc}
          </Typography>

          <Button size="small" color="primary">
            <Link color="inherit" href={link}>
              {title}
            </Link>
          </Button>
        </td>
      );
    });
  }

  renderRevTableData() {
    return this.state.projects.map((project, index) => {
      const { id, title, tech, desc, link } = project; //destructuring

      const numId = parseInt(project.id);

      
      const useRevStyles =
        numId % 2 === 0 ? "row_even  cor" : "row_odd lt-blue ";

      return (
        <td key={id} className={useRevStyles}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Tech Used: {tech}.{desc}
          </Typography>

          <Button size="small" color="primary">
            <Link color="inherit" href={link}>
              {title}
            </Link>
          </Button>
        </td>
      );
    });
  }

  render() {
    return (
      <div className="container-row ">
        <table >
          <tbody>
            <tr>{this.renderTableData()}</tr>
            
          </tbody>
        </table>
      </div>
    );
  }
}

export default Projects; //exporting a component make it reusable and this is the beauty of react

// <CardMedia
//           component="img"
//           alt="Contemplative Reptile"
//           height="10em"
//           image="/static/images/cards/contemplative-reptile.jpg"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
