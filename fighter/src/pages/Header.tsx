import React from 'react';
import Styles from './Header.module.css';
const Header: React.FC = () => {
    return (
        <div className={Styles['header']}>
            <h1 className={Styles['header__title']}>Fighter</h1>
        </div>    
    );
};

export default Header;