import React, { useEffect } from 'react';
import clsx from 'clsx';
import styles from '../../resources/scss/Home/Header.module.scss';
import logo from '../../resources/img/Entrance/logo.png';
import { BiSearch } from 'react-icons/bi';

function Header({ forwardedRef }) {
    return (
        <div id={clsx(styles.header)} ref={forwardedRef}>
            <div className={clsx(styles.header__left)}>
                <div className={clsx(styles.header__wrap)}>
                    <img src={logo} alt="Logo" />
                    <h1 className={clsx(styles.header__heading)}>FaSNet</h1>
                </div>
            </div>
            <div className={clsx(styles.header__right)}>
                <form className={clsx(styles.header__form)} action="" method="">
                    <input
                        className={clsx(styles.header__input)}
                        type="text"
                        placeholder="Search"
                    />
                    <BiSearch />
                </form>
            </div>
        </div>
    );
}

export default Header;
