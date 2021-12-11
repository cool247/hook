// import React, { useEffect } from 'react';
// import HocDialog from '../hoc/HocDialogBox';
// //import ReactDatePicker from "react-datepicker";
// import { TextField, Button, LinearProgress, Grid, Typography } from '@material-ui/core';
// import { useForm, Controller } from 'react-hook-form';
// import axios from 'axios';
// import _ from 'lodash';

// const title = `Fill the Form`;

// function App() {
//   const [networkError, setNetworkError] = React.useState(false);
//   const [state, setState] = React.useState(null);
//   useEffect(() => {
//     const randomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);
//     axios
//       .get(`https://jsonplaceholder.typicode.com/users/${randomNumber}`)
//       .then((response) => {
//         setState(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//         setNetworkError(true);
//       });
//   }, []);

//   const {
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm({ mode: 'onChange' });
//   //const [firstName, setFirstName] = useState("");

//   const onFormSubmit = (data) => {
//     console.log(data);
//   };

//   const renderUI = () => {
//     if (state) {
//       //when you get data from API then set the initialState of the Form
//       //initialize data with API
//       const initialState = {
//         firstName: state.name,
//         username: state.username,
//         age: 56,
//         email: state.email,
//       };

//       return (
//         <form onSubmit={handleSubmit(onFormSubmit)}>
//           <Grid container spacing={2}>
//             <Grid item xs={6}>
//               <Controller
//                 name="firstName"
//                 control={control}
//                 defaultValue={initialState.firstName}
//                 rules={{
//                   required: 'First name required',
//                   minLength: {
//                     value: 3,
//                     message: 'name should be greater than 3',
//                   },
//                   maxLength: {
//                     value: 30,
//                     message: 'exceeded max characters allowed',
//                   },
//                 }}
//                 render={(props) => (
//                   <TextField
//                     multiline
//                     maxRows={2}
//                     label="First Name"
//                     variant="outlined"
//                     size="small"
//                     value={props.value}
//                     onChange={props.onChange}
//                     error={!!errors.firstName}
//                     helperText={errors.firstName?.message}
//                   />
//                 )}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <Controller
//                 name="username"
//                 control={control}
//                 defaultValue={initialState.username}
//                 rules={{ required: 'last name required' }}
//                 render={(props) => (
//                   <TextField
//                     label="User Name"
//                     multiline
//                     maxRows={2}
//                     variant="outlined"
//                     size="small"
//                     value={props.value}
//                     onChange={props.onChange}
//                     error={!!errors.username}
//                     helperText={errors.username?.message}
//                   />
//                 )}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <Controller
//                 name="Age"
//                 control={control}
//                 defaultValue={initialState.age}
//                 rules={{
//                   required: 'Age is required',
//                   min: { value: 17, message: 'need grater than 17' },
//                   max: { value: 80, message: 'need lesser than 80' },
//                 }}
//                 render={(props) => (
//                   <TextField
//                     label="Age"
//                     // required
//                     variant="outlined"
//                     size="small"
//                     value={props.value}
//                     onChange={props.onChange}
//                     error={!!errors.Age}
//                     helperText={errors.Age?.message}
//                   />
//                 )}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <Controller
//                 name="Email"
//                 control={control}
//                 defaultValue={initialState.email}
//                 rules={{
//                   required: 'Email is required',
//                   pattern: {
//                     value:
//                       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//                     message: 'Email is not Valid',
//                   },
//                 }}
//                 render={(props) => (
//                   <TextField
//                     label="Email"
//                     multiline
//                     maxRows={2}
//                     variant="outlined"
//                     size="small"
//                     value={props.value}
//                     onChange={props.onChange}
//                     error={!!errors.Email}
//                     helperText={errors.Email?.message}
//                   />
//                 )}
//               />
//             </Grid>
//           </Grid>
//           <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
//             <Button type="submit" size="small" variant="contained" color="primary" disabled={!_.isEmpty(errors)}>
//               Submit
//             </Button>
//           </div>
//         </form>
//       );
//     } else {
//       if (networkError) {
//         return <Typography color="error">Network Error</Typography>;
//       } else {
//         return (
//           <div>
//             <LinearProgress />
//           </div>
//         );
//       }
//     }
//   };

//   return <div>{renderUI()}</div>;
// }
// export default HocDialog({ title })(App);
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { TextField, Grid, Button, Container } from '@material-ui/core';
import { AddCircleOutlineTwoTone, CheckTwoTone, Delete } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  primaryBorder: {
    border: `1px solid ${theme.palette.primary.main}`,
    padding: '20px',
    borderRadius: '10px',
  },
}));

export default function App() {
  const classes = useStyles();
  const {
    //  register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      labels: [{ firstName: '', lastName: '' }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: 'labels',
    control,
  });
  // React.useEffect(() => {

  // }, [errors]);

  return (
    <Container maxWidth="md">
      <form onSubmit={handleSubmit((data) => console.log(data.labels))}>
        <ul className={classes.primaryBorder}>
          {fields.map((item, index) => (
            <Grid container spacing={4} key={item.id} justifyContent="center">
              <Controller
                render={(params) => (
                  <Grid item xs={5}>
                    <TextField
                      {...params}
                      multiline
                      fullWidth
                      maxRows={2}
                      label="First Name"
                      placeholder="Enter Name"
                      variant="outlined"
                      key={item.id}
                      size="small"
                      error={!!errors?.labels?.[index]?.firstName}
                      helperText={errors?.labels?.[index]?.firstName?.message}
                    />
                  </Grid>
                )}
                name={`labels.${index}.firstName`}
                control={control}
                defaultValue={''}
                rules={{
                  required: 'First name required',
                  minLength: {
                    value: 3,
                    message: 'should be greater than 3',
                  },
                  maxLength: {
                    value: 30,
                    message: 'Exceeded max characters allowed',
                  },
                }}
              />
              <Controller
                render={(params) => (
                  <Grid item xs={5}>
                    <TextField
                      {...params}
                      fullWidth
                      multiline
                      maxRows={2}
                      label="Last Name"
                      placeholder="Enter Name"
                      variant="outlined"
                      key={item.id}
                      size="small"
                      error={!!errors?.labels?.[index]?.lastName}
                      helperText={errors?.labels?.[index]?.lastName?.message}
                    />
                  </Grid>
                )}
                name={`labels.${index}.lastName`}
                defaultValue={''}
                control={control}
                rules={{
                  required: 'last name required',
                  minLength: {
                    value: 3,
                    message: 'should be greater than 3',
                  },
                  maxLength: {
                    value: 30,
                    message: 'Exceeded max characters allowed',
                  },
                }}
              />
              <Grid item xs={2}>
                <Button variant="contained" color="secondary" startIcon={<Delete />} onClick={() => remove(index)}>
                  Delete
                </Button>
              </Grid>
            </Grid>
          ))}
        </ul>
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: '10px' }}
          startIcon={<AddCircleOutlineTwoTone />}
          onClick={() => append({ firstName: '', lastName: '' })}
        >
          Add Row
        </Button>
        <Button variant="contained" color="primary" type="submit" startIcon={<CheckTwoTone />}>
          Submit
        </Button>
      </form>
    </Container>
  );
}
