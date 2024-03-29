import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import "./styles/expandCard.css";
import { blue } from "@mui/material/colors";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function checkLink(props) {
  if (props.plink) {
    return (
      <a href={props.plink} target="_blank" rel="noopener noreferrer">
        Link to Project
      </a>
    );
  }
  return null;
}

function checkArrow(props) {
  if (props.hideArrow) {
    return (
      <CardContent sx={{ paddingBottom: 5, paddingTop: 5 }}>
        <span className="project-tag">{props.text}</span>
      </CardContent>
    );
  }
  return null;
}

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (props.hideArrow) {
    return (
      <Card
        sx={{
          boxShadow: 15,
          borderRadius: 6,
        }}
      >
        <CardContent sx={{ marginBottom: 2, paddingTop: 5 }}>
          <span className="project-tag">
            <b>{props.text}</b>
          </span>
        </CardContent>
      </Card>
    );
  }
  return (
    <Card sx={{ boxShadow: 15, borderRadius: 6 }}>
      <CardContent sx={{ paddingBottom: 0, paddingTop: 5 }}>
        <span className="project-tag">{props.text}</span>
      </CardContent>
      <CardActions sx={{ padding: 0, marginTop: 0 }}>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          &nbsp;&nbsp;ᐯ&nbsp;&nbsp;
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.description}</Typography>
          {checkLink(props)}
        </CardContent>
      </Collapse>
    </Card>
  );
}
