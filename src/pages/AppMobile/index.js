import React from 'react';

import Header from '../../components/Header';

import { PageContainer, InProductionText } from './styles';

export default function AppMobile() {
	return(
		<>
		<Header />
			<PageContainer>
				<InProductionText>Em produção...</InProductionText>			
			</PageContainer>
		</>
	)
}