import React from 'react';

import { HeaderContainer, Page, Logo } from './styles';

export default function Header() {    
    return( 
        <>
          <HeaderContainer>
            <Page to='/app'>App</Page>
            <Page to='/sobrenos'>Sobre nós</Page>            
            <Logo to='/'>PawLove</Logo>
            <Page to='/comunidade'>Comunidade</Page>
            <Page to='/login'>Entrar</Page>
          </HeaderContainer>
        </>
    )
}