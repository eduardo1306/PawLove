import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Logo = styled(Link) `
	margin-left: 40px;
	text-decoration: none;
	color: #fff;
	font-size: 2.3em;
	font-weight: bold;
`

export const UserInfo = styled.div`
	display: flex;
	margin-right: 40px;
`

export const CommunityHeader = styled.div `
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #222F3E;
	height: 80px;
`

export const PageContent = styled.body.attrs({
	id: 'Community'
}) `
	background-color: #C8D6E5;    	
`

export const PageBtn = styled.button.attrs({
	type: 'button'
}) `
	background: #222F3E;
	height: 35px;
	width: 90px;
	border: none;	
	font-weight: bold;
	border-radius: 4px;
`

export const InputGroup = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 30px; 
`

export const PerfilText = styled.h5`
	margin-right: 20px;
	margin-top: 40px;
`

export const PerfilImage = styled.img.attrs({
	alt: 'Imagem do Perfil'
})`
	height: 60px;
	width: 60px;
	border-radius: 50%;
`

export const SearchInput = styled.input.attrs({
	type: 'text',	
})`
	width: 30%;
	height: 35px;
	border-radius: 4px;
	border: 1px solid #C8D6E5;	
	color: #000;
	text-indent: 10px;
	
	::placeholder {
		color: #222F3E;
		text-align: center;	
	}
`

