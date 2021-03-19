import styled from "styled-components";

export const ContainerMenuAndRoutes = styled.div`
    display: flex;
    flex-direction: row;
    /* background-color: #121212; */
    background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);  
    
`
export const ContainerOfAllMusics = styled.div`
    display: flex;
    flex-flow: wrap;
    margin: 0;
`
export const ContainerMusic = styled.div`
    width: 22%;
    height: 25%;
    background: #282828;
    border-radius: 10px;
    margin: 0.8em;
    color: #D9D9D9;
    box-shadow: 0px 0px 12px 2px rgba(15, 15, 15, 0.2);      
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    img{
      border-radius: 10px;
    }
`
export const ContainerMusicDetails = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #080808;  
    padding: 10px 10px;
    border-radius: 10px;
    border: solid 3px white;
    margin: 5em 5em;
    height:100%;
    .music-infos{
      display: flex;
      flex-direction: column;
      margin: 1em 1em;
      color: white;
      p{
        margin: 5px 0px;
      }
      img{
        border-radius: 7px;
        margin-bottom: 1em;
        width: 200px;
        height: 200px;
      }
    }
    .video{
      display: flex;
      flex-direction: column;
    }
`
export const FirstButton = styled.button`
    width: 150px;
    height: 45px;
    cursor: pointer;
    background: #04BFBF;
    border: 1px solid #91C9FF;
    border-radius: 5px;
    outline: none;
    transition: 1s ease-in-out;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    &:hover {
      transition: 1s ease-in-out;
      background-color: #F241D5;
      font-weight: 800;
    }
    &:focus {
      stroke-dashoffset: -480;
    }   
    span {
    color: white;
    font-size: 18px;
    font-weight: 300;
    } 
    
    
    
`
export const ButtonSeeDetails = styled.button`
    position: absolute;
    margin-left: 15%;
`
export const ButtonPlay = styled.button`
    position: absolute;
    margin-left: 15%;
`
export const Header = styled.div`
  
  background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);   
  width: 100%;
  height: 80px;
`