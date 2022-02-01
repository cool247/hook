import React, { useEffect, useState } from 'react';
import HocDialog from '../hoc/HocDialogBox';
//import ReactDatePicker from "react-datepicker";
import { TextField, Button, LinearProgress, Grid, Typography } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import Autocomplete from '@mui/material/Autocomplete';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import _ from 'lodash';

const title = `Fill the Form`;

function App() {
  const [networkError, setNetworkError] = React.useState(false);
  const [state, setState] = React.useState(null);

  const [inputValue, setInputValue] = React.useState('');
  const [inputError, setInputError] = React.useState('Required');

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
  ];

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${randomNumber}`)
      .then((response) => {
        setState(response.data);
      })
      .catch((error) => {
        console.log(error);
        setNetworkError(true);
      });
  }, []);

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const onFormSubmit = (data) => {
    console.log(data);
  };

  console.log('cccc', inputValue, inputError);

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

      const onInputChange = (value) => {
        setInputValue(value);
        if (value.trim().length === 0) {
          setInputError('Required');
        } else if (value.length <= 3) {
          setInputError('min 3 char');
        } else {
          setInputError('');
        }
      };

      return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Controller
                name='firstName'
                control={control}
                defaultValue={initialState.firstName}
                rules={{
                  required: 'First name required',
                  minLength: {
                    value: 3,
                    message: 'name should be greater than 3',
                  },
                  maxLength: {
                    value: 30,
                    message: 'exceeded max characters allowed',
                  },
                }}
                render={(props) => (
                  <TextField
                    multiline
                    maxRows={2}
                    label='First Name'
                    variant='outlined'
                    size='small'
                    value={props.value}
                    onChange={props.onChange}
                    error={!!errors.firstName}
                    helperText={errors.firstName?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name='username'
                control={control}
                defaultValue={initialState.username}
                rules={{ required: 'last name required' }}
                render={(props) => (
                  <TextField
                    label='User Name'
                    multiline
                    maxRows={2}
                    variant='outlined'
                    size='small'
                    value={props.value}
                    onChange={props.onChange}
                    error={!!errors.username}
                    helperText={errors.username?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name='Age'
                control={control}
                defaultValue={initialState.age}
                rules={{
                  required: 'Age is required',
                  min: { value: 17, message: 'need grater than 17' },
                  max: { value: 80, message: 'need lesser than 80' },
                }}
                render={(props) => (
                  <TextField
                    label='Age'
                    // required
                    variant='outlined'
                    size='small'
                    value={props.value}
                    onChange={props.onChange}
                    error={!!errors.Age}
                    helperText={errors.Age?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name='Email'
                control={control}
                defaultValue={initialState.email}
                rules={{
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Email is not Valid',
                  },
                }}
                render={(props) => (
                  <TextField
                    label='Email'
                    multiline
                    maxRows={2}
                    variant='outlined'
                    size='small'
                    value={props.value}
                    onChange={props.onChange}
                    error={!!errors.Email}
                    helperText={errors.Email?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Autocomplete
                freeSolo
                size='small'
                id='free-solo-2-demo'
                disableClearable
                options={top100Films.map((option) => option.title)}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  onInputChange(newInputValue);
                }}
                renderInput={(props) => (
                  <TextField
                    {...props}
                    label='Search input'
                    margin='normal'
                    variant='outlined'
                    error={!!inputError}
                    helperText={inputError}
                  />
                )}
              />
            </Grid>
          </Grid>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <Button
              type='submit'
              size='small'
              variant='contained'
              color='primary'
              disabled={!_.isEmpty(errors) || !!inputError}
            >
              Submit
            </Button>
          </div>
        </form>
      );
    } else {
      if (networkError) {
        return <Typography color='error'>Network Error</Typography>;
      } else {
        return <LinearProgress />;
      }
    }
  };

  return renderUI();
}
export default HocDialog({ title })(App);

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { useForm, useFieldArray, Controller } from 'react-hook-form';
// import { TextField, Grid, Button, Container } from '@material-ui/core';
// import { AddCircleOutlineTwoTone, CheckTwoTone, Delete } from '@material-ui/icons';

// const useStyles = makeStyles((theme) => ({
//   primaryBorder: {
//     border: `1px solid ${theme.palette.primary.main}`,
//     padding: '20px',
//     borderRadius: '10px',
//   },
// }));

// export default function ReactHookForm() {
//   const classes = useStyles();
//   const {
//     //  register,
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     mode: 'onChange',
//     defaultValues: {
//       labels: [{ firstName: '', lastName: '' }],
//     },
//   });
//   const { fields, append, remove } = useFieldArray({
//     name: 'labels',
//     control,
//   });
//   // React.useEffect(() => {

//   // }, [errors]);

//   return (
//     <Container maxWidth="md">
//       <form onSubmit={handleSubmit((data) => console.log(data.labels))}>
//         <ul className={classes.primaryBorder}>
//           {fields.map((item, index) => (
//             <Grid container spacing={4} key={item.id} justifyContent="center">
//               <Controller
//                 render={(params) => (
//                   <Grid item xs={5}>
//                     <TextField
//                       {...params}
//                       multiline
//                       fullWidth
//                       maxRows={2}
//                       label="First Name"
//                       placeholder="Enter Name"
//                       variant="outlined"
//                       key={item.id}
//                       size="small"
//                       error={!!errors?.labels?.[index]?.firstName}
//                       helperText={errors?.labels?.[index]?.firstName?.message}
//                     />
//                   </Grid>
//                 )}
//                 name={`labels.${index}.firstName`}
//                 control={control}
//                 defaultValue={''}
//                 rules={{
//                   required: 'First name required',
//                   minLength: {
//                     value: 3,
//                     message: 'should be greater than 3',
//                   },
//                   maxLength: {
//                     value: 30,
//                     message: 'Exceeded max characters allowed',
//                   },
//                 }}
//               />
//               <Controller
//                 render={(params) => (
//                   <Grid item xs={5}>
//                     <TextField
//                       {...params}
//                       fullWidth
//                       multiline
//                       maxRows={2}
//                       label="Last Name"
//                       placeholder="Enter Name"
//                       variant="outlined"
//                       key={item.id}
//                       size="small"
//                       error={!!errors?.labels?.[index]?.lastName}
//                       helperText={errors?.labels?.[index]?.lastName?.message}
//                     />
//                   </Grid>
//                 )}
//                 name={`labels.${index}.lastName`}
//                 defaultValue={''}
//                 control={control}
//                 rules={{
//                   required: 'last name required',
//                   minLength: {
//                     value: 3,
//                     message: 'should be greater than 3',
//                   },
//                   maxLength: {
//                     value: 30,
//                     message: 'Exceeded max characters allowed',
//                   },
//                 }}
//               />
//               <Grid item xs={2}>
//                 <Button variant="contained" color="secondary" startIcon={<Delete />} onClick={() => remove(index)}>
//                   Delete
//                 </Button>
//               </Grid>
//             </Grid>
//           ))}
//         </ul>
//         <Button
//           variant="contained"
//           color="primary"
//           style={{ marginRight: '10px' }}
//           startIcon={<AddCircleOutlineTwoTone />}
//           onClick={() => append({ firstName: '', lastName: '' })}
//         >
//           Add Row
//         </Button>
//         <Button variant="contained" color="primary" type="submit" startIcon={<CheckTwoTone />}>
//           Submit
//         </Button>
//       </form>
//     </Container>
//   );
// }
