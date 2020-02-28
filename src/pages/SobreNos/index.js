import React from 'react';

import Header from '../../components/Header';

import cat from '../../assets/cat3.jpeg';
import dog from '../../assets/dog3.jpg';

import { TextContainer, ImagesContainer, PageContainer } from './styles';

export default function SobreNos() {
return(
	<>
	<Header />
		<PageContainer>
			<ImagesContainer>
				<img src={dog} alt='dog' />
				<img src={cat} alt='cat' />
			</ImagesContainer>
			<TextContainer>
				<p>PawLove nasceu com o íntuito de ajudar com informações, dicas, buscar um(a) 
					companheiro(a) para seu pet e até mesmo para divulgações de eventos que acontecem 
					ao redor da cidade voltado para essa área.</p>
			</TextContainer>			
		</PageContainer>
	</>
)
}