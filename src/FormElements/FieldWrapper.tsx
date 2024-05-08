import clsx from 'clsx';
import * as React from 'react';
import { FieldError } from 'react-hook-form';
import '../css/fieldwrapper.css' 

interface FieldWrapperProps {
  label?: string;
  className?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
  description?: string;
};

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, 'className' | 'children'>;

export const FieldWrapper = ({label, className, error, children}: FieldWrapperProps) => {
  return (
    <div className='field-wrapper'>
      <label className={clsx('block text-sm font-medium text-gray-700', className)}>
        {label}
        <div className="mt-1">{children}</div>
      </label>
      {error?.message && (
        <div role="alert" aria-label={error.message} className="text-sm font-semibold text-red-500">
          {error.message}
        </div>
      )}
    </div>
  );
};