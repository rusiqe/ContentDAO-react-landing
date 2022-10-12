import React from 'react';
import classNames from 'classnames';
//import { Link } from 'react-router-dom';
//import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h3 className="m-0">
        Content_DAO
      </h3>
    </div>
  );
}

export default Logo;