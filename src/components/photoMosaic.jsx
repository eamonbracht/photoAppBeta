import React from "react";
import { Buffer } from "buffer";
import { JustifiedInfiniteGrid } from "@egjs/react-infinitegrid";
import { getListOfFiles, getFile } from "./s3utils";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function encode(data) {
  let buf = Buffer.from(data);
  let base64 = buf.toString("base64");
  return base64;
}
export default function PhotoMosaic() {
  const [exampleImg, setExampleImg] = React.useState("");

  React.useEffect(() => {
    getListOfFiles().then((res) => {
      getFile(res[0].Key).then((img) => {
        console.log("url", img);
        console.log(typeof img);
        setExampleImg(img);
      });
    });
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={exampleImg} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
