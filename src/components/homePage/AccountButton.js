import React from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import {Grid} from "@mui/material";

export default function AccountButton() {

  return (
    <IconButton aria-label="account">
      <Grid>
        <AccountCircleIcon sx={{color: 'white'}}/>
        <Typography sx={{color: 'white',
          fontFamily: "Futura",
          fontStyle: 'normal',
          textTransform: "none",}}>Account</Typography>
      </Grid>
    </IconButton>
  )
}