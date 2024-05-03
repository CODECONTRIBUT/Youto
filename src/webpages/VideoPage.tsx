import { Button, Spinner } from "@chakra-ui/react";
import { Form } from "../FormElements/Form";
import { InputField } from "../FormElements/InputField";
import { SelectField } from "../FormElements/SelectField";
import { TextAreaField } from "../FormElements/TextareaField";
import usePlatforms from "../hooks/usePlatforms";
import { BiChevronUpCircle } from "react-icons/bi";

type FormValues = {
    name: string;
    description: string;
    platforms: string;
  };
  
  const VideoForm = () => {
    const {data, error, isLoading} = usePlatforms();
    if (isLoading) return <Spinner />;
    if (error || !data) throw error;

    return (
      <Form<FormValues>
        onSubmit={async (values: FormValues) =>{
            console.log(values);
        }}
        
        id="videoform"
      >
        {({ register, formState }) => (
          <>
            <InputField
              label="Name"
              error={formState.errors['name']}
              registration={register('name')}
            />
            <TextAreaField
              label="Description"
              error={formState.errors['description']}
              registration={register('description')}
            />
            <SelectField
              label="Platforms"
              error={formState.errors['platforms']}
              registration={register('platforms')}
              options={data.results.map((platform) => ({
                label: platform.name,
                value: platform.id,
              }))}
            />
            <div>
                <Button width='30%' isDisabled={!formState.isValid} leftIcon={<BiChevronUpCircle />} 
                colorScheme='teal' fontWeight='bold' marginLeft={1} marginTop='25px' type='submit' 
                variant='solid'>Submit</Button>
            </div>
          </>
        )}
      </Form>
    );
  };