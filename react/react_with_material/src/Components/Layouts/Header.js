import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography } from "@material-ui/core";
import CreateDialog from "../Exercises/Dialogs/Create";

const Header = ({muscles, handleExerciseCreate} ) => {
  return (
    <Fragment>
      <AppBar color="primary" position="static">
        <Toolbar variant="dense">
          <Typography color="inherit" align="inherit" style={{ flex: 1 }}>
            Exercise Database
          </Typography>
          <CreateDialog muscles={muscles} handleExerciseCreate={handleExerciseCreate}/>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
