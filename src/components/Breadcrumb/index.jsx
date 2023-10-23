import classNames from 'classnames';
import React from 'react';

const Breadcrumb = ({ children, className }) => {
  return (
    <nav aria-label="breadcrumb" className={`breadcrumb-nav mb-2 ${className}`}>
      <div className="container">
        <ol className="breadcrumb">{children}</ol>
      </div>
    </nav>
  );
};

const BreadcrumbItem = ({ children, isActive = false }) => {
  return (
    <li
      className={classNames('breadcrumb-item', {
        active: isActive,
      })}
    >
      {children}
    </li>
  );
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
