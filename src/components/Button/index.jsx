import { Link } from 'react-router-dom';

const Button = ({ variant = 'primary', children, link, className = '', loading = false, disabled, ...rest }) => {
  let variantClass = '';
  switch (variant) {
    case 'primary':
      variantClass = 'btn btn-primary';
      break;

    case 'outline':
      variantClass = 'btn btn-outline-primary';
      break;

    case 'outline-white':
      variantClass = 'btn btn-outline-white';
      break;

    default:
      break;
  }

  if (!!link) {
    return (
      <Link to={link} className={`${variantClass} ${className}`} disabled={disabled} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${variantClass} ${className}`} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;
