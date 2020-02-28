import React from 'react';

import perfilImg from '../../assets/perfilImage.jpg';

import { PageContent, CommunityHeader, Logo, PageBtn,
	 SearchInput, InputGroup, PerfilText, PerfilImage, UserInfo } from './styles';

export default function Comunidade() {
	return(
		<>
			<PageContent>
				<CommunityHeader>
					<Logo to='/'>PawLove</Logo>
					<UserInfo>
						<PerfilText>Sejá Bem-Vindo Eduardo!</PerfilText>
						<PerfilImage src={perfilImg} />
					</UserInfo>
				</CommunityHeader>
				<InputGroup>
					<PageBtn>Voltar</PageBtn>
					<SearchInput placeholder='Digite aqui o que você deseja encontrar...' />
					<PageBtn>Avançar</PageBtn>				
				</InputGroup>
			</PageContent>		
		</>
	)
}