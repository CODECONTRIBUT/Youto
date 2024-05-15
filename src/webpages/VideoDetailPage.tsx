import { useParams } from "react-router-dom"
import useVideo from "../hooks/useVideo"
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import VideoAttributes from "../components/VideoAttributes";
import VideoTrailer from "../components/VideoTrailer";
import VideoScreenshots from "../components/VideoScreenshots";
import VideoPage from "./VideoPage";


const VideoDetailPage = () => {
    const {id} = useParams();
    const {data, error, isLoading } = useVideo(parseInt(id!));

    if (isLoading) return <Spinner />;
    if (error || !data) throw error;

    return (
        <SimpleGrid columns={{base: 1, md: 2}} spacing={5}>
            <GridItem>
                <VideoPage />             
            </GridItem>
            <GridItem>
                <VideoTrailer videoId={data.id} />
                <VideoScreenshots screenshots={data.screenshots}/>
            </GridItem>
        </SimpleGrid>
    )
}

export default VideoDetailPage