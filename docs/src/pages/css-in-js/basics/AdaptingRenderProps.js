import React from 'react';
import { createStyled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

// Like https://github.com/brunobertolini/styled-by
const styledBy = (property, mapping) => props => mapping[props[property]];

const Styled = createStyled({
  root: {
    background: styledBy('color', {
      red: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      blue: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    }),
    border: 0,
    borderRadius: 3,
    boxShadow: styledBy('color', {
      red: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      blue: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    }),
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

function MyButton(props) {
  const { color, ...other } = props;
  return (
    <Styled {...props}>{({ classes }) => <Button className={classes.root} {...other} />}</Styled>
  );
}

function AdpatingRenderProps() {
  return (
    <div>
      <MyButton color="red">Red</MyButton>
      <br />
      <br />
      <MyButton color="blue">Blue</MyButton>
    </div>
  );
}

export default AdpatingRenderProps;