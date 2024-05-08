import clsx from 'clsx';
import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { Textarea } from '@chakra-ui/react';

type TextAreaFieldProps = FieldWrapperPassThroughProps & {
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export const TextAreaField = ({ label, className, registration, error }: TextAreaFieldProps) => {
  return (
    <FieldWrapper label={label} error={error}>
      <Textarea
        {...registration}
      />
    </FieldWrapper>
  );
};