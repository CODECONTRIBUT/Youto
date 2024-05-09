import { Controller, UseFormRegisterReturn } from "react-hook-form";
import { FieldWrapperPassThroughProps } from "./FieldWrapper";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SlCalender } from "react-icons/sl";
import "../css/datapicker.css"
import "../css/fieldwrapper.css"

type DatepickerFieldProps = FieldWrapperPassThroughProps & {
    className?: string;
    registration: Partial<UseFormRegisterReturn>;
    control: any;
    fieldName: string;
    placeholder: string;
  };

const DatepickerField = ({label, control, fieldName, placeholder, error, className, registration}: DatepickerFieldProps) => {
  return (
    <Controller
        control={control}
        name={fieldName}
        rules={{required: false}}
        render={({field: {onChange, value, name, ref}}) => (
          <div className='field-wrapper'>
            {label}
            <DatePicker 
              className="datepicker"         
                        showIcon
                        icon={<SlCalender />}
                        isClearable
                        shouldCloseOnSelect = {true}  //do not put datapicker wrapped into a label, otherwise not work this line
                        closeOnScroll={true}
                        placeholderText = {placeholder}
                        maxDate={new Date()}
                        dropdownMode="select"
                        name = {name}
                        ref = {ref}
                        {...registration}
                        selected={value}
                        onChange={onChange}
                        value={value}
              />
        </div>
        )}
    />
)}

export default DatepickerField