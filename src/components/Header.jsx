import React from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { spacing } from "@mui/system";

function Header() {
  return (
    <header>
      <h1>
        {" "}
        <AutoStoriesIcon sx={{ mr: 3 }} />
        KeepNoter
      </h1>
    </header>
  );
}

export default Header;
