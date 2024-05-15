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
            readOnly
            className='badge'               
            {...registration}                    
        /> 
        <label style={{fontSize: 12, color:'green', fontStyle: 'italic'}}> changed by likes</label>
    </FieldWrapper>
  )
}

export default BadgeField