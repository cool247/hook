import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import moment from 'moment';

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  function disableWeekends(date) {
    const past3monthDate = moment(new Date()).subtract(3, 'month');
    return moment(past3monthDate).isSameOrAfter(moment(date));
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent='space-around'>
        <KeyboardDatePicker
          disableFuture
          disableToolbar
          shouldDisableDate={disableWeekends}
          variant='inline'
          format='MM/dd/yyyy'
          margin='normal'
          id='date-picker-inline'
          label='Date picker inline'
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
