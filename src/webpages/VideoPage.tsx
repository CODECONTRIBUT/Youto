import { Button, GridItem, SimpleGrid, Spinner } from "@chakra-ui/react";
import { Form } from "../FormElements/Form";
import { InputField } from "../FormElements/InputField";
import { MultiselectField } from "../FormElements/SelectField";
import { TextAreaField } from "../FormElements/TextareaField";
import usePlatforms from "../hooks/usePlatforms";
import { BiChevronUpCircle } from "react-icons/bi";
import { z } from "zod";
import useVideo from "../hooks/useVideo";
import { useParams } from "react-router-dom";
import useUpdateVideo, { UpdateVideoDTO } from "../hooks/useUpdateVideo";
import SingleSelectField from "../FormElements/SingleSelectField";
import useGenres from "../hooks/useGenres";
import DatepickerField from "../FormElements/Datepicker";
import LikeButtonField from "../FormElements/LikeButton";
import BadgeField from "../FormElements/BadgeField";

const schema = z.object({
  name: z.string().min(1, {message: 'Name must be at least 1 character'}),
  description: z.string().min(1, {message: 'Description must be at least 1 character'}),
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
    const {data: genres, error: genereError, isLoading: isLoadingGenres} = useGenres();

    const updateVideoMutation = useUpdateVideo();

    if (isLoading|| isLoadingPlatforms || isLoadingGenres) return <Spinner />;
    if (error || platformError || genereError || !video || !platforms || !genres) throw error;

    return (
      <Form<UpdateVideoDTO['data'], typeof schema>  
        onSubmit={async (values) => {
          await updateVideoMutation.mutateAsync({ videoId, data: values });
        }}
        id="videoform"
        options={{
          defaultValues: {
            name: video.name,
            slug: video.slug,
            description: video.description,
            releasedDatetime: video.releasedDatetime,
            rating_Top: video.rating_Top
          }
        }}
      >
        {({ register, control, setValue, formState: {errors, isValid}}) => (
          <>
            <SimpleGrid columns={{base: 1, md: 2}} spacing={5}>
              <GridItem>
                <InputField
                  label="Name"
                  error={errors['name']}
                  registration={register('name')}
                />
                <InputField
                  label="Slug"
                  error={errors['slug']}
                  registration={register('slug')}
                />
                <SingleSelectField
                  label="Genre"
                  error={errors['genreId']}
                  registration={register('genreId')}
                  selectOptions={genres.results.map((genre) => ({
                        value: genre.id,
                        label: genre.name
                      }))}
                  control = {control}
                  fieldName = "genreId"
                  placeholder="Select a Genre"
                  defaultValue={{value: video.id, label: genres.results.find(g => g.id=== video.genreId)?.name}}
                /> 
                <MultiselectField
                  label="Platforms"
                  error={errors.parentPlatforms && errors.parentPlatforms[0]?.id}
                  registration={register('parentPlatforms')}
                  multiOptions={platforms.results.map((platform) => ({
                        value: platform,
                        label: platform.name
                      }))}
                  control = {control}
                  fieldName = "parentPlatforms"
                  placeholder="Select platforms"
                  defaultValues={video.parentPlatforms.map(platform => ({
                    value: platform,
                    label: platform.name
                  }))}
                  />  
                <SimpleGrid columns={3} spacing={3}> 
                  <GridItem>
                  <DatepickerField
                    label="Released Date:"
                    error={errors['releasedDatetime']}
                    control = {control}
                    fieldName = "releasedDatetime"
                    placeholder="Select released date"
                  />           
                  </GridItem>
                  <GridItem>
                      <LikeButtonField
                        label="MetaCritic:"
                        error={errors['metaCritic']}
                        onChangeLikes={(likes) => {
                          setValue('rating_Top', likes > 90 ? 5 : 
                                                  likes > 80 ? 4 : 
                                                  likes> 60 ? 3: 2, {
                          shouldValidate: true,
                          shouldDirty: true
                        });
                        }}
                        registration={register('metaCritic')}
                        defaultValue={video.metaCritic}
                      />
                  </GridItem>
                  <GridItem>
                    <BadgeField
                        label="Rate:"
                        error={errors['rating_Top']}
                        registration={register('rating_Top')}
                     />
                  </GridItem>
                </SimpleGrid>
                <TextAreaField
                  label="Description"
                  error={errors['description']}
                  registration={register('description')}
                />
                <div>
                    <Button width='30%' isDisabled={!isValid} leftIcon={<BiChevronUpCircle />} 
                    isLoading = {updateVideoMutation.isLoading}
                    colorScheme='teal' fontWeight='bold' marginLeft={1} marginTop='25px' type='submit' 
                    variant='solid'>Submit</Button>
                </div>
              </GridItem>
              <GridItem>
              </GridItem>
            </SimpleGrid>
          </>
        )}
      </Form>
    );
  };

  export default VideoForm;