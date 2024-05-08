import { Controller, UseFormRegisterReturn } from 'react-hook-form';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import Select from 'react-select';
import '../css/select.css'

type Option = {
   value: any,
   label: string
};

type SelectFieldProps = FieldWrapperPassThroughProps & {
  multiOptions: Option[];
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
  defaultValues: Option[] | null;
  control: any;
  fieldName: string;
  placeholder: string;
};

export const MultiselectField= ({label, control, fieldName, placeholder, multiOptions, defaultValues, error, className, registration}: SelectFieldProps) => {
  return (
    <Controller
      control={control}
      name={fieldName}
      rules={{required: true}}
      render={({field: {onChange, value, name, ref}}) => (
        <FieldWrapper label={label} error={error}>
          <Select
            defaultValue={defaultValues}
            name={name}
            options={multiOptions}
            isMulti={true}
            {...registration}
            ref = {ref}
            className="basic-multi-select multi-select"
            classNamePrefix="select"
            isSearchable = {true}
            placeholder={placeholder}
            value={multiOptions.find((c) => c.value === value)}
            onChange={e => onChange(e.map((c: any) => c.value))}
            />
        </FieldWrapper>
      )}
    />
  );
};