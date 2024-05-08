import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import Select, { MultiValue } from 'react-select';
import { useState } from 'react';
import '../css/select.css'

type Option = {
   value: number,
   label: string
};

type SelectFieldProps = FieldWrapperPassThroughProps & {
  multiOptions: Option[];
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
  defaultValues: Option[] | null;
};

export const MultiselectField= ({label, multiOptions, defaultValues, error, className, registration}: SelectFieldProps) => {
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<Option> | null>(defaultValues);

  return (
    <FieldWrapper label={label} error={error}>
      <Select
        defaultValue={selectedOptions}
        options={multiOptions}
        isMulti
        {...registration}
        className="basic-multi-select multi-select"
        classNamePrefix="select"
        isSearchable = {true}
        placeholder="Select platforms"
        onChange={setSelectedOptions}
        />
    </FieldWrapper>
  );
};