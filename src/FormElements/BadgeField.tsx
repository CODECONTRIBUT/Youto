import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import '../css/badge.css'

type BadgeFieldProps = FieldWrapperPassThroughProps & {

    className?: string;
    registration: Partial<UseFormRegisterReturn>;
  };

const BadgeField = ({label, error, registration}: BadgeFieldProps) => {
  return (
    <FieldWrapper label={label} error={error}>
        <input 
            disabled
            className='badge'               
            {...registration}                    
        /> 
    </FieldWrapper>
  )
}

export default BadgeField