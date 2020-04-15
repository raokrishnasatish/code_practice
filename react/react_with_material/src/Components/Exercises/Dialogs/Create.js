import React, { Fragment, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Paper,
  DialogActions,
  Button
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { grey } from "@material-ui/core/colors";
import Autocomplete from '@material-ui/lab/Autocomplete';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles ({
    inputEle: {
        width: 300,
        display: "block",
        margin: 10,
        textTransform: "capitalize"
    }
});

const Create = ({muscles, handleExerciseCreate}) => {
    const classes = useStyles();

  const [currState, setState] = useState({
      openDialog: false
  });

    const [curExerciseState, setExerciseState] = useState({
        newExercise: {
            id: "",
            title: "",
            description: "",
            muscles: "",
        }
    });

    const handleChangeFormElement = (name) =>  (event) => {
        setExerciseState({
            newExercise: {
                ...curExerciseState.newExercise,
                [name]: event.target.value
            }
        })
    };

  const handleCreateDialog = () => {
    setState({
      openDialog: !currState.openDialog
        });
  };

  const handleExerciseSubmit = (handleExercise) => {
      const {title} = {...handleExercise};
      handleExercise.id = title.toLowerCase().replace(/ /g, "-")
      handleExerciseCreate(handleExercise);
      handleCreateDialog();
      setExerciseState({
          newExercise: {
              id: "",
              title: "",
              description: "",
              muscles: ""
          }
      })

  };


  const { newExercise: {title, description, newMuscles}} = curExerciseState;
  return (
    <Fragment>
      <IconButton aria-label="delete"  onClick={handleCreateDialog}>
        <AddCircleIcon
          style={{ color: grey[200] }}
          fontSize="large"
        />
      </IconButton>
      <Paper>
        <Dialog open={currState.openDialog} onClose={handleCreateDialog}>
          <DialogTitle>Create Exercise</DialogTitle>
          <DialogContent>
            <form>

                <TextField required
                           id="exName"
                           variant="filled"
                           label="Exercise"
                           name="title"
                           className={classes.inputEle}
                           fullWidth={true}
                           value={title}
                           onChange={handleChangeFormElement("title")}
                />

                <TextField required multiline
                           id="exDesc"
                           rowsMax={3}
                           rows={2}
                           variant="filled"
                           name="description"
                           label="Description"
                           className={classes.inputEle}
                           fullWidth={true}
                           value={description}
                           onChange={handleChangeFormElement("description")}
                />
                <Autocomplete
                    id="exMuscle"
                    freeSolo
                    options={muscles.map((option) => option)}
                    renderInput={(params) => (
                        <TextField {...params} required  value={newMuscles} onChange={handleChangeFormElement("muscles")} label="Muscles" name="newMuscles" margin="normal" variant="filled" className={classes.inputEle}/>
                    )}

                />


              <DialogActions>
                <Button onClick={handleCreateDialog} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleExerciseSubmit.bind(this, curExerciseState.newExercise)} color="primary">
                  Submit
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </Paper>
    </Fragment>

  );
};

export default Create;
