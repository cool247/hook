// import React, { useState, useEffect, useRef } from 'react';
// import { Button, Typography } from '@material-ui/core';
// import CountUp from 'react-countup';

// function usePrevious(value) {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// }

// const Count = () => {
//   const [count, setCount] = useState(0);
//   const prevCount = usePrevious(count);

//   console.log(count, 'COUNT', prevCount);
//   return (
//     <>
//       <Typography align="center">
//         <CountUp start={prevCount} end={count} easing="easeOutCubic" duration={0.5} />
//       </Typography>
//       <Button
//         style={{ marginRight: '8px' }}
//         variant="outlined"
//         color="primary"
//         onClick={() => setCount((ps) => ps + 10)}
//       >
//         +10
//       </Button>
//       <Button variant="outlined" color="primary" onClick={() => setCount((ps) => ps - 10)}>
//         -10
//       </Button>
//     </>
//   );
// };

// export default Count;
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { FormControlLabel, FormGroup, Checkbox } from '@material-ui/core';

const initialCheckBox = [
  { id: 1, link: 'OFC' },
  { id: 2, link: 'radio' },
  { id: 3, link: 'san' },
];

const MaterialCheckBox = () => {
  const [state, setState] = React.useState({ OFC: false, radio: false, san: false });
  // const [loading, setLoading] = React.useState(true);

  const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color='default' {...props} />);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setState({ ...state, [name]: checked });
  };

  React.useEffect(() => setTimeout(() => setState((ps) => ({ ...ps, OFC: true })), 3000), []);

  console.log(state, 'State');
  // const renderCheckBoxList = () => {};

  return (
    <FormGroup>
      {initialCheckBox.map((el) => {
        return (
          <FormControlLabel
            control={<GreenCheckbox checked={state[el.link]} onChange={handleChange} name={el.link} />}
            label={el.link}
            key={el.id}
          />
        );
      })}
    </FormGroup>
  );
};

export default MaterialCheckBox;
