import React from 'react';
import './navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { auth } from '../assets/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import kit from '../style/kitUI.module.css';

function Navbar() {

    const [user] = useAuthState(auth);

    return (
        <ul id="communNavbar" className={kit.navbarHarmonistere}>
            <li className={kit.navbarLiHarmonistere}>
                <NavLink exact activeClassName="active" to={'/'}>Accueil</NavLink>
            </li>
            {user && <li className={kit.navbarLiHarmonistere}>
                <NavLink exact to="/univers" activeClassName="active">Univers</NavLink>
            </li>}
            <li className={kit.navbarLiHarmonistere}>
                <NavLink exact activeClassName="active" to={'/creationfiche'}>Créer une fiche</NavLink>
            </li>
            {user && <li className={kit.navbarLiHarmonistere}>
                <NavLink exact activeClassName="active" to="/espacejoueur">Votre espace joueur</NavLink>
            </li>}
            <li className={kit.navbarLiHarmonistere}>
                <NavLink exact activeClassName="active" to={'/lanceur'}>Lanceur de dés</NavLink>
            </li>
        </ul>
    );
}

export default Navbar;