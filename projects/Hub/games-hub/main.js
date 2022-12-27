import './style.css'

import { NavBar } from './components/NavBar/NavBar'
import { loggerOut, login } from './pages/login/login';
import { localStorage } from './pages/login/login';
import { colorRandom } from './components/NavBar/NavBar';
import { colorOriginal } from './components/NavBar/NavBar';




const header = document.querySelector("header");
header.innerHTML=NavBar;

const main = document.querySelector("main")
main.innerHTML=login;

localStorage()
colorRandom()
colorOriginal()
loggerOut()

