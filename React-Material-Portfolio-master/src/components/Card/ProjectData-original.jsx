import React, { Component } from "react";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
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

      console.log(numId % 2 === 0);

      const useStyles =
        numId % 2 === 0
          ? "row_odd lt-blue flex-rthalf"
          : "row_even flex-lfthalf cor";

      console.log(useStyles);

      return (
        <div key={id} className={useStyles}>
          <CardMedia
            //component="img"
            alt={title}
            // height="10em"
            //image="/static/images/cards/contemplative-reptile.jpg"
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Tech Used: {tech}.{desc}
            </Typography>
          </CardContent>

          <Button size="small" color="primary">
            <Link color="inherit" href={link}>
              {title}
            </Link>
          </Button>
        </div>

        //   <tr key={id}>
        //     <td>{title}</td>
        //     <td>{tech}</td>
        //     <td>{desc}</td>
        //     <td>{link}</td>
        //   </tr>
      );
    });
  }

  render() {
    return <div>{this.renderTableData()}</div>;
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
