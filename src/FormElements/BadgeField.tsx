import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import '../css/badge.css'
import TooltipField from './Tooltip';

type BadgeFieldProps = FieldWrapperPassThroughProps & {

    className?: string;
    registration: Partial<UseFormRegisterReturn>;
    hasTip?: boolean;
    tip?: string;
  };

const BadgeField = ({label, error, registration, hasTip, tip}: BadgeFieldProps) => {
  return (
    <FieldWrapper label={label} error={error} hasTip={hasTip} tipLabel={tip}>
        <input 
            readOnly
            className='badge'               
            {...registration}                    
        /> 
    </FieldWrapper>
  )
}

export default BadgeField