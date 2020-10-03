import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "../SidebarOption/SidebarOption";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon />
      <SidebarOption />
    </div>
  );
}

export default Sidebar;
