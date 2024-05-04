import clsx from 'clsx';
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { Platform } from '../entities/Platform';

type Option = {
  label: string;
  value: number;
};

type SelectFieldProps = FieldWrapperPassThroughProps & {
  options: Option[];
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export const SelectField= ({label, options, error, className, registration}: SelectFieldProps) => {
  return (
    <FieldWrapper label={label} error={error}>
      <select
        multiple={true}
        className={clsx(
          'mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md',
          className
        )}
        {...registration}
      >
        {options.map(({ label, value }) => (
          <option key={label?.toString()} value={value}>
            {label}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
};