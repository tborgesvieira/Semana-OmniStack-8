import React, { useEffect } from 'react';

import './Main.css';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main({match}){
    return (
    <div className="main-container">
        <img src={logo} alt="Tindev" />
        <ul>
            <li>
                <img src="https://avatars0.githubusercontent.com/u/5624040?v=4" alt="" />
                <footer>
                    <strong>Thiago Borges Vieira</strong>
                    <p>Isso é mais um teste</p>
                </footer>
                <div className="buttons">
                    <button type="button">
                        <img src={dislike} alt="Dislike" />
                    </button>
                    <button type="button">
                        <img src={like} alt="Like" />
                    </button>
                </div>                
            </li>

            <li>
                <img src="https://avatars0.githubusercontent.com/u/5624040?v=4" alt="" />
                <footer>
                    <strong>Thiago Borges Vieira</strong>
                    <p>Isso é mais um teste um testeum testeum testeum testeum testeum testeum testeum testeum testeum testeum testeum teste</p>
                </footer>
                <div className="buttons">
                    <button type="button">
                        <img src={dislike} alt="Dislike" />
                    </button>
                    <button type="button">
                        <img src={like} alt="Like" />
                    </button>
                </div>                
            </li>

            <li>
                <img src="https://avatars0.githubusercontent.com/u/5624040?v=4" alt="" />
                <footer>
                    <strong>Thiago Borges Vieira</strong>
                    <p>Isso é mais um teste</p>
                </footer>
                <div className="buttons">
                    <button type="button">
                        <img src={dislike} alt="Dislike" />
                    </button>
                    <button type="button">
                        <img src={like} alt="Like" />
                    </button>
                </div>                
            </li>

            <li>
                <img src="https://avatars0.githubusercontent.com/u/5624040?v=4" alt="" />
                <footer>
                    <strong>Thiago Borges Vieira</strong>
                    <p>Isso é mais um teste</p>
                </footer>
                <div className="buttons">
                    <button type="button">
                        <img src={dislike} alt="Dislike" />
                    </button>
                    <button type="button">
                        <img src={like} alt="Like" />
                    </button>
                </div>                
            </li>            
        </ul>
    </div>
    );
}