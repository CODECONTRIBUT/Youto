import { Button, Spinner } from "@chakra-ui/react";
import { Form } from "../FormElements/Form";
import { InputField } from "../FormElements/InputField";
import { SelectField } from "../FormElements/SelectField";
import { TextAreaField } from "../FormElements/TextareaField";
import usePlatforms from "../hooks/usePlatforms";
import { BiChevronUpCircle } from "react-icons/bi";
import { z } from "zod";
import useVideo from "../hooks/useVideo";
import { useParams } from "react-router-dom";
import useUpdateVideo, { UpdateVideoDTO } from "../hooks/useUpdateVideo";

const schema = z.object({
  name: z.string().min(1, {message: 'Name must be at least 1 character'}),
  description: z.string().min(1, {message: 'Name must be at least 1 character'}),
  parentPlatforms: z.array(z.object({
                              id: z.number(),
                              name: z.string().min(1, {message: "required"}),
                              slug: z.string().min(1, {message: 'required'})
                            }))
                      .nonempty({message: 'please choose at least one platform'})
});
  
  const VideoForm = () => {
    const {id} = useParams();
    const videoId= parseInt(id!);
    const {data: video, error, isLoading} = useVideo(videoId);
    const {data: platforms, error: platformError, isLoading: isLoadingPlatforms} = usePlatforms();

    const updateVideoMutation = useUpdateVideo();

    if (isLoading|| isLoadingPlatforms) return <Spinner />;
    if (error || platformError || !video || !platforms) throw error;

    return (
      <Form<UpdateVideoDTO['data'], typeof schema>  
        onSubmit={async (values) => {
          await updateVideoMutation.mutateAsync({ videoId, data: values });
        }}
        id="videoform"
        options={{
          defaultValues: {
            name: video.name,
            description: video.description,
            parentPlatforms: video.parentPlatforms
          }
        }}
      >
        {({ register, formState: {errors, isValid}}) => (
          <>
            <InputField
              label="Name"
              error={errors['name']}
              registration={register('name')}
            />
            <TextAreaField
              label="Description"
              error={errors['description']}
              registration={register('description')}
            />
            <SelectField
              label="Platforms"
              error={errors.parentPlatforms && errors.parentPlatforms[0]?.id}
              registration={register('parentPlatforms')}
              options={platforms.results.map((platform) => ({
                label: platform.name,
                value: platform.id,
              }))}
            />
            <div>
                <Button width='30%' isDisabled={!isValid} leftIcon={<BiChevronUpCircle />} 
                colorScheme='teal' fontWeight='bold' marginLeft={1} marginTop='25px' type='submit' 
                variant='solid'>Submit</Button>
            </div>
          </>
        )}
      </Form>
    );
  };