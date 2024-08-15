import PropTypes, { checkPropTypes } from 'prop-types';

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded
}) {
  
  return (
    // <div>
    //     <button>{text}</button>
    // </div>
    <button>{children}</button>
  )
}

Button.PropTypes = {
  checkVariataionValue: (props)=> {
    console.log(props);
  },
};

export default Button;