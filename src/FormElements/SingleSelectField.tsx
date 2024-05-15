import { Controller, UseFormRegisterReturn } from 'react-hook-form';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import Select from 'react-select';
import '../css/select.css'

type Option = {
   value: any,
   label: string | undefined
};

type SelectFieldProps = FieldWrapperPassThroughProps & {
  selectOptions: Option[];
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
  defaultValue: Option | undefined;
  control: any;
  fieldName: string;
  placeholder: string;
};

const SingleSelectField = ({label, control, fieldName, placeholder, selectOptions, defaultValue, error, className, registration}: SelectFieldProps) => {
  return (
    <Controller
    control={control}
    name={fieldName}
    render={({field: {onChange, value, name, ref}}) => (
      <FieldWrapper label={label} error={error}>
        <Select
          defaultValue={defaultValue && selectOptions.find((c) => c.value === defaultValue)}
          name={name}
          options={selectOptions}
          {...registration}
          ref = {ref}
          className="basic-single single-select"
          classNamePrefix="select"
          isSearchable = {true}
          placeholder={placeholder}
          value={selectOptions.find((c) => c.value === value)}
          onChange={val => onChange(val?.value)}
          />
      </FieldWrapper>
    )}
  />
  )
}

export default SingleSelectField