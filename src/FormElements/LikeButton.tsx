import { SlHeart } from "react-icons/sl";
import { ImHeart  } from "react-icons/im";
import { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import '../css/likebutton.css'
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

type LikeButtonFieldProps = FieldWrapperPassThroughProps &  {
    registration: Partial<UseFormRegisterReturn>;
    defaultValue: number;
    label: string;
    onChangeLikes: (likes: number) => void;
  };

const LikeButtonField = ({label, onChangeLikes, registration, defaultValue, error }: LikeButtonFieldProps) => {
    const [likes, setLikes] = useState(defaultValue);
    const [liked, setLiked] = useState(false);
    
  return (
    <FieldWrapper label={label} error={error}>
      <div className='likebutton-container'>
                {liked ? <ImHeart className={'like-button liked'}
                            onClick={() => {defaultValue < 100 && setLikes(likes - 1);
                                            setLiked(!liked);                                           
                                            onChangeLikes(likes - 1);
                                            }}                        
                            /> : <SlHeart className={'like-button'}
                            onClick={() => {defaultValue < 100 && setLikes(likes + 1);
                                            setLiked(!liked);
                                            onChangeLikes(likes + 1);
                                          }}                        
                                />
                }
                <input 
                    className={`likebutton-input ${likes > 90 ? 'high-score' : likes > 80 ? 'median-score' : ''}`} 
                    value={likes}                                     
                    {...registration} 
                    />               
      </div>
    </FieldWrapper>
  )
}

export default LikeButtonField