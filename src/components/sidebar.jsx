import React from "react";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export default function PhotoSidebar(props) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            // onClick={() => {
            //   collapseSidebar();
            // }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>KTL Photo</h2>
          </MenuItem>

          <MenuItem> Photos </MenuItem>
          <MenuItem> Albums </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
