import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="#0">Client Portal</Link>
        </li>
        <li>
          <Link to="#0">Investor Portal</Link>
        </li>
        <li>
          <Link to="#0">Writer Portal</Link>
        </li>
        <li>
          <Link to="#0">Ts&Cs</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;