import React from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components/macro";

import Fab from '@mui/material/Fab';
import { makeStyles } from '@mui/styles';
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles(() => ({
  button: {
    color: 'black',
    background: 'white',
    height: 50,
    width: 50,
  },
}));

export default function ImageUploadButton() {
  const classes = useStyles();
  const history = useNavigate();

  return (
    <ComponentLayout>
      <Fab className={classes.button} aria-label="searchIcon" onClick={() => history.push("/search")}>
        <SearchIcon />
      </Fab>
    </ComponentLayout>
  )
}

const ComponentLayout = styled.div`
  display: grid;
  justify-content: center;
  padding-top: 20px;
`;