import React, { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import styles from '../../resources/scss/Entrance/Entrance.module.scss';
import logo from '../../resources/img/Entrance/logo.png';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { Button } from '../Button';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

function Entrance() {
    const [signup, setSignup] = useState(true);
    const [hidden, setHidden] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [acc, setAcc] = useState('');
    const [psw, setPsw] = useState('');

    const passRef = useRef();
    const finputRef = useRef();

    useEffect(() => {
        document.title = 'FaSNet - Sign up or Sign in';
    }, []);

    useEffect(() => {
        finputRef.current.focus();
    }, [signup]);

    const handleClick = () => {
        setHidden((preState) => {
            if (!preState === false) {
                passRef.current.type = 'text';
            } else {
                passRef.current.type = 'password';
            }
            return !preState;
        });
    };

    const handleSignup = () => {
        setSignup(!signup);
    };

    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value);
    };
    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    };
    const handleChangeAccount = (e) => {
        setAccount(e.target.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleChangeAcc = (e) => {
        setAcc(e.target.value);
    };
    const handleChangePsw = (e) => {
        setPsw(e.target.value);
    };

    return (
        <div id={clsx(styles.entrance)}>
            <div className={clsx(styles.entrance__wrap)}>
                <div className={clsx(styles.entrance__img)}>
                    <img src={logo} alt="Logo" />
                    <h1 className={clsx(styles.entrance__heading)}>
                        <Typewriter
                            onInit={(typewitter) => {
                                typewitter
                                    .typeString('Welcome to FaSNet')
                                    .pauseFor(3000)
                                    .deleteAll()
                                    .typeString('All the best to you!')
                                    .start();
                            }}
                        />
                    </h1>
                </div>
                <h2 className={clsx(styles.entrance__title)}>
                    {signup ? 'Sign up' : 'Sign in'}
                </h2>
                <form id={clsx(styles.entrance__form)} action="" method="">
                    {signup ? (
                        <>
                            <div className={styles.entrance__form__wrap}>
                                <input
                                    type="text"
                                    className={styles.entrance__input}
                                    required
                                    placeholder=" "
                                    ref={finputRef}
                                    value={firstName}
                                    onChange={handleChangeFirstName}
                                />
                                <label className={styles.entrance__label}>
                                    First Name
                                </label>
                            </div>
                            <div className={styles.entrance__form__wrap}>
                                <input
                                    type="text"
                                    className={styles.entrance__input}
                                    required
                                    placeholder=" "
                                    value={lastName}
                                    onChange={handleChangeLastName}
                                />
                                <label className={styles.entrance__label}>
                                    Last Name
                                </label>
                            </div>
                            <div className={styles.entrance__form__wrap}>
                                <input
                                    type="text"
                                    className={styles.entrance__input}
                                    required
                                    placeholder=" "
                                    value={account}
                                    onChange={handleChangeAccount}
                                />
                                <label className={styles.entrance__label}>
                                    Account
                                </label>
                            </div>
                            <div className={styles.entrance__form__wrap}>
                                <input
                                    type="password"
                                    className={styles.entrance__input}
                                    required
                                    placeholder=" "
                                    ref={passRef}
                                    value={password}
                                    onChange={handleChangePassword}
                                />
                                <label className={styles.entrance__label}>
                                    Password
                                </label>
                                <span
                                    className={styles.entrance__eye}
                                    onClick={handleClick}
                                >
                                    {hidden ? (
                                        <BsFillEyeSlashFill />
                                    ) : (
                                        <BsFillEyeFill />
                                    )}
                                </span>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={styles.entrance__form__wrap}>
                                <input
                                    type="text"
                                    className={styles.entrance__input}
                                    required
                                    placeholder=" "
                                    ref={finputRef}
                                    value={acc}
                                    onChange={handleChangeAcc}
                                />
                                <label className={styles.entrance__label}>
                                    Account
                                </label>
                            </div>
                            <div className={styles.entrance__form__wrap}>
                                <input
                                    type="password"
                                    className={styles.entrance__input}
                                    required
                                    placeholder=" "
                                    ref={passRef}
                                    value={psw}
                                    onChange={handleChangePsw}
                                />
                                <label className={styles.entrance__label}>
                                    Password
                                </label>
                                <span
                                    className={styles.entrance__eye}
                                    onClick={handleClick}
                                >
                                    {hidden ? (
                                        <BsFillEyeSlashFill />
                                    ) : (
                                        <BsFillEyeFill />
                                    )}
                                </span>
                            </div>
                        </>
                    )}
                    <div className={styles.entrance__remember}>
                        <p>
                            {signup
                                ? 'Already have an account?'
                                : "Don't have an account?"}
                        </p>
                        <a onClick={handleSignup}>
                            {signup ? 'Sign in' : 'Sign up'}
                        </a>
                    </div>
                    <Link to="/home">
                        <Button
                            children={signup ? 'Sign up' : 'Sign in'}
                            type="submit"
                        />
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Entrance;
