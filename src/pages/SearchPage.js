import React, {useContext, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import SearchList from "../components/searchPage/SearchList";
import styled from "styled-components/macro";
import SearchContext from "../tech/context/SearchContext";


import {makeStyles} from "@mui/styles"; 
import withStyles from "@mui/styles/withStyles";
import Select from "@mui/material/Select";
import Fab from '@mui/material/Fab';
import MenuItem from "@mui/material/MenuItem";
import InputBase from "@mui/material/InputBase";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from "@mui/material/IconButton";
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import PersonIcon from '@mui/icons-material/Person';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from "@mui/icons-material/Home";

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 50,
    position: 'relative',
    backgroundColor: "white",
    fontSize: "16px",
    padding: '10px 26px 10px 12px',
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Futura',
    ].join(','),
    '&:focus': {
      borderRadius: 50,
      border: "none",
      backgroundColor: "white",
    },

  },
}))(InputBase);

const useStyles = makeStyles(() => ({
  button: {
    color: 'black',
    background: 'white',
    height: 43,
    width: 43,
  },
  icon: {
    color: 'black',
    height: 20,
    width: 20,
  },
  itemPadding: {
    paddingLeft: "6px",
    paddingRight: "6px",
  },
  iconButton: {
    padding: 0
  },
  formControl: {
    padding: 0
  }

}));

export default function SearchPage() {
  const classes = useStyles();
  const history = useNavigate();
  const {name,setName,searchType,setSearchType,setSearchItems,searchPlaceholder,setSearchPlaceholder,onSearch,onRefresh} = useContext(SearchContext);

  const handleChange = (event) => {
    setSearchType(event.target.value);
    switch (event.target.value) {
      case "movie":
        setSearchPlaceholder("movies...")
        break;
      case "actor":
        setSearchPlaceholder("actors...")
        break;
      case "voiceactor":
        setSearchPlaceholder("voice actors...")
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    onRefresh();
    // eslint-disable-next-line
  },[])


  return (

    <PageLayout>
      {searchType !== "crew" &&
        <HeaderStyled>

          <Fab className={classes.button} aria-label="goHome" onClick={goHome}>
            <ArrowBackIcon className={classes.icon}/>
          </Fab>

          <FormControl>
            <Select value={searchType} onChange={handleChange} input={<BootstrapInput/>}>
              <MenuItem value={"movie"}><LocalMoviesIcon className={classes.icon}/></MenuItem>
              <MenuItem value={"actor"}><PersonIcon className={classes.icon}/></MenuItem>
              <MenuItem value={"voiceactor"}><RecordVoiceOverIcon className={classes.icon}/></MenuItem>
            </Select>
          </FormControl>

          <SearchbarStyled>
            <Input name="name" value={name} type="text" placeholder={searchPlaceholder} onChange={event => setName(event.target.value)}/>
            <IconButton className={classes.iconButton} aria-label="clear" onClick={clear}>
              <ClearIcon className={classes.icon}/>
            </IconButton>
          </SearchbarStyled>

          <Fab className={classes.button} aria-label="searchIcon" onClick={onSearch}>
            <SearchIcon className={classes.icon}/>
          </Fab>

        </HeaderStyled>
      }
      {searchType === "crew" &&
        <HeaderCrewStyled>

          <Fab className={classes.button} aria-label="goBack" onClick={goBack}>
            <ArrowBackIcon className={classes.icon}/>
          </Fab>

          <NameStyled>{name}</NameStyled>

          <Fab className={classes.button} aria-label="goHome" onClick={goHome}>
            <HomeIcon className={classes.icon}/>
          </Fab>

        </HeaderCrewStyled>
      }

      <MainStyled>
        <SearchList/>
      </MainStyled>

    </PageLayout>)


  function goHome() {
    history.push("/");
    setName("");
    setSearchItems([]);
  }

 function clear() {
    setName("");
    setSearchItems([]);
  }

  function goBack() {
    history.goBack();
  }

}

const PageLayout = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr;
  height: 100vh;
`;

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
`;

const HeaderCrewStyled = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  justify-items: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`;

const MainStyled = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;

const Input = styled.input`
  font-size: 0.9em;
  border: none;
  width: 150px;
  border-radius: 50px;
  ::placeholder {
    color: black;
  }
`;

const SearchbarStyled = styled.div`
  display: flex;
  flex-direction: row;
  padding: 9px;
  background: white;
  height: 43px;
  border-radius: 50px;
`;

const NameStyled = styled.div`
  font-size: 1.4em;
  color: white;
`;