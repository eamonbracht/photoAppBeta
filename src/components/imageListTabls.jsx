import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
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
    <div style={{ height: 300, alignSelf: "center" }}>
      <DataGrid rows={rows} columns={columns} getRowId={getRowId} />
    </div>
  );
}
