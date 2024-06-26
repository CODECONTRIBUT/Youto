import { Controller, UseFormRegisterReturn } from 'react-hook-form';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import Select from 'react-select';
import '../css/select.css'
import "../css/fieldwrapper.css"

type Option = {
   value: any,
   label: string
};

type SelectFieldProps = FieldWrapperPassThroughProps & {
  multiOptions: Option[];
  className?: string;
  defaultValues: Option[] | undefined;
  control: any;
  fieldName: string;
  placeholder: string;
};

export const MultiselectField= ({label, control, fieldName, placeholder, multiOptions, defaultValues}: SelectFieldProps) => {
  return (
    <Controller
      control={control}
      name={fieldName}
      render={({field: {onChange, value, name, ref}, fieldState: {error}}) => (
        <FieldWrapper label={label} error={error}>
          <Select              
            defaultValue={defaultValues && multiOptions.filter((e) => defaultValues.find(o => o.label === e.label))}  
            name={name}
            options={multiOptions}
            isMulti
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