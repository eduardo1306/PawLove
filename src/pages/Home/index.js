import React, { useState } from 'react';

import Header from '../../components/Header';
import { Form, SubmitBtn, HomeContainer, TextContainer } from './styles';

import firstDog from '../../assets/dog1.jpg';
import firstCat from '../../assets/cat1.jpg';
import secondDog from '../../assets/dog2.jpg';
import secondCat from '../../assets/cat2.jpg';

function Home() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [radio, setRadio] = useState('');	

	function loadImage(e) {
		const $ = document.querySelector.bind(document);
		const preview = $('.preview');
		const fileToUpload = e.target.files[0];		
		const reader = new FileReader();				
		
		reader.onload = e => preview.src = e.target.result;				
		
		preview.style.display = 'fixed';
		preview.style.width = '100px';

		reader.readAsDataURL(fileToUpload);
	}	

	function handleUser(e) {
		e.preventDefault();		

		if(!name || !email || !password || !radio) {
			alert('Oops! Acho que há algum campo em branco! Verifique novamente.')
		} else {
			const newUser = {
				name,
				email,
				password, 
				radio
			}			
						
			setName(''); 
			setEmail(''); 
			setPassword(''); 
			setRadio(''); 			
		}
	}

	return (
		<>        
			<Header />
			<HomeContainer>
				<Form name="form" onSubmit={(e) => handleUser(e)}>
					<label>Nome:</label>
					<input name="inputName" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome aqui..." />
					<label>E-mail:</label>
					<input name="inputEmail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu email aqui..." />
					<label>Senha:</label>                
					<input name="inputPassword" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua senha aqui..." />
					<label>Qual é o seu pet:</label>
					<div className="radioGroup">
							<p><input name="inputRadio" type="radio" value='cachorro' onChange = {(e) => setRadio(e.target.value)} />Cachorro</p>
							<p><input name="inputRadio" type="radio" value='gato' onChange = {(e) => setRadio(e.target.value)} />Gato</p>                                                                                
					</div>
					<div className="inputPhoto">
							<label>Foto do seu pet:</label>
							<input name="inputPhoto" type="file" onChange={(e) => loadImage(e)} />
					</div>  
					<div className="previewImageContent">
							<img className="preview" alt=""/>
					</div>
					<SubmitBtn>Cadastrar</SubmitBtn>
				</Form>
				<TextContainer>
					<div className="textContent">
						<p className="mainText">Se você procura a melhor companhia para seu pet, você está no lugar certo!</p>
						<p className="secondaryText">Aqui você encontra companhia perfeita para o seu melhor <span>amigo</span>!</p>						
					</div>
					<div className="photosContent">
						<div className="dogs">
							<img src={firstDog} alt="dog" className="photo"/>
							<img src={secondDog} alt="dog" className="photo"/>
						</div>
						<div className="cats">
							<img src={firstCat} alt="cat" className="photo"/>
							<img src={secondCat} alt="cat" className="photo"/>
						</div>
					</div>
				</TextContainer>
			</HomeContainer>
		</>        
	)
}

export default Home;