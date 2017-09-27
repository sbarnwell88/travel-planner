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
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 30%;
    margin: 10px;
    display: flex;
flex-wrap: wrap;
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
    @media screen and (max-width: 766px) {
        width: 70%;
    }
    @media screen and (min-width: 767px) and (max-width: 1200px) {
        width: 50%;
    }
    @media screen and (min-width: 767px) and (max-width: 1200px) and (orientation : landscape) {
        width: 40%;
    }
`;

export const Row = styled.div`
width:90%;
margin:auto;
justify-content: center;
display: flex;
@media screen and (max-width: 766px) {
    display: flex;
    justify-content: center;
}
`;

export const FormComponent = styled.div`
    padding: 30px;
    margin: 20px;
    font-family: 'Prompt', sans-serif;
    font-size: 30px;
    font-weight: bold;
    input {
        width: 200px;
        height: 25px;
    }
    button {
        background-color: black;
        border-color: black;
        color: white;
        font-weight: bold;
        padding: 5px;
        font-size: 15px;
        margin: 10px;
    }
    input[type=submit] {
        background-color: black;
        border-color: black;
        color: white;
        font-weight: bold;
        padding: 5px;
        font-size: 15px;
        margin: 10px;
        height: 30px;
    }
`;


