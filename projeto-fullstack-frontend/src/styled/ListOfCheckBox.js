import styled from "styled-components";

export const ListOfCheckbox = styled.div`
    display: flex;
    flex-direction: column;
    color: white;    
    margin: 1.3em 2em;
    margin-bottom: 1em;
    .list{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        color: white;
        height: 30%;
        div{
        display: flex;
        flex-direction: row;
            input{
            align-self: center;
            margin: 12px;
        }}
       
    }
    .text{
        margin-bottom: 10px;
        width: 300px;
    }
   
`