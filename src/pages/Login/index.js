import React from 'react';


import Header from '../../components/Header';

import { PageContainer, FormLogin, SignInBtn } from './styles';

export default function Login() {	
	return (
		<>
		<Header />
			<PageContainer>				
				<FormLogin>
					<div className="Login">
						<h1>Login</h1>
					</div>
					<label>E-mail:</label>
					<input type="email" />
					<label>Password:</label>
					<input type="password" />					
					<SignInBtn>Entrar</SignInBtn>
				</FormLogin>				
			</PageContainer>
		</>
	)
}