import useTrailer from '../hooks/useTrailer'

interface Props{
    videoId: number
}

const VideoTrailer = ({videoId}: Props) => {
    const {data, error, isLoading} = useTrailer(videoId);
    if (isLoading) return null;
    if (error) throw error;

    const first = data?.results[0];
    
    return first ? <video src={first.data[480]} poster={first?.preview} controls /> : null
}

export default VideoTrailer