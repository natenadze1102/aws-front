import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';
import { Alert, Snackbar } from '@mui/material';
import { getAuthToken } from '~/utils/auth';

type CSVFileImportProps = {
  url: string;
  title: string;
};

export default function CSVFileImport({ url, title }: CSVFileImportProps) {
  const [file, setFile] = React.useState<File>();
  const [error, setError] = React.useState<string | null>(null);
  const [open, setOpen] = React.useState(false);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFile(file);
    }
  };

  const removeFile = () => {
    setFile(undefined);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const uploadFile = async () => {
    console.log('uploadFile to', url);

    // Get the authorization token from localStorage
    const authorization_token = getAuthToken();
    console.log(authorization_token);

    try {
      // Get the presigned URL
      const response = await axios({
        method: 'GET',
        url,
        params: {
          name: encodeURIComponent(file?.name || ''),
        },
        headers: authorization_token
          ? {
              Authorization: `Basic ${authorization_token}`,
            }
          : undefined,
      });

      console.log('File to upload: ', file?.name);
      console.log('Uploading to: ', response.data);

      const result = await fetch(response.data, {
        method: 'PUT',
        body: file,
      });

      console.log('Result: ', result);
      setFile(undefined);
    } catch (err) {
      console.error('Error during file upload:', err);
      if (axios.isAxiosError(err)) {
        if (err.response) {
          // Server responded with an error status
          if (err.response.status === 401) {
            setError(
              'Authorization required. Please provide valid credentials.'
            );
          } else if (err.response.status === 403) {
            setError(
              'Access denied. You do not have permission to import files'
            );
          } else {
            console.log(err);
            setError(`Upload failed`);
          }
        } else if (err.request) {
          // No response was received - likely CORS or network issue
          setError(
            'No response received from server. This might be a CORS issue or the server is down.'
          );
        } else {
          // Something happened in setting up the request
          setError(`Error setting up request: ${err.message}`);
        }
      } else {
        setError(`Unexpected error: ${String(err)}`);
      }
      setOpen(true);
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {!file ? (
        <input type="file" onChange={onFileChange} />
      ) : (
        <div>
          <button onClick={removeFile}>Remove file</button>
          <button onClick={uploadFile}>Upload file</button>
        </div>
      )}

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
}
