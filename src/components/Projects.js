import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const projectsList = [
  {
    id: "project1",
    image: "https://img.icons8.com/pastel-glyph/100/bitcoin-globe.png",
    label: "Pocket Crypto",
    description: "",
    content:
      "Created a cryptocurrency tracker that allows you to save coins to a watchlist or just browse around and track your favorite cryptocurrency",
    link: "",
  },
  {
    id: "project2",
    image: "https://img.icons8.com/ios/110/github--v1.png",
    label: "GitHub User Card",
    description: "",
    content:
      "Create a card holding my followers based on the data being fetched from the Github API. The Application updates automatically as new people follow my github account",
    link: "https://github.com/miguelaledesma/github-usercard",
  },
  {
    id: "project3",
    image: "https://img.icons8.com/color/120/instagram-new--v1.png",
    label: "Instagram Clone",
    description: "",
    content:
      "Created an instagram feed clone as a project at Bloom Institute of Technology",
    link: "",
  },
  {
    id: "project4",
    image: "https://img.icons8.com/ios/110/template.png",
    label: "Next.js Boiler Plate App",
    description: "Side Project",
    content:
      "A boilerplate application using Next.js, it is built as mobile first",
    link: "",
  },
];

const Projects = () => {
  const projects = projectsList.map((item) => (
    <React.Fragment>
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        ></Typography>
        <Typography variant="h5" component="div">
          {item.label}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {item.description}
        </Typography>
        <img src={item.image} />
        <Typography>{item.content}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={item.link} target="_blank">
          View on GitHub
        </Button>
      </CardActions>
    </React.Fragment>
  ));

  return <Card id="projects">{projects}</Card>;
};

export default Projects;
