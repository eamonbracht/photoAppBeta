import React from "react";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from "react-router-dom";
export default function PhotoSidebar(props) {
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <Sidebar collapsed={collapsed}>
      <Menu>
        <MenuItem
          icon={<MenuOutlinedIcon />}
          onClick={() => setCollapsed(!collapsed)}
          style={{ textAlign: "center" }}
        >
          {" "}
          <h2>KTL Photo</h2>
        </MenuItem>

        <MenuItem component={<Link to="/photos/1" className="link" />}>
          Photos
        </MenuItem>
        <MenuItem component={<Link to="/table" className="link" />}>
          Table
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
