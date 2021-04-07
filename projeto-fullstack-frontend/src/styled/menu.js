import styled from 'styled-components'

export const ContainerMenu = styled.div`
    background-color: #121212;
    height:100%;
    input{
        display: none;
        padding-top: 20px;
        
    }
    #check{
        &:checked ~ .barra{
            transform: translateX(-300px);
        }      
    }
    label{
        cursor: pointer;
        padding: 20px;
        padding-top: 30px;
        position: absolute;
        z-index: 1;
        &:hover{
            border-radius:30px;
            
        }
    }
    img{
        position: absolute;
        height: 80px;
        width: 12%;
        margin-left: 5%;
    }
`

export const Navbar = styled.div`    
    background-color: #040404 ;
    height:100%;      
    width: 300px;
    position: relative;
    transition: all 0.2s linear;   
`

export const Nav = styled.nav`
    width: 100%;
    position: absolute;
    top: 80px;
    height:100%;  
    .a{
        text-decoration:none;
    }
    .link{        
        background-color: #282828;
        padding: 20px;
        transition: all .2s linear;
        color: #f4f4f9;
        border-bottom: 2px solid #222; 
    &:hover{
        background-color: #00C4CC;
    }}
`
export const HeaderMenu = styled.div`
  background-color: #040404;   
  width: 100%;
  height: 80px;
  position: absolute;
`