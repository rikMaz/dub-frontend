import React, {useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import UploadContext from "../../tech/context/UploadContext";
import Fab from '@mui/material/Fab';
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";


export default function CameraButton() {
  let navigate = useNavigate();
  const {setDevices} = useContext(UploadContext);

  const handleDevices = React.useCallback(
    mediaDevices =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices)
    // eslint-disable-next-line
  },[])

  return (
    <>
      <Fab sx={{
        color: 'black',
        background: 'white',
        height: 120,
        width: 120,
      }} aria-label="photoCameraIcon" onClick={() => navigate("/camera")}>
        <PhotoCameraIcon sx={{
          color: "black",
          height: 50,
          width: 50
        }}/>
      </Fab>
    </>
  )
}