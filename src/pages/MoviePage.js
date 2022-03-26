import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import styled from 'styled-components/macro';
import useMovie from "../tech/hooks/useMovie";
import HeaderDetailsPage from "../components/detailsPage/HeaderDetailsPage";
import InfoList from "../components/detailsPage/InfoList";

import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import SearchContext from "../tech/context/SearchContext";

const useStyles = makeStyles(() => ({

  crewButton: {
    color: 'black',
    background: 'white',
    fontFamily: 'Futura',
    position: "absolute",
    top: "485px",
    left: "10px",
    borderRadius: 50,
    paddingLeft: "141px",
    paddingRight: "141px"
  }

}));

export default function MoviePage() {
  const history = useNavigate();
  const [movie] = useMovie();
  const {setName,getMovieCrew,setSearchType} = useContext(SearchContext);
  const classes = useStyles();

  return (
    <PageLayout>

      <HeaderDetailsPage item={movie}/>

      <MainStyled>

        <ImageWrapper>
          <ImgStyled alt="movieImage" src={movie?.image} height="525px" width="350px"/>
          <Button className={classes.crewButton} onClick={getCrew}>Crew</Button>
        </ImageWrapper>

        <InfoList item={movie}/>

      </MainStyled>
    </PageLayout>
  )

  function getCrew() {
    setSearchType("crew")
    setName(movie?.name)
    getMovieCrew(movie.id).then(() => history.push(`/search/crew/${movie.name}/${movie.id}`))
  }

}

const PageLayout = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr;
  height: 100vh;
`;

const MainStyled = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr;
  justify-items: center;
  align-items: center;
`;

const ImgStyled = styled.img`
  border-radius: 10px;
`;

const ImageWrapper = styled.div`
  padding-top: 10px;
  position: relative;
`;

