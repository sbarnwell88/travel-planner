import styled from 'styled-components';

export const PicComponent = styled.div`
    background-image: url('http://i.imgur.com/RMMc5ZD.jpg?1');
    background-repeat: no-repeat;
    height: 1000px;
    .navbar {
        display: block;
        background: black;
        padding: 20px;
        display: flex;
        justify-content: space-around;
        a {
            color: white;
            font-weight: bold;
            font-family: 'Prompt', sans-serif;
            font-size: 20px;
        }
    }
`;

export const ActivityComponent = styled.div`
    color: black;
    font-family: 'Prompt', sans-serif;
    font-weight: bold;
    font-size: 20px;
    button {
        background-color: black;
        border-color: black;
        color: white;
        font-weight: bold;
        padding: 5px;
        font-size: 15px;
        margin: 10px;
        a {
            color: white;
            font-size: 15px;
        }
    }
`;

export const Row = styled.div`
width:90%;
margin:auto
`;

export const FormComponent = styled.div`
    padding: 30px;
    margin: 20px;
    font-family: 'Prompt', sans-serif;
    font-size: 30px;
    input {
        
    }

`;
