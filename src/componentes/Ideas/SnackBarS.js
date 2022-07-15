import React from 'react';
import Button from '@mui/material/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('This is a success message!', { variant });
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickVariant('success')}>Show success snackbar</Button>
    </React.Fragment>
  );
}

export default function SnackbarSuccesProfile() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}
