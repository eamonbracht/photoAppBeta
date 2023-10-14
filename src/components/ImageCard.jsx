import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { getFile } from "./s3utils";
import React from "react";
export default function ImageCard(props) {
  const { bucketObject, num } = props;
  const [url, setURL] = React.useState("");
  // React.useEffect(() => {
  //   getFile(bucketObject.Key).then((img) => {
  //     setURL(img);
  //   });
  // }, []);
  console.log(props);
  return (
    <div className="item" style={{ width: "250px" }}>
      <div className="thumbnail">
        <img
          src={`https://naver.github.io/egjs-infinitegrid/assets/image/${
            (num % 33) + 1
          }.jpg`}
          alt="egjs"
        />
      </div>
      <div className="info">{`egjs ${num}`}</div>
    </div>
    // <Card sx={{ maxWidth: 500 }}>
    //   <CardMedia sx={{ height: 240 }} image={url} title="green iguana" />
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       Lizard
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //       Lizards are a widespread group of squamate reptiles, with over 6,000
    //       species, ranging across all continents except Antarctica
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Share</Button>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>
    // </Card>
  );
}
