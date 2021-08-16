import React from "react";
//import ReactDatePicker from "react-datepicker";
import { TextField, Button, Grid, Container, Box } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import _ from "lodash";

export default function App() {
  const [networkError, setNetworkError] = React.useState(false);
  const [state, setState] = React.useState(null);
  const initialState = {
    firstName: "Ravi",
    username: "Kumar",
    age: 56,
    email: "Ravi@gmail.com",
  };
  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        setState(response.data);
        initialState.firstName = state.name;
        console.log(state.name);
      })
      .catch((error) => {
        console.log(error);
        setNetworkError(true);
      });
  }, []);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  //const [firstName, setFirstName] = useState("");

  const onFormSubmit = (data) => {
    console.log(data);
  };

  const renderUI = () => {
    if (state) {
      //when you get data from API then set the initialState of the Form
      //initialize data with API
      const initialState = {
        firstName: state.name,
        username: state.username,
        age: 56,
        email: state.email,
      };

      return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Box m={2}>
            <Grid container spacing={2}>
              <Grid item sm={12}></Grid>
            </Grid>
            <Grid container spacing={5}>
              <Grid item sm={4}></Grid>
              <Grid item sm={4}>
                <Controller
                  name="firstName"
                  control={control}
                  defaultValue={initialState.firstName}
                  rules={{
                    required: "First name required",
                    minLength: {
                      value: 3,
                      message: "name should be greater than 3",
                    },
                    maxLength: {
                      value: 30,
                      message: "exceeded max characters allowed",
                    },
                  }}
                  render={(props) => (
                    <TextField
                      label="First Name"
                      // required
                      variant="outlined"
                      size="small"
                      value={props.value}
                      onChange={props.onChange}
                      error={Boolean(errors.firstName)}
                      helperText={errors.firstName?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item sm={4}></Grid>
            </Grid>
            <Grid container spacing={5}>
              <Grid item sm={4}></Grid>
              <Grid item sm={4}>
                <Controller
                  name="username"
                  control={control}
                  defaultValue={initialState.username}
                  rules={{ required: "last name required" }}
                  render={(props) => (
                    <TextField
                      label="User Name"
                      // required
                      variant="outlined"
                      size="small"
                      value={props.value}
                      onChange={props.onChange}
                      error={Boolean(errors.username)}
                      helperText={errors.username?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item sm={4}></Grid>
            </Grid>
            <Grid container spacing={5}>
              <Grid item sm={4}></Grid>
              <Grid item sm={4}>
                <Controller
                  name="Age"
                  control={control}
                  defaultValue={initialState.age}
                  rules={{
                    required: "Age is required",
                    min: { value: 17, message: "need grater than 17" },
                    max: { value: 80, message: "need leeser than 80" },
                  }}
                  render={(props) => (
                    <TextField
                      label="Age"
                      // required
                      variant="outlined"
                      size="small"
                      value={props.value}
                      onChange={props.onChange}
                      error={Boolean(errors.Age)}
                      helperText={errors.Age?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item sm={4}></Grid>
            </Grid>
            <Grid container spacing={5}>
              <Grid item sm={4}></Grid>
              <Grid item sm={4}>
                <Controller
                  name="Email"
                  control={control}
                  defaultValue={initialState.email}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Email is not Valid",
                    },
                  }}
                  render={(props) => (
                    <TextField
                      label="Email"
                      // required
                      variant="outlined"
                      size="small"
                      value={props.value}
                      onChange={props.onChange}
                      error={Boolean(errors.Email)}
                      helperText={errors.Email?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item sm={4}></Grid>
            </Grid>
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={_.isEmpty(errors) ? false : true}
          >
            Submit
          </Button>
        </form>
      );
    } else {
      if (networkError) {
        return <div>Network Error {networkError}</div>;
      } else {
        return <div>LOADING................</div>;
      }
    }
  };

  return <div>{renderUI()}</div>;
}
