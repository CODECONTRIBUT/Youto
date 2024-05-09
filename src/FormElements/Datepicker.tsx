import { Controller, UseFormRegisterReturn } from "react-hook-form";
import { FieldWrapperPassThroughProps } from "./FieldWrapper";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SlCalender } from "react-icons/sl";
import "../css/datapicker.css"
import "../css/fieldwrapper.css"

type DatepickerFieldProps = FieldWrapperPassThroughProps & {
    className?: string;
    control: any;
    fieldName: string;
    placeholder: string;
  };

const DatepickerField = ({label, control, fieldName, placeholder, error, className}: DatepickerFieldProps) => {
  return (
    <Controller
        control={control}
        name={fieldName}
        render={({field: {onChange, value, name, ref}}) => (
          <div className='field-wrapper'>
            {label}
            <DatePicker 
                        className="datepicker" 
                        dateFormat="dd/MM/yyyy"        
                        showIcon
                        icon={<SlCalender />}
                        isClearable
                        shouldCloseOnSelect = {true}  //do not put datapicker wrapped into a label, otherwise not work this line
                        closeOnScroll={true}
                        placeholderText = {placeholder}
                        maxDate={new Date()}
                        name={name}
                        ref ={ref}
                        dropdownMode="select"                                           
                        //do not add {...registration} inside as it has conflicts with Controller and returns undefined value!!!!!
                        //Just for React Datepicker. For React Select, extra register is all good.
                        selected={value}
                        onChange={onChange}
              />
        </div>
        )}
    />
)}

export default DatepickerField