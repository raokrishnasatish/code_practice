import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const styles = {
  paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 400,
    overflow: "auto"
  },
  exerItem: {
    display: "inline"
  }
};

export default ({
  muscleCategory,
  exercisesArray,
  onSelect,
  handleDeleteExercise,
  selectedExercise: {
    id,
    title = "Welcome",
    description = "Please select an exercise from the left to see more details..."
  }
}) => (
  <Grid container>
    <Grid item xs={3}>
      <Paper style={styles.paper}>
        {exercisesArray.map(([muscles, exercises]) =>
          !muscleCategory || muscleCategory === muscles ? (
            <Fragment key={muscles}>
              <Typography variant="h6" style={{ textTransform: "capitalize" }}>
                {muscles}
              </Typography>
              <List component="ul" aria-label="exercise List">
                {exercises.map(({ id, title }) => (
                    <Fragment key={id + "frag"}>
                      <ListItem
                          key={id}
                          button
                          onClick={() => {
                            onSelect(id);
                          }}
                      >
                        <ListItemText primary={title}/>
                        <ListItemSecondaryAction>
                        < IconButton aria-label="edit" key={id + "_edit"}>
                          <EditIcon fontSize="small"/>
                        </IconButton>
                          < IconButton aria-label="delete" key={id + "_delete"} onClick={handleDeleteExercise.bind(this, id)}>
                            <DeleteIcon fontSize="small"/>
                          </IconButton>
                          </ListItemSecondaryAction>
                      </ListItem>
                    </Fragment>
                ))}
              </List>
            </Fragment>
          ) : null
        )}
      </Paper>
    </Grid>

    <Grid item xs>
      <Paper style={styles.paper}>
        <Fragment>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body1">{description}</Typography>
        </Fragment>
      </Paper>
    </Grid>
  </Grid>
);
