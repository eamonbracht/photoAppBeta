import React from "react";
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";
import { getListOfFiles, getFile } from "./s3utils";
import ImageCard from "./ImageCard";
import { Box } from "@mui/material";
function getItems(nextGroupKey, count, maxVal) {
  const nextItems = [];
  const nextKey = nextGroupKey * count;

  for (let i = 0; i < count; ++i) {
    if (nextKey + i > maxVal - 1) {
      break;
    }
    nextItems.push({ groupKey: nextGroupKey, key: nextKey + i });
  }
  return nextItems;
}

export default function PhotoMosaic() {
  const [items, setItems] = React.useState(getItems(0, 10));
  const [bucketItems, setBucketItems] = React.useState([]);
  React.useEffect(() => {
    getListOfFiles().then((res) => {
      setBucketItems(res);
    });
  }, []);
  const getNextItems = async (nextGroupKey, nextBatch) => {
    const nextItems = getItems(nextGroupKey, nextBatch, bucketItems.length);
    Promise.all(array.map(callback));
    const withURLS = await Promise.all(getURLs());

    console.log(withURLS);
    setItems([...items, ...withURLS]);
  };
  const getURLs = (item) => {
    getFile(bucketObject.Key).then((res) => {
      return { ...item, URL: res };
    });
  };
  React.useEffect(() => console.log(items), [items]);
  if (bucketItems.length !== 0) {
    return (
      <Box sx={{ width: "100%", height: "100%", overflowY: "auto" }}>
        <MasonryInfiniteGrid
          loading={<div className="loading">Loading...</div>}
          className="container"
          gap={5}
          columnSize={300}
          onRequestAppend={async (e) => {
            if (items.length >= bucketItems.length) return;
            const nextGroupKey = (e.groupKey || 0) + 1;
            await getNextItems(nextGroupKey, 10);
          }}
        >
          {items.map((item) => (
            <ImageCard
              data-grid-groupkey={item.groupKey}
              key={item.key}
              num={item.key}
              bucketObject={bucketItems[item.key]}
            />
          ))}
        </MasonryInfiniteGrid>
      </Box>
    );
  }
}

/*
Fetch all objects in bucket and save to a state
Move getURL to the child class (ImageCard) so you are only passing a key to the child
*/
