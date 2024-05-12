import { useMutation, MutateOptions } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Video } from "../entities/Video";
import { useNavigate } from "react-router-dom";

export type UpdateVideoDTO = {
    videoId: number;
    data: Video;
  };

  const apiClient = new APIClient<Video>('/products');

const useUpdateVideo = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: ({videoId, data}: UpdateVideoDTO) => apiClient.update(videoId, data),
    //onMutate:
    onSuccess: (saveddata: Video) => {
        navigate(`/products/${saveddata.id}`);
    }  
    //onError:
});
};

export default useUpdateVideo