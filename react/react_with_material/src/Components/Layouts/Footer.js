import React from "react";
import { Tabs, Paper } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";

const Footer = ({ selectedMuscleHandler, muscleCategory, muscles }) => {
  const index = muscleCategory
    ? muscles.findIndex(muscleItem => {
        return muscleItem === muscleCategory;
      }) + 1
    : 0;

  return (
    <Paper elevation={3}>
      <Tabs
        value={index}
        onChange={(e, index) => {
          selectedMuscleHandler(index === 0 ? "" : muscles[index - 1]);
        }}
        indicatorColor="primary"
        centered
      >
        <Tab label="All" />
        {muscles.map(muscleItem => (
          <Tab label={muscleItem} key={muscleItem} />
        ))}
      </Tabs>
    </Paper>
  );
};

export default Footer;
