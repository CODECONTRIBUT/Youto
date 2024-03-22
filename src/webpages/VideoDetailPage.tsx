import { useParams } from "react-router-dom"
import useVideo from "../hooks/useVideo"
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import VideoAttributes from "../components/VideoAttributes";


const VideoDetailPage = () => {
    const {slug} = useParams();
    const {data, error, isLoading } = useVideo(slug!);

    if (isLoading) return <Spinner />;
    if (error || !data) throw error;

    return (
        <>
            <Heading>{data.name}</Heading>
            <ExpandableText>{data.description}</ExpandableText>
            <VideoAttributes video={data}/>
        </>
    )
}

export default VideoDetailPage