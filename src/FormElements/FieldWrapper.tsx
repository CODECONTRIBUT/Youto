import clsx from 'clsx';
import * as React from 'react';
import { FieldError } from 'react-hook-form';
import '../css/fieldwrapper.css' 
import TooltipField  from "../FormElements/Tooltip";

interface FieldWrapperProps {
  label?: string;
  className?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
  description?: string;
  hasTip?: boolean;
  tipLabel?: string;
};

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, 'className' | 'children'>;

export const FieldWrapper = ({label, className, error, children, hasTip = false, tipLabel}: FieldWrapperProps) => {
  return (
    <div className='field-wrapper'>
      <label className={clsx('block text-sm font-medium text-gray-700', className)}>
        <div className='label-div'>
          {label}{hasTip && <TooltipField tipLabel={tipLabel} />}
        </div>
        <div className="mt-1">{children}</div>
      </label>
      {error?.message && (
        <div role="alert" aria-label={error.message} className='alert'>
          {error.message}
        </div>
      )}
    </div>
  );
};