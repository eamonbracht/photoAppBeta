import React from "react";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import TableChartIcon from "@mui/icons-material/TableChart";
import InfoIcon from "@mui/icons-material/Info";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";
import { Send } from "@mui/icons-material";
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
        <MenuItem
          component={<Link to="/photos/1" className="link" />}
          icon={<PhotoLibraryIcon />}
        >
          Photos
        </MenuItem>
        <MenuItem
          component={<Link to="/table" className="link" />}
          icon={<TableChartIcon />}
        >
          Table
        </MenuItem>
        <MenuItem
          component={<Link to="/about" className="link" />}
          icon={<InfoIcon />}
        >
          About
        </MenuItem>
        <MenuItem
          component={<Link to="/contact" className="link" />}
          icon={<SendIcon />}
        >
          Contact
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
