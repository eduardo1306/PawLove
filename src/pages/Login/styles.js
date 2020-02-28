import styled from 'styled-components';

export const PageContainer = styled.div`
	display: flex;
	justify-content: center;    
`

export const FormLogin = styled.form.attrs({
	id: 'formLogin'
}) `
	display: flex;
	flex-direction: column;
	background-color: #fff;
	border-radius: 6px;
	height: 350px;
	width: 400px;	
	margin: 80px auto;

	.Login {	
		display: flex;
		justify-content: center;
		margin: 20px 0;
			h1 {
					color: #222F3E;
					font-size: 2.6em;
			}        
	}
	
	label{
			color: #222F3E;
			margin: 0 0 10px 30px;
			font-weight: bold;

	}

	& label { 
		margin-top: 10px;
	}
	
	input {
		width: 85%;
		border-radius: 4px;
		border: 1px solid #222F3E;
		height: 30px;
		margin-left: 30px;
		color: #000;
		text-indent: 10px;
	}    
`

export const SignInBtn = styled.button.attrs({
	type: 'submit',	
})`
	height: 30px;
	color: #fff;
	font-weight: bold;
	background: #222F3E; 
	border-radius: 4px;
	border: 1px solid #222F3E;
	margin-top: 60px;
	width: 85%;
	align-self: center;
	opacity: 0.8;

	&:hover {
		transition: 0.6s;
		opacity: 1;
	}
`