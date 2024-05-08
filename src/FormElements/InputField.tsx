import clsx from 'clsx';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { Input } from '@chakra-ui/react';

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: 'text' | 'email' | 'password';
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export const InputField = ({type = 'text', label, className, registration, error}: InputFieldProps) => {
  return (
    <FieldWrapper label={label} error={error}>
      <Input
        type={type}
        {...registration}
      />
    </FieldWrapper>
  );
};