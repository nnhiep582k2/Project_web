import React, { useRef, useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from '../../resources/scss/Home/Home.module.scss';
import Header from './Header';
import Sidebar from '../Home/Sidebar';
import Newsfeed from '../Pages/Newsfeed';
import Notification from '../Pages/Notification';
import People from '../Pages/People';
import Profile from '../Pages/Profile';
import Saved from '../Pages/Saved';
import Settings from '../Pages/Settings';

function Home() {
    const [page, setPage] = useState(0);
    const headerRef = useRef();
    const sidebarRef = useRef();

    useEffect(() => {
        let prevScrollpos = window.pageYOffset;

        function scrollY() {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                headerRef.current.style.top = '0';
                sidebarRef.current.style.top = '60px';
            } else {
                headerRef.current.style.top = '-60px';
                sidebarRef.current.style.top = '0';
            }
            prevScrollpos = currentScrollPos;
        }

        window.addEventListener('scroll', scrollY);

        return () => {
            window.removeEventListener('scroll', scrollY);
        };
    }, []);

    return (
        <div id={clsx(styles.home)}>
            <Header forwardedRef={headerRef} />
            <div className={clsx(styles.main)}>
                <Sidebar {...{ setPage }} forwardedRef={sidebarRef} />
                {page === 0 ? (
                    <Newsfeed />
                ) : page === 1 ? (
                    <Notification />
                ) : page === 2 ? (
                    <Saved />
                ) : page === 3 ? (
                    <People />
                ) : page === 4 ? (
                    <Profile />
                ) : (
                    <Settings />
                )}
            </div>
        </div>
    );
}

export default Home;
