import styled from 'styled-components';

export const BaseContainer = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    /* background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%); */
    .header{
        font-size: 1.2em;
        position: center; 
    }
    .content{
        display: flex;
        flex-direction: column; 
        background-color: #040404;
        box-shadow: 0px 0px 12px 2px rgba(15, 15, 15, 0.2);
        padding: 15px;
        margin-top: 3%;      
        color: white; 
        border-radius: 10px;
        .image{
            width: 21em;
            margin-top: 0;
            display: flex;
            justify-content: center;
            img{
                width: 12vw;
                height: 40vh;
            }
        }
    }
    
    .form{
        margin-top: 2em;
        display:flex;
        flex-direction: column;        
        .form-group{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: fit-content;
            label{
                font-size: 1em;
            }
            input{
                margin-top: 6px;
                min-width: 18em;
                height: 37px;
                padding: 0px 10px;
                font-size: 1em;  
                font-family: "Open Sans", sans-serif;
                background-color: #f3f3f3;
                border: 0;
                border-radius: 4px;
                margin-bottom: 20px;
                transition: all 250ms ease-in-out;
                &:hover{
                    background-color: #ffffff;
                    box-shadow: 0px 0px 14px 0.3px #0e81ce96;
                }
                &:focus{
                    outline: none;
                }
            }        
        }
    
    }
    .header-music{
        font-size: 1.2em;
        margin-top: 6em;
        color: white;
        width: 50%;
    }
    .content-music{
        display: flex;
        flex-direction: row; 
        box-shadow: 0px 0px 12px 2px rgba(15, 15, 15, 0.2);      
        width: 100%;
        height: 100%;
        .image{
            width: 21em;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .form-create-music{
        margin-top: 2em;
        margin-left: 5em;
        display:flex;
        flex-direction: column;
        color: white;
        .form-group{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: fit-content;
            p{
                font-size: 1em;   
                margin: 3px 0px;             
            }
            input{
                margin-top: 3px;
                min-width: 18em;
                height: 37px;
                padding: 0px 10px;
                font-size: 1em;  
                font-family: "Open Sans", sans-serif;
                background-color: #A6A6A6;
                border: 0;
                border-radius: 4px;
                margin-bottom: 20px;
                transition: all 150ms ease-in-out;
                &:hover{
                    background-color:#D9D9D9;
                    box-shadow: 0px 0px 7px 0.3px #F29CD5;
                }
                &:focus{
                    outline: none;
                }
            }        
        }
    
    }
    .footer{
        display: flex;
        flex-direction: column;
        margin-top: 1.2em;
        margin-bottom: 1.2em;
        .btn-login-signup{
        margin: auto !important;
            }
        
        #link{
            color: white;
            font-weight: 400;
            opacity: 0.8;
            margin: auto;
            font-size: 0.9em;
            padding: 5px;
        }
    }
   
`