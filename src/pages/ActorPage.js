import React from 'react';
import {useNavigate} from "react-router-dom";

import styled from 'styled-components/macro';
import useActor from "../tech/hooks/useActor";
import InfoList from "../components/detailsPage/InfoList";
import HeaderDetailsPage from "../components/detailsPage/HeaderDetailsPage";
import ImageList from "../components/detailsPage/ImageList";


export default function ActorPage() {
  const history = useNavigate();
  const [actor] = useActor();

  return (
    <PageLayout>

      <HeaderDetailsPage item={actor}/>

      <MainStyled>

        <ImageWrapper>
          <ImgStyled alt="actorImage" src={actor?.image} height="525px" width="350px"/>
          {actor?.voiceActors.length > 0 &&
          <div>
              <ImgVoiceActorStyled alt="VoiceActorImage" src={actor?.voiceActors[0].image} onClick={onImageClick} height="160px" width="114px"/>
              <NameVoiceActorStyled>Voice Actor</NameVoiceActorStyled>
          </div>
          }
        </ImageWrapper>

        <InfoList item={actor}/>

        <ImageList item={actor?.movies} type={actor?.movies[0].type}/>

      </MainStyled>

    </PageLayout>
  )

  function onImageClick() {
    history.push(`/details/voiceactor/${actor?.voiceActors[0].id}`);
  }

}

const PageLayout = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr;
  height: 100vh;
`;

const MainStyled = styled.div`
  display: grid;
  grid-template-rows: min-content min-content 1fr;
  justify-items: center;
  align-items: center;
`;

const ImgStyled = styled.img`
  border-radius: 10px;
`;

const ImgVoiceActorStyled = styled.img`
  border: 2px solid white;
  border-radius: 10px;
  position: absolute;
  top: 365px;
  left: 225px;
`;

const ImageWrapper = styled.div`
  padding-top: 10px;
  position: relative;
`;

const NameVoiceActorStyled = styled.div`
  font-size: 0.5em;
  padding: 5px 36px 5px 36px;
  background: white;
  border-radius: 0px 0px 5px 5px;
  position: absolute;
  top: 505px;
  left: 227.5px;
  white-space: nowrap;
`;
