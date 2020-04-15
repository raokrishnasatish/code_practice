import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Components/Layouts";
import Exercises from "./Components/Exercises/Exercises";
import { muscles, exercises } from "./store";

export default class App extends Component {
  state = {
    muscles: muscles,
    exercises,
    selectedExercise: {}
  };

  exerciseReduceCallback = (exercisesGrp, exercise) => {
    const { muscles } = exercise;

    exercisesGrp[muscles] = exercisesGrp[muscles]
      ? [...exercisesGrp[muscles], exercise]
      : [exercise];

    return exercisesGrp;
  };

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce(this.exerciseReduceCallback, {})
    );
  }

  selectedMuscleHandler = muscleCategory => {
    this.setState({
      muscleCategory
    });
  };

  handleSelectedExercise = id => {
    this.setState(prevState => {
      return {
        selectedExercise: prevState.exercises.find(el => el.id === id)
      };
    });
  };

  handleExerciseCreate = (newExercise) => {
    this.setState((prevState) => ({
      exercises: [...prevState.exercises, newExercise],
      muscles: [...prevState.muscles, newExercise.muscles]
      }));
    };

handleDeleteExercise = (id) => {
  this.setState((prevState) => ({
    exercises: prevState.exercises.filter((curValue) => {
      return curValue.id !== id ? curValue: null;
    })
  }))
};


  render() {
    const exercisesArray = this.getExercisesByMuscles();

    const { muscleCategory, selectedExercise } = this.state;

    return (
      <Fragment>
        <Header muscles={this.state.muscles} handleExerciseCreate={this.handleExerciseCreate}/>
        <Exercises
          selectedExercise={selectedExercise}
          muscleCategory={muscleCategory}
          exercisesArray={exercisesArray}
          onSelect={this.handleSelectedExercise}
          handleExerciseSubmit={this.handleExerciseSubmit}
          handleDeleteExercise={this.handleDeleteExercise}
        />
        <Footer
          selectedMuscleHandler={this.selectedMuscleHandler.bind(this)}
          muscleCategory={muscleCategory}
          muscles={this.state.muscles}
        />
        {console.log(this.state.muscles)}
      </Fragment>

    );
  }
}
