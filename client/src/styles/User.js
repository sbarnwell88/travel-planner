import styled from 'styled-components';

export const LoginUser = styled.div`
    background-image: url('http://www.publicdomainpictures.net/pictures/190000/velka/travel-background-1469438128PVK.jpg');
    font-size: 80px;
    height: 1000px;
    text-align: center;
    a {
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 100px;
        font-family: 'Rock Salt', cursive;
        font-weight: bold;
    }
`;

export const HomeStyle = styled.div`
    background-image: url('http://i.imgur.com/DLMOYdO.jpg?1');
    background-repeat: no-repeat;
    height: 900px;
    color: black;
    display: flex;
    justify-content: center;
    @media screen and (min-width: 767px) and (max-width: 1200px) {
        padding-bottom: 80px;
    }
`;

export const HomeComponents = styled.div`
color: white;
    h1 {
        font-family: 'Rock Salt', cursive;
        font-size: 80px;
    }
    h3 {
        font-size: 60px;
        font-family: 'Prompt', sans-serif;
    }
    p {
        font-size: 30px;
        font-family: 'Prompt', sans-serif;
        font-weight: bold;
    }
    a {
        font-size: 30px;
        font-family: 'Prompt', sans-serif;
        color: white;
        font-weight: bold;
    }
    @media screen and (min-width: 767px) and (max-width: 1200px) {
        h1 {
            font-size: 50px;
        }
        h3 {
            font-size: 30px;
        }
        p {
            font-size: 20px;
        }
        a {
            font-size: 20px;
        }
    }
    @media screen and (max-width: 766px) {
        h1 {
            font-size: 40px;
        }
        h3 {
            font-size: 30px;
        }
        p {
            font-size: 20px;
        }
        a {
            font-size: 20px;
        }
    }
    `;

