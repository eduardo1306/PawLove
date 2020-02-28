import styled from 'styled-components';

export const HomeContainer = styled.div`
	display: grid;   
	grid-column-gap: 20px;   
	grid-template-areas: 
	'Form Form Form TextContainer TextContainer TextContainer';
`;

export const TextContainer = styled.div`
	grid-area: TextContainer;
	margin: 35px 70px 0 20px;   
	display: flex;
	flex-direction: column;  

	.mainText {
			font-size: 2.4em;
			text-align: center;        
			font-weight: bold;        
	}

	.secondaryText {
			color: #000;
			font-weight: bold;
			font-size: 16px;        
			text-align: center;
			margin-top: 10px;

			span {
					color: #FF6B6B;
			}
	}

	.photosContent {    
			margin-top: 10px;                            
			.dogs,
			.cats {
					display: flex;
					flex-direction: row;
					justify-content: center;
			}

			.photo {            
					height: 100px;
					width: 100px;
					border-radius: 50%;
					display: block;                                
					margin: 10px 15px;
			} 
			
	}

`;

export const Form = styled.form`   
	grid-area: Form;
	margin: 15px 20px 0 70px;    
	background: #C8D6E5;    
	display: flex;
	flex-direction: column;
	height: 450px;
	width: 80%;
	border-radius: 5px;       
	color: #222F3E;
	
	label {
			margin-top: 10px;
			font-family: sans-serif;
			font-weight: bold;
			margin-left: 20px;
	}     

	input[type="text"],
	input[type="email"],
	input[type="password"]{
			border-radius: 6px;
			height: 30px;
			border: 0;
			width: 90%;
			margin-left: 20px;
			margin-top: 5px;
			color: #000;
			text-indent: 10px;
	}
	.radioGroup {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			margin: 10px 0 0 45px;          
			justify-items: center;              
	}

	.radioGroup p {
			font-weight: bold;
	}

	input[type="radio"] {        
			margin: 5px;
			border-radius: 6px;
	}

	.inputPhoto {
			display: flex;
			align-items: center;                
			padding: 0;
			margin: 0;

			label {
					margin-right: 5px;
			}

			input{
					font-size: 10px;
					color: transparent;            
					align-self: center;
					margin-top: 10px;            
			}
	}

	.previewImageContent {        
			img {
					display: fixed;
					height: 100px;            
					border-radius: 50%;
					margin-left: 20px;
					margin-top: 10px;
					border: none;
			}
	}    
`;

export const SubmitBtn = styled.button.attrs({
	type: 'submit'    
})`        
	background: #222F3E;
	font-size: 16px;
	border: 0;
	border-radius: 4px;
	height: 30px;
	width: 90%;
	align-self: center;
	margin-top: 10px;
	opacity: 0.6;
	transition: 0.4s;

	&:hover {
			opacity: 1;           
	}
`;