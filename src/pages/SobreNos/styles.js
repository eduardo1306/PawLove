import styled from 'styled-components';

export const TextContainer = styled.div `
    grid-area: TextContainer;

    p {
        font-size: 36px;
        font-weight: bold;
        margin: 70px auto;
        text-align: justify;
    }
`

export const ImagesContainer = styled.div `    
    grid-area: ImagesContainer;

    img {
        margin: 30px auto;
        display: fixed;
        height: 200px;
        width: 200px;
        border-radius: 50%;        
    }
`

export const PageContainer = styled.div `
    display: grid;
    grid-template-columns: 400px 600px;
    grid-template-areas:    
    'ImagesContainer TextContainer'
`