import React, { useEffect } from 'react';
import '../../resources/scss/Home/Posts.scss';
import { Post } from '../../data/PostDate';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { BsBookmark } from 'react-icons/bs';
import { RiUserUnfollowLine } from 'react-icons/ri';
import { MdReportGmailerrorred } from 'react-icons/md';
import {
    MdOutlineArrowCircleUp,
    MdOutlineArrowCircleDown,
} from 'react-icons/md';
import { TiArrowForwardOutline } from 'react-icons/ti';

function Posts() {
    useEffect(() => {
        const svg = document.querySelectorAll('.above__right > svg');
        const options = document.querySelectorAll('.posts__options');
        for (let i = 0; i < svg.length; i++) {
            svg[i].addEventListener('click', () => {
                for (let j = 0; j < svg.length; j++) {
                    if (options[j].style.display === 'block' && options[j] !== options[i])
                        options[j].style.display = 'none';
                }
                if (options[i].style.display === 'block') {
                    options[i].style.display = 'none';
                } else options[i].style.display = 'block';
            });
        }
    }, []);

    useEffect(() => {
        const subPosts = document.querySelectorAll('.sub__post');
        for (let i = 0; i < subPosts.length; i++) {
            const subPost = subPosts[i].querySelectorAll('.sub__post__item');
            for (let j = 0; j < subPost.length; j++) {
                subPost[j].addEventListener('click', () => {
                    if (subPost[j].classList.contains('sub__post--active')) {
                        subPost[j].classList.remove('sub__post--active');
                    } else
                        subPost[j].classList.add('sub__post--active');
                });
            }
        }
    }, []);

    return (
        <div className="posts">
            {Post.map((po, index) => (
                <div className="post" key={index}>
                    <div className="posts__above">
                        <div className="above__left">
                            <div className="wrap__img">
                                <img src={po.avatar} alt="Avatar" />
                            </div>
                            <div className="info__post">
                                <Link to="#">
                                    <h3 className="info__name">{po.name}</h3>
                                </Link>
                                <p className="info__time">{po.time}</p>
                            </div>
                        </div>
                        <div className="above__right">
                            <BiDotsHorizontalRounded />
                            <div className="posts__options">
                                <ul>
                                    <li>
                                        <BsBookmark /> Save
                                    </li>
                                    <li>
                                        <RiUserUnfollowLine /> Unfollow
                                    </li>
                                    <li>
                                        <MdReportGmailerrorred /> Report
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="posts__center">{po.content}</div>
                    <div className="posts__below">
                        <div className="below__wrap">
                            <img src={po.img} alt="My post's picture" />
                        </div>
                    </div>
                    <div className="sub__post">
                        <div className="sub__post__item sub__post__like">
                            <MdOutlineArrowCircleUp />
                            {po.up}
                        </div>
                        <div className="sub__post__item sub__post__dislike">
                            <MdOutlineArrowCircleDown />
                            {po.down}
                        </div>
                        <div className="sub__post__item sub__post__share">
                            <TiArrowForwardOutline />
                            Share
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Posts;
