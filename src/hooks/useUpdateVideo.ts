import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Video } from "../entities/Video";
import { queryClient } from "../services/queryClient";
import Swal from "sweetalert2";

export type UpdateVideoDTO = {
    videoId: number;
    data: Video;
  };

  const apiClient = new APIClient<Video>('/products');

const useUpdateVideo = () => {

  return useMutation({
    mutationFn: ({videoId, data}: UpdateVideoDTO) => apiClient.update(videoId, data),
    //Optimistic update, update cache
    onMutate: async ({videoId, data}: UpdateVideoDTO) => {
      await queryClient.cancelQueries(['games', videoId]);
      const previousVideo = queryClient.getQueryData<Video>(['games', videoId]);

      queryClient.setQueryData(['games', videoId], {
        ...previousVideo,
        ...data,
        id: videoId,
      });

      return { previousVideo };
    },
    onError: (error: Error, __, context: any) => {
      if (context?.previousVideo) {
        queryClient.setQueryData(
          ['games', context.previousVideo.id],
          context.previousVideo,
        );
      }
      Swal.fire({
        text: "Updated failed",
        icon: "error",
        customClass: 'swal-wide'
      });
    },
    onSuccess: (saveddata: Video) => {
        queryClient.refetchQueries({
          queryKey: ['games', saveddata.id],
          type: 'active',
          exact: true,
        });
        Swal.fire({
          text: "Updated successfully",
          icon: "success",
          customClass: 'swal-wide'
        });
    }  
});
};

export default useUpdateVideo