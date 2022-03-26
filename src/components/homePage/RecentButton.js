import React from "react";
import styled from "styled-components/macro";


import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import FindInPageIcon from "@mui/icons-material/FindInPage";

const useStyles = makeStyles(() => ({
  icon: {
    color: 'white',
  },
  text: {
    color: 'white',
    fontFamily: "Futura",
    fontStyle: 'normal',
    textTransform: "none",
  }
}));

export default function RecentButton() {
  const classes = useStyles();

  return (
    <IconButton aria-label="account">
      <AccountButtonStyled>
        <FindInPageIcon className={classes.icon}/>
        <Typography className={classes.text}>Recent</Typography>
      </AccountButtonStyled>
    </IconButton>
  )
}

const AccountButtonStyled = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-items: center;
  padding: 5px;
`;