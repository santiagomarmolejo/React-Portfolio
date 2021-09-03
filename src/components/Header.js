import React from 'react';

const Header = (props) => {
    return (<div>
        <header>
            <h2>Santiago Marmolejo</h2>
            <nav>
                <ul>
                    <a class="nav-item" >Home</a>
                    <a class="nav-item" >Photos</a>
                    <a class="nav-item" >Contact</a>
                </ul>
            </nav>
        </header>
    </div>);
}

export default Header;