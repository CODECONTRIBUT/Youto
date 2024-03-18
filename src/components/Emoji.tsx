import { Image, ImageProps } from '@chakra-ui/react';
import meh from '../assets/emoji-meh.svg';
import thumbsUp from '../assets/emoji-meh.svg';
import bullsEye from '../assets/emoji-meh.svg';

interface Props{
    rating: number
}

const Emoji = ({rating}: Props) => {
    if (rating < 3) return null;
    const emojiMap : {[key: number]: ImageProps} = {
        3: {src: meh, alt: 'meh', boxSize:'20px'},
        4: {src: thumbsUp, alt: 'recommended', boxSize:'20px'},
        5: {src: bullsEye, alt: "exceptional", boxSize:'20px'}
    };

    return (
        <Image {...emojiMap[rating]} boxSize='20px' marginTop={1}/>
    )
}

export default Emoji