import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import React from "react";
import "./overlay.css";
import { getFile } from "./s3utils";

export default function ImageCard(props) {
  const { bucketObject, num } = props;
  const [url, setURL] = React.useState("");
  React.useEffect(() => {
    getFile(bucketObject.Key).then((img) => {
      setURL(img);
    });
  }, []);
  return (
    <ImageListItem>
      <img src={url} loading="lazy" />
      <ImageListItemBar
        title={bucketObject.Key}
        actionIcon={
          <IconButton
            sx={{ color: "rgba(255, 255, 255, 0.54)", fontFamily: "cour" }}
            aria-label={`info about ${bucketObject.Key}`}
          >
            <InfoIcon />
          </IconButton>
        }
      />
    </ImageListItem>
  );
}
