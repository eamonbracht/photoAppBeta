import React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import { getListOfFiles, getFile } from "./s3utils";
import ImageCard from "./ImageCard";
import { useNavigate, useParams } from "react-router-dom";
export default function PaginationPhotos() {
  const { pageNum } = useParams();
  const [page, setPage] = React.useState(parseInt(pageNum));
  const navigate = useNavigate();
  const imgsPerPage = 10;
  const [bucketItems, setBucketItems] = React.useState([]);
  const handleChange = (event, value) => {
    setPage(value);
    navigate(`/photos/${value}`);
  };
  React.useEffect(() => {
    getListOfFiles().then((res) => {
      setBucketItems(res);
    });
  }, []);
  React.useState(() => console.log(page, typeof page), [page]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        my: 2,
      }}
    >
      <Stack
        spacing={2}
        sx={{
          height: "90vh",
          overflowY: "auto",
          width: "100%",
          alignItems: "center",
        }}
      >
        {bucketItems
          .slice(page * imgsPerPage, (page + 1) * imgsPerPage)
          .map((item, idx) => (
            <ImageCard bucketObject={item} key={page * imgsPerPage + idx} />
          ))}
      </Stack>
      <Pagination
        variant="outlined"
        color="primary"
        count={Math.floor(bucketItems.length / imgsPerPage)}
        page={page}
        onChange={handleChange}
      />
    </Box>
  );
}
