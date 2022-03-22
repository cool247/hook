// import React, { useEffect } from "react";
// import HocDialog from "../hoc/HocDialogBox";
// import { makeStyles } from "@material-ui/core/styles";

// import {
//   TextField,
//   Button,
//   LinearProgress,
//   Grid,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   ListItemIcon,
//   Checkbox,
//   ListItemText,
// } from "@material-ui/core";
// import Autocomplete from "@material-ui/lab/Autocomplete";
// // import Autocomplete from '@mui/material/Autocomplete';
// import { useForm, Controller } from "react-hook-form";
// import axios from "axios";
// import _ from "lodash";
// //import { useMemo } from 'react';

// const title = `Fill the Form`;
// const initialState = {
//   firstName: "",
//   username: "",
//   age: "",
//   email: "",
// };

// const options = [
//   "Oliver Hansen",
//   "Van Henry",
//   "April Tucker",
//   "Ralph Hubbard",
//   "Omar Alexander",
//   "Carlos Abbott",
//   "Miriam Wagner",
//   "Bradley Wilkerson",
//   "Virginia Andrews",
//   "Kelly Snyder",
// ];

// const useStyles = makeStyles(theme => ({
//   formControl: {
//     margin: theme.spacing(1),
//     width: 300,
//   },
//   indeterminateColor: {
//     color: "#f50057",
//   },
//   selectAllText: {
//     fontWeight: 500,
//   },
//   selectedAll: {
//     backgroundColor: "rgba(0, 0, 0, 0.08)",
//     "&:hover": {
//       backgroundColor: "rgba(0, 0, 0, 0.08)",
//     },
//   },
// }));

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
//   getContentAnchorEl: null,
//   anchorOrigin: {
//     vertical: "bottom",
//     horizontal: "center",
//   },
//   transformOrigin: {
//     vertical: "top",
//     horizontal: "center",
//   },
//   variant: "menu",
// };

// function App() {
//   const classes = useStyles();
//   const {
//     handleSubmit,
//     control,
//     reset,
//     formState: { errors },
//   } = useForm({ mode: "onChange" });

//   const [state] = React.useState(initialState);
//   const [inputValue, setInputValue] = React.useState("");
//   const [inputError, setInputError] = React.useState("");
//   const [loading, setLoading] = React.useState(true);

//   const top100Films = [
//     { title: "The Shawshank Redemption", year: 1994 },
//     { title: "The Godfather", year: 1972 },
//     { title: "The Godfather: Part II", year: 1974 },
//     { title: "The Dark Knight", year: 2008 },
//     { title: "12 Angry Men", year: 1957 },
//     { title: "Schindler's List", year: 1993 },
//     { title: "Pulp Fiction", year: 1994 },
//     { title: "The Lord of the Rings: The Return of the King", year: 2003 },
//     { title: "The Good, the Bad and the Ugly", year: 1966 },
//     { title: "Fight Club", year: 1999 },
//     { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
//     { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
//     { title: "Forrest Gump", year: 1994 },
//     { title: "Inception", year: 2010 },
//     { title: "The Lord of the Rings: The Two Towers", year: 2002 },
//     { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
//     { title: "Goodfellas", year: 1990 },
//     { title: "The Matrix", year: 1999 },
//     { title: "Seven Samurai", year: 1954 },
//     { title: "Star Wars: Episode IV - A New Hope", year: 1977 },
//     { title: "City of God", year: 2002 },
//     { title: "Se7en", year: 1995 },
//     { title: "The Silence of the Lambs", year: 1991 },
//     { title: "It's a Wonderful Life", year: 1946 },
//     { title: "Life Is Beautiful", year: 1997 },
//     { title: "The Usual Suspects", year: 1995 },
//     { title: "Léon: The Professional", year: 1994 },
//     { title: "Spirited Away", year: 2001 },
//     { title: "Saving Private Ryan", year: 1998 },
//     { title: "Once Upon a Time in the West", year: 1968 },
//     { title: "American History X", year: 1998 },
//     { title: "Interstellar", year: 2014 },
//     { title: "Casablanca", year: 1942 },
//     { title: "City Lights", year: 1931 },
//     { title: "Psycho", year: 1960 },
//     { title: "The Green Mile", year: 1999 },
//     { title: "The Intouchables", year: 2011 },
//     { title: "Modern Times", year: 1936 },
//     { title: "Raiders of the Lost Ark", year: 1981 },
//     { title: "Rear Window", year: 1954 },
//     { title: "The Pianist", year: 2002 },
//     { title: "The Departed", year: 2006 },
//     { title: "Terminator 2: Judgment Day", year: 1991 },
//     { title: "Back to the Future", year: 1985 },
//     { title: "Whiplash", year: 2014 },
//     { title: "Gladiator", year: 2000 },
//     { title: "Memento", year: 2000 },
//     { title: "The Prestige", year: 2006 },
//     { title: "The Lion King", year: 1994 },
//     { title: "Apocalypse Now", year: 1979 },
//     { title: "Alien", year: 1979 },
//     { title: "Sunset Boulevard", year: 1950 },
//     { title: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb", year: 1964 },
//     { title: "The Great Dictator", year: 1940 },
//     { title: "Cinema Paradiso", year: 1988 },
//     { title: "The Lives of Others", year: 2006 },
//     { title: "Grave of the Fireflies", year: 1988 },
//     { title: "Paths of Glory", year: 1957 },
//     { title: "Django Unchained", year: 2012 },
//     { title: "The Shining", year: 1980 },
//     { title: "WALL·E", year: 2008 },
//     { title: "American Beauty", year: 1999 },
//     { title: "The Dark Knight Rises", year: 2012 },
//     { title: "Princess Mononoke", year: 1997 },
//     { title: "Aliens", year: 1986 },
//     { title: "Oldboy", year: 2003 },
//     { title: "Once Upon a Time in America", year: 1984 },
//     { title: "Witness for the Prosecution", year: 1957 },
//     { title: "Das Boot", year: 1981 },
//     { title: "Citizen Kane", year: 1941 },
//     { title: "North by Northwest", year: 1959 },
//     { title: "Vertigo", year: 1958 },
//     { title: "Star Wars: Episode VI - Return of the Jedi", year: 1983 },
//     { title: "Reservoir Dogs", year: 1992 },
//     { title: "Braveheart", year: 1995 },
//     { title: "M", year: 1931 },
//     { title: "Requiem for a Dream", year: 2000 },
//     { title: "Amélie", year: 2001 },
//     { title: "A Clockwork Orange", year: 1971 },
//     { title: "Like Stars on Earth", year: 2007 },
//     { title: "Taxi Driver", year: 1976 },
//     { title: "Lawrence of Arabia", year: 1962 },
//     { title: "Double Indemnity", year: 1944 },
//     { title: "Eternal Sunshine of the Spotless Mind", year: 2004 },
//     { title: "Amadeus", year: 1984 },
//     { title: "To Kill a Mockingbird", year: 1962 },
//     { title: "Toy Story 3", year: 2010 },
//     { title: "Logan", year: 2017 },
//     { title: "Full Metal Jacket", year: 1987 },
//     { title: "Dangal", year: 2016 },
//     { title: "The Sting", year: 1973 },
//     { title: "2001: A Space Odyssey", year: 1968 },
//     { title: "Singin' in the Rain", year: 1952 },
//     { title: "Toy Story", year: 1995 },
//     { title: "Bicycle Thieves", year: 1948 },
//     { title: "The Kid", year: 1921 },
//     { title: "Inglourious Basterds", year: 2009 },
//     { title: "Snatch", year: 2000 },
//     { title: "3 Idiots", year: 2009 },
//     { title: "Monty Python and the Holy Grail", year: 1975 },
//   ];

//   useEffect(() => {
//     const randomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);
//     axios
//       .get(`https://jsonplaceholder.typicode.com/users/${randomNumber}`)
//       .then(response => {
//         setLoading(false);
//         const responseData = {
//           firstName: response.data.name,
//           username: response.data.username,
//           age: 56,
//           email: response.data.email,
//         };
//         reset(responseData);
//       })
//       .catch(error => {
//         console.log(error);
//         setLoading(false);
//       });
//   }, [reset, inputValue]);

//   const onFormSubmit = data => {
//     console.log({ ...data, inputValue });
//   };

//   const [selected, setSelected] = React.useState([]);
//   const isAllSelected = options.length > 0 && selected.length === options.length;

//   const handleChange = event => {
//     const value = event.target.value;
//     if (value[value.length - 1] === "all") {
//       setSelected(selected.length === options.length ? [] : options);
//       return;
//     }
//     setSelected(value);
//   };

//   // const convertMilliseconds = useCallback((milliseconds) => {
//   //   let days, hours, minutes, seconds, total_hours, total_minutes, total_seconds;

//   //   total_seconds = +Math.floor(milliseconds / 1000);
//   //   total_minutes = +Math.floor(total_seconds / 60);
//   //   total_hours = +Math.floor(total_minutes / 60);
//   //   days = +Math.floor(total_hours / 24);

//   //   seconds = total_seconds % 60;
//   //   minutes = total_minutes % 60;
//   //   hours = total_hours % 24;
//   //   return { days, hours, minutes, seconds };
//   // }, []);

//   const onInputChange = value => {
//     setInputValue(value);
//     if (value.trim().length === 0) {
//       setInputError("Required");
//     } else if (value.length < 3) {
//       setInputError("min 3 char");
//     } else {
//       setInputError("");
//     }
//   };

//   const renderUI = () => {
//     if (loading) {
//       return <LinearProgress />;
//     }

//     return (
//       <form onSubmit={handleSubmit(onFormSubmit)}>
//         <Grid container spacing={2}>
//           <Grid item xs={6}>
//             <Controller
//               name="firstName"
//               control={control}
//               defaultValue={state.firstName}
//               rules={{
//                 required: "First name required",
//                 minLength: {
//                   value: 3,
//                   message: "name should be greater than 3",
//                 },
//                 maxLength: {
//                   value: 30,
//                   message: "exceeded max characters allowed",
//                 },
//               }}
//               render={props => (
//                 <TextField
//                   multiline
//                   maxRows={2}
//                   label="First Name"
//                   variant="outlined"
//                   size="small"
//                   value={props.value}
//                   onChange={props.onChange}
//                   error={!!errors.firstName}
//                   helperText={errors.firstName?.message}
//                 />
//               )}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <Controller
//               name="username"
//               control={control}
//               defaultValue={state.username}
//               rules={{ required: "last name required" }}
//               render={props => (
//                 <TextField
//                   label="User Name"
//                   multiline
//                   maxRows={2}
//                   variant="outlined"
//                   size="small"
//                   value={props.value}
//                   onChange={props.onChange}
//                   error={!!errors.username}
//                   helperText={errors.username?.message}
//                 />
//               )}
//             />
//           </Grid>
//           <Grid item xs={3}>
//             <Controller
//               name="age"
//               control={control}
//               defaultValue={state.age}
//               rules={{
//                 required: "Age is required",
//                 min: { value: 17, message: "need grater than 17" },
//                 max: { value: 80, message: "need lesser than 80" },
//               }}
//               render={props => (
//                 <TextField
//                   label="Age"
//                   // required
//                   variant="outlined"
//                   size="small"
//                   value={props.value}
//                   onChange={props.onChange}
//                   error={!!errors.age}
//                   helperText={errors.age?.message}
//                 />
//               )}
//             />
//           </Grid>
//           <Grid item xs={9}>
//             <Controller
//               name="email"
//               control={control}
//               defaultValue={state.email}
//               rules={{
//                 pattern: {
//                   value:
//                     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//                   message: "Email is not Valid",
//                 },
//               }}
//               render={props => (
//                 <TextField
//                   label="Email"
//                   fullWidth
//                   multiline
//                   maxRows={2}
//                   variant="outlined"
//                   size="small"
//                   value={props.value}
//                   onChange={props.onChange}
//                   error={!!errors.email}
//                   helperText={errors.email?.message}
//                 />
//               )}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <Autocomplete
//               freeSolo
//               size="small"
//               disableClearable
//               options={top100Films.map(option => option.title)}
//               inputValue={inputValue}
//               onInputChange={(event, newInputValue) => {
//                 onInputChange(newInputValue);
//               }}
//               renderInput={props => (
//                 <TextField
//                   {...props}
//                   label="Search input"
//                   size="small"
//                   variant="outlined"
//                   error={!!inputError}
//                   helperText={inputError}
//                 />
//               )}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <FormControl fullWidth>
//               <InputLabel id="mutiple-select-label">Multiple Select</InputLabel>
//               <Select
//                 labelId="mutiple-select-label"
//                 multiple
//                 value={selected}
//                 onChange={handleChange}
//                 renderValue={selected => selected.join(", ")}
//                 MenuProps={MenuProps}
//               >
//                 <MenuItem
//                   value="all"
//                   classes={{
//                     root: isAllSelected ? classes.selectedAll : "",
//                   }}
//                 >
//                   <ListItemIcon>
//                     <Checkbox
//                       classes={{ indeterminate: classes.indeterminateColor }}
//                       checked={isAllSelected}
//                       indeterminate={selected.length > 0 && selected.length < options.length}
//                     />
//                   </ListItemIcon>
//                   <ListItemText primary="Select All" classes={{ primary: classes.selectAllText }} />
//                 </MenuItem>
//                 {options.map(option => (
//                   <MenuItem key={option} value={option}>
//                     <ListItemIcon>
//                       <Checkbox checked={selected.indexOf(option) > -1} />
//                     </ListItemIcon>
//                     <ListItemText primary={option} />
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Grid>
//         </Grid>
//         <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
//           <Button
//             type="submit"
//             size="small"
//             variant="contained"
//             color="primary"
//             disabled={!_.isEmpty(errors) || !!inputError}
//           >
//             Submit
//           </Button>
//         </div>
//       </form>
//     );
//   };

//   return renderUI();
// }
// export default HocDialog({ title })(App);

// ==============================ESLINT==========================================
//npx eslint .\src\app\AddList.jsx  -f html -o  C:\Users\Asus\Desktop\html.html

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Grid, Button, Container, IconButton } from "@material-ui/core";
import { AddCircleOutlineTwoTone, CheckTwoTone, Delete } from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";
import { Controller } from "react-hook-form";
import { useAtom } from "jotai";
/// autoCompleteAtom;
import Fade from "@material-ui/core/Fade";
import Grow from "@material-ui/core/Grow";
import { autoCompleteAtom } from "../Atom/atoms";

import { useForm, useFieldArray } from "react-hook-form";

const useStyles = makeStyles(theme => ({
  primaryBorder: {
    border: `1px solid ${theme.palette.primary.main}`,
    padding: "20px",
    borderRadius: "10px",
  },
}));

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings: The Return of the King", year: 2003 },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
  { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  { title: "The Lord of the Rings: The Two Towers", year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  { title: "Star Wars: Episode IV - A New Hope", year: 1977 },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  { title: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb", year: 1964 },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  { title: "Star Wars: Episode VI - Return of the Jedi", year: 1983 },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  { title: "Eternal Sunshine of the Spotless Mind", year: 2004 },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];

export default function ArrayFieldForm(props) {
  const classes = useStyles();

  const { append, remove, fields, control, getValues, errors } = props;

  return (
    <Container maxWidth="md">
      <IconButton color="primary" onClick={() => append({ firstName: "", lastName: "", autoComplete: null })}>
        <AddCircleOutlineTwoTone style={{ width: "25px", height: "25px" }} />
      </IconButton>

      <ul className={classes.primaryBorder}>
        {fields.map((item, index) => (
          <Grow in={true} timeout={333}>
            <Grid container spacing={2} key={item.id} justifyContent="center">
              <Controller
                render={({ field: { onChange, value }, ...props }) => (
                  <Grid item xs={3}>
                    <TextField
                      {...props}
                      onChange={e => {
                        onChange(e.target.value);
                      }}
                      value={getValues().generalFormFields[index].firstName}
                      multiline
                      fullWidth
                      maxRows={2}
                      label="First Name"
                      placeholder="Enter Name"
                      variant="outlined"
                      key={item.id}
                      size="small"
                      error={!!errors?.generalFormFields?.[index]?.firstName}
                      helperText={errors?.generalFormFields?.[index]?.firstName?.message}
                    />
                  </Grid>
                )}
                name={`generalFormFields[${index}].firstName`}
                control={control}
                rules={{
                  required: "Required",
                  minLength: {
                    value: 3,
                    message: "should be greater than 3",
                  },
                  maxLength: {
                    value: 30,
                    message: "Exceeded max characters allowed",
                  },
                }}
              />

              <Controller
                render={({ field: { onChange, value }, ...props }) => (
                  <Grid item xs={3}>
                    <TextField
                      {...props}
                      onChange={e => {
                        onChange(e.target.value);
                      }}
                      value={getValues().generalFormFields[index].lastName}
                      fullWidth
                      multiline
                      maxRows={2}
                      label="Last Name"
                      placeholder="Enter Name"
                      variant="outlined"
                      size="small"
                      defaultValue={getValues().generalFormFields[index].lastName}
                      error={!!errors?.generalFormFields?.[index]?.lastName}
                      helperText={errors?.generalFormFields?.[index]?.lastName?.message}
                    />
                  </Grid>
                )}
                defaultValue={item.lastName} // make sure to set up defaultValue
                name={`generalFormFields[${index}].lastName`}
                control={control}
                rules={{
                  required: "Required",
                  minLength: {
                    value: 3,
                    message: "should be greater than 3",
                  },
                  maxLength: {
                    value: 30,
                    message: "Exceeded max characters allowed",
                  },
                }}
              />

              <Controller
                render={({ field: { onChange, value, ...props } }) => (
                  <Grid item xs={5}>
                    <Autocomplete
                      {...props}
                      size="small"
                      // inputValue={autoCompleteInput["input" + index]}
                      // onInputChange={(_, val) => setAutoCompleteInput(ps => ({ ...ps, ["input" + index]: val }))}
                      onChange={(_, data) => {
                        if (data) {
                          onChange(data.title);
                          // setValue(`generalFormFields[${index}].autoComplete`, data.title);
                        } else {
                          onChange(data);
                          // setValue(`generalFormFields[${index}].autoComplete`, data);
                        }
                      }}
                      value={top100Films.find(el => el.title === getValues().generalFormFields[index].autoComplete)}
                      getOptionLabel={option => option.title || null}
                      options={top100Films}
                      renderInput={params => (
                        <TextField
                          {...params}
                          label="Controllable"
                          variant="outlined"
                          error={!!errors?.generalFormFields?.[index]?.autoComplete}
                          helperText={errors?.generalFormFields?.[index]?.autoComplete?.message}
                        />
                      )}
                    />
                  </Grid>
                )}
                name={`generalFormFields[${index}].autoComplete`}
                control={control}
                rules={{
                  required: "Required",
                }}
              />
              <Grid item>
                <IconButton
                  style={{ padding: "5px", marginTop: "2px" }}
                  color="secondary"
                  onClick={() => remove(index)}
                >
                  <Delete style={{ width: "25px", height: "25px" }} />
                </IconButton>
              </Grid>
            </Grid>
          </Grow>
        ))}
      </ul>
    </Container>
  );
}
