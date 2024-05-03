import React, { useState } from 'react';
import leftArrow from '../images/Deco Titre gauche.png';
import rightArrow from '../images/Deco Titre droite.png';
import { auth, logIn } from '../assets/firebase';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import style from '../style/kitUI.module.css';
import './connexionPanel.css';


function ConnexionPanel ({loadingAccountCreation}) {

    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    const [user, error] = useAuthState (auth);

    function handleSubmit (e) {
        e.preventDefault();
        logIn(email, password);
    }

    console.log (email, password);

    console.log(loadingAccountCreation);

    return (

        <div id='connexionPanelTotal'>
                <form id='newFormAuth' onSubmit={handleSubmit}>
                <div id='authFormText'>

                    <div id='titleAuthForm'>
                        <img id="leftTitleDeco" className='arrowDeco' src={leftArrow} alt="Flèche décorative à gauche" />
                        <h4>Login</h4>
                        <img id="rightTitleDeco" className='arrowDeco' src={rightArrow} alt="Flèche décorative à droite" />
                    </div>

                    <input type='email' id='emailPlayer' className={style.inputHarmonistere} name='emailPlayer' placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} required /><br/>

                    <input type='password' id='passwordPlayer' className={style.inputHarmonistere} name='passwordPlayer' placeholder='Mot de passe' onChange={(e) => setPassword(e.target.value)} required /><br/>

                    <button id='buttonAuthForm' className={style.buttonHarmonistere} type='submit'>Se connecter</button><br/>
                    <div id='bottomAuthForm'>
                    <Link to='/resetPassword'><span id='resetUnderline'>Mot de passe oublié ?</span></Link>
                        <div id='linkNewAccount'>
                            <p>Pas de compte ?&nbsp;</p><span id='toAccount' onClick={loadingAccountCreation}>Créez-en un</span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ConnexionPanel