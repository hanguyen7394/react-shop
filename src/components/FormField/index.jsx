import classNames from 'classnames';
import { forwardRef } from 'react';

const FormField = ({ name, label, required, error, renderField = undefined, ...fieldProps }, ref) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label} {required && <span>*</span>}
      </label>
      {renderField?.({ ...fieldProps, error, ref, name }) || (
        <input
          id={name}
          name={name}
          className={classNames('form-control', {
            'input-error': !!error,
          })}
          {...fieldProps}
          ref={ref}
        />
      )}
      <p className="form-error" style={{ minHeight: '23px' }}>
        {error || ''}
      </p>
    </div>
  );
};

export default forwardRef(FormField);
