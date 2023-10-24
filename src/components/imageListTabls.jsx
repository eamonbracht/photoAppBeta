import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { getListOfFiles } from "./s3utils";

const columns = [
  { field: "Key", headerName: "Name", width: 300 },
  { field: "LastModified", headerName: "Last Modified", width: 150 },
  { field: "Size", headerName: "Size", width: 150 },
];

function getRowId(row) {
  return row.ETag;
}
export default function ImageListTable() {
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    getListOfFiles().then((res) => {
      setRows(res);
    });
  }, []);
  return (
    <Box sx={{ alignSelf: "center", m: 2, height: "95vh", width: "95%" }}>
      <DataGrid rows={rows} columns={columns} getRowId={getRowId} />
    </Box>
  );
}
