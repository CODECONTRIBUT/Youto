import React, { FormEvent, useState } from 'react'

const FileUploaderField = () => {
    const [uploadedfile, setUploadedFile] = useState<File | null>(null);

    const handleChange= (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setUploadedFile(e.target.files[0]);
          }
    }

    const handleUpload = async () => {
        if (uploadedfile) {
            console.log("Uploading file...");
        
            const formData = new FormData();
            formData.append("file", uploadedfile);
        
            try {
              // file upload to backend
              const result = await fetch("", {
                method: "POST",
                body: formData,
              });
        
              const data = await result.json();
        
              console.log(data);
            } catch (error) {
              console.error(error);
            }
          }
    
      }

  return (
    <>
      <div>
        <label htmlFor="file" className="sr-only">
          Choose a file
        </label>
        <input id="file" type="file" onChange={handleChange} />
      </div>
      {uploadedfile && (
        <section>
          File details:
          <ul>
            <li>Name: {uploadedfile.name}</li>
            <li>Type: {uploadedfile.type}</li>
            <li>Size: {uploadedfile.size} bytes</li>
          </ul>
        </section>
      )}

      {uploadedfile && <button onClick={handleUpload}>Upload a file</button>}
    </>
  )
}

export default FileUploaderField