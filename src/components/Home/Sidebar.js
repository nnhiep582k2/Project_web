import React, { useEffect } from 'react';
import '../../resources/scss/Home/Sidebar.scss';
import { User } from '../../data/UserData';
import { Link } from 'react-router-dom';
import { Pages } from '../../data/PageData';

function Sidebar({ setPage, forwardedRef }) {
    useEffect(() => {
        let items = document.querySelectorAll('.sidebar__item');
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            item.addEventListener('click', () => {
                for (let j = 0; j < items.length; j++)
                    items[j].classList.remove('sidebar__item--active');
                item.classList.add('sidebar__item--active');
            });
        }
    }, []);

    return (
        <div id="sidebar" className="col_lg_5" ref={forwardedRef}>
            <div className="sidebar__top">
                <div className="sidebar__user-wrap">
                    <img src={User.avatar} alt="Avatar" />
                </div>
                <div className="sidebar__user-info">
                    <h2 className="sidebar__user-name">{User.name}</h2>
                    <h3 className="sidebar__username">{User.username}</h3>
                </div>
            </div>
            <div className="sidebar__center">
                <ul className="sidebar__list">
                    {Pages.map((page) =>
                        page.id === 1 ? (
                            <li
                                key={page.id}
                                className="sidebar__item sidebar__items"
                                onClick={() => {
                                    setPage(page.id);
                                }}
                            >
                                <div className="sidebar__item__left">
                                    {page.icon}
                                    <span>{page.name}</span>
                                </div>
                                <div className="sidebar__item__right">
                                    <span className="quantity">
                                        {User.notification}
                                    </span>
                                </div>
                            </li>
                        ) : page.id === 6 ? (
                            <li key={page.id} className="sidebar__item">
                                <Link to="/">
                                    {page.icon}
                                    <span>{page.name}</span>
                                </Link>
                            </li>
                        ) : (
                            <li
                                key={page.id}
                                className={
                                    page.id === 0
                                        ? 'sidebar__item sidebar__item--active'
                                        : 'sidebar__item'
                                }
                                onClick={() => {
                                    setPage(page.id);
                                }}
                            >
                                {page.icon}
                                <span>{page.name}</span>
                            </li>
                        ),
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
