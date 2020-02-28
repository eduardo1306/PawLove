import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div `    
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 40px auto;
    font-weight: bold;
`

export const Page  = styled(Link) `
    font-size: 16px;
    text-decoration: none;
    color: #FFF;
`
export const Logo = styled(Link) `
    font-size: 24px;
    text-decoration: none;
    color: #FFF;
    
`;
