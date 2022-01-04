import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    control,

    formState: { errors },
  } = useForm();

  const onFormSubmit = (data) => console.log(data);
  const onError = (errors, e) => console.log(errors, e);

  const helperText = () => {
    if (errors.firstName?.type === 'required') return 'First name is required';
    else if (errors.firstName?.type === 'pattern') return 'only alphabates';
    return '';
  };

  console.log(errors);

  return (
    <div>
      <form className={classes.root} autoComplete="off" onSubmit={handleSubmit(onFormSubmit, onError)}>
        <TextField
          id="standard-multiline-flexible"
          helperText={helperText()}
          margin="dense"
          label="First Name"
          placeholder="Enter First Name*"
          size="small"
          variant="outlined"
          name="firstName"
          inputRef={register({ required: true, pattern: /^[A-Za-z]+$/ })}
          error={errors.firstName ? true : false}
        />
        <TextField
          id="standard-multiline-flexible"
          helperText="required"
          margin="dense"
          label="Last Name"
          placeholder="Enter Last Name*"
          size="small"
          variant="outlined"
        />
        <Button type="submit" variant="filled">
          submit
        </Button>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justifyContent="space-around">
            <Controller
              control={control}
              defaultValue={null}
              name="date1"
              rules={{ required: 'plz pick some date' }}
              render={(props) => {
                return (
                  <KeyboardDatePicker
                    disableMaskedInput
                    InputProps={{ readOnly: true }}
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    value={props.value}
                    onChange={props.onChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                    error={errors.date1}
                    helperText={errors.date1?.message}
                    okLabel="ok"
                    rightArrowButtonText="ok"
                  />
                );
              }}
            ></Controller>
            {/* 
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              format="dd/MM/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Time picker"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            /> */}
          </Grid>
        </MuiPickersUtilsProvider>
      </form>
    </div>
  );
}

// import "date-fns";
// import React from "react";
// import Grid from "@material-ui/core/Grid";
// import DateFnsUtils from "@date-io/date-fns";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";

// export default function MaterialUIPickers() {
//   // The first commit of Material-UI
//   const [selectedDate, setSelectedDate] = React.useState(
//     new Date("2014-08-18T21:11:54")
//   );

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   return (
//     <MuiPickersUtilsProvider utils={DateFnsUtils}>
//       <Grid container justifyContent="space-around">
//         <KeyboardDatePicker
//           disableToolbar
//           variant="inline"
//           format="MM/dd/yyyy"
//           margin="normal"
//           id="date-picker-inline"
//           label="Date picker inline"
//           value={selectedDate}
//           onChange={handleDateChange}
//           KeyboardButtonProps={{
//             "aria-label": "change date",
//           }}
//         />
//         <KeyboardDatePicker
//           margin="normal"
//           id="date-picker-dialog"
//           label="Date picker dialog"
//           format="MM/dd/yyyy"
//           value={selectedDate}
//           onChange={handleDateChange}
//           KeyboardButtonProps={{
//             "aria-label": "change date",
//           }}
//         />
//         <KeyboardTimePicker
//           margin="normal"
//           id="time-picker"
//           label="Time picker"
//           value={selectedDate}
//           onChange={handleDateChange}
//           KeyboardButtonProps={{
//             "aria-label": "change time",
//           }}
//         />
//       </Grid>
//     </MuiPickersUtilsProvider>
//   );
// }
