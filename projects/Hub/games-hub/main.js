import './style.css'

import { NavBar } from './components/NavBar/NavBar'
import { login } from './pages/login/login';
import { localStorage } from './pages/login/login';


const header = document.querySelector("header");
header.innerHTML=NavBar;

const main = document.querySelector("main")
main.innerHTML=login;

localStorage()