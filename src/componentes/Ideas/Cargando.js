import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Cargando = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}    
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
export default Cargando