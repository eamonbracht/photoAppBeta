import React from "react";
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";
import { getListOfFiles, getFile } from "./s3utils";
import ImageCard from "./ImageCard";

function getItems(nextGroupKey, count) {
  const nextItems = [];
  const nextKey = nextGroupKey * count;

  for (let i = 0; i < count; ++i) {
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
  if (bucketItems.length !== 0) {
    return (
      // <div style={{ height: "500px", width: "800px", overflowY: "auto" }}>
      <MasonryInfiniteGrid
        className="container"
        gap={5}
        onRequestAppend={(e) => {
          const nextGroupKey = (e.groupKey + 1 || 0) + 1;

          setItems([...items, ...getItems(nextGroupKey, 10)]);
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
      // </div>
    );
  }
}

/*
Fetch all objects in bucket and save to a state
Move getURL to the child class (ImageCard) so you are only passing a key to the child
*/
