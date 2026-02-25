import { useEffect, useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const Unsubscribe = () => {
  let URL = process.env.REACT_APP_URL;
  const [searchParams] = useSearchParams();

  const key1 = searchParams.get('key1');
  const key2 = searchParams.get('key2');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleUnsubscribe = async () => {
    try {
      const response = await axios.get(
        `${URL}newsletter/unsubscribe?key1=${key1}&key2=${key2}`,
        {
          headers: {
            'X-TenantID': 'public' // Replace with actual tenant ID
          }
        }
      );

      // console.log('Response Status:', response.status);

      if (response.data === 'Success') {
        setError(null);
        setSuccess(true);
      } else {
        setError('Unexpected response: ' + response.data);
      }
    } catch (err) {
      // console.error('Error Response:', err.response);

      setError(
        err.response?.data?.message ||
          'Unsubscribe failed. Please try again later.'
      );
    }
  };

  useEffect(() => {
    handleUnsubscribe();
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background:
          'linear-gradient(45deg, rgb(31, 190, 226) 0%, rgb(27, 222, 216) 45%, #42a5f5 55%, #1565c0 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2
      }}
    >
      <Paper
        elevation={3}
        sx={{
          maxWidth: 500,
          width: '100%',
          p: 6,
          borderRadius: 3,
          textAlign: 'center',
          backgroundColor: '#fff'
        }}
      >
        <Typography variant="h3" gutterBottom>
          {success
            ? 'You’ve been unsubscribed.'
            : error
              ? 'Oops!'
              : 'Processing...'}
        </Typography>

        {success && (
          <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
            {/* We&lsquo;re so sorry to <strong>lose</strong> you, but we totally
            understand. */}
            We&lsquo;re sad to see you go, but we respect your decision.
            <br />
            Changed your mind? You can always resubscribe!
          </Typography>
        )}

        {error && (
          <Typography variant="body1" color="error">
            {error}
            <br />
            Please check your email or try again later.
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default Unsubscribe;
