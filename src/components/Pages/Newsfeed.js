import React, { useEffect, useState } from 'react';
import '../../resources/scss/Pages/Newsfeed.scss';
import { User } from '../../data/UserData';
import { Location } from '../../data/LocationData';
import { Button } from '../../components/Button';
import { HiPhotograph } from 'react-icons/hi';
import { RiVideoFill } from 'react-icons/ri';
import { AiFillTag } from 'react-icons/ai';
import { ImLocation2 } from 'react-icons/im';
import Posts from './Posts';

function Newsfeed() {
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        function myFunction(x) {
            if (x.matches) {
                setMobile(!mobile);
            }
        }

        let x = window.matchMedia('(max-width: 739px)');
        myFunction(x);
        x.addEventListener('load', myFunction);

        return () => {
            x.removeEventListener('load', myFunction);
        };
    }, []);

    useEffect(() => {
        const postInput = document.querySelector('.newsfeed__input');
        const post = document.querySelector('.newsfeed__post');
        const hiddenBtn = document.querySelector('.newsfeed__post__hidden');
        const overlay = document.querySelector('.overlay');
        postInput.addEventListener('click', () => {
            hiddenBtn.style.display = 'flex';
            post.style.borderBottomLeftRadius = '0';
            post.style.borderBottomRightRadius = '0';
            overlay.style.display = 'block';
        });
        overlay.addEventListener('click', () => {
            hiddenBtn.style.display = 'none';
            post.style.borderBottomLeftRadius = '10px';
            post.style.borderBottomRightRadius = '10px';
            overlay.style.display = 'none';
        });
    }, []);

    useEffect(() => {
        const hiddenBtn2 = document.querySelector(
            '.newsfeed__hidden__wrap .newsfeed__hidden__btn',
        );
        const hiddenCheckin = document.querySelector('.newsfeed__checkin');
        const hiddenTags = document.querySelector('.newsfeed__tags');
        const overlay = document.querySelector('.overlay');
        hiddenBtn2.addEventListener('click', () => {
            if (hiddenTags.style.display === 'block')
                hiddenTags.style.display = 'none';
            else {
                hiddenCheckin.style.display = 'none';
                hiddenTags.style.display = 'block';
            }
        });
        overlay.addEventListener('click', () => {
            hiddenTags.style.display = 'none';
        });
    }, []);

    useEffect(() => {
        const hiddenBtn3 = document.querySelector(
            '.newsfeed__hidden__wrap2 .newsfeed__hidden__btn',
        );
        const hiddenTags = document.querySelector('.newsfeed__tags');
        const hiddenCheckin = document.querySelector('.newsfeed__checkin');
        const overlay = document.querySelector('.overlay');
        hiddenBtn3.addEventListener('click', () => {
            if (hiddenCheckin.style.display === 'block')
                hiddenCheckin.style.display = 'none';
            else {
                hiddenTags.style.display = 'none';
                hiddenCheckin.style.display = 'block';
            }
        });
        overlay.addEventListener('click', () => {
            hiddenCheckin.style.display = 'none';
        });
    }, []);

    console.log('re-render');

    return (
        <div id="newsfeed" className="col_lg_5_3">
            <div className="overlay"></div>
            <div className="newsfeed__wrap">
                <div className="newsfeed__post">
                    <div className="newsfeed__wrap__img">
                        <img src={User.avatar} alt="Avatar" />
                    </div>
                    <input
                        type="text"
                        className="newsfeed__input"
                        placeholder={`What's new, ${User.name}?`}
                    />
                    <Button
                        className="newsfeed__post__btn"
                        children="Post It!"
                        type="submit"
                    />
                    <div className="newsfeed__post__hidden">
                        {mobile === true ? (
                            <>
                                <label
                                    className="newsfeed__hidden__label"
                                    htmlFor="newsfeed__input"
                                >
                                    <a className="newsfeed__hidden__btn">
                                        <HiPhotograph />/<RiVideoFill />
                                    </a>
                                </label>
                                <input
                                    type="file"
                                    multiple
                                    id="newsfeed__input"
                                    hidden
                                />
                            </>
                        ) : (
                            <>
                                <label
                                    className="newsfeed__hidden__label"
                                    htmlFor="newsfeed__input"
                                >
                                    <a className="newsfeed__hidden__btn">
                                        <HiPhotograph />
                                        Photo/
                                        <RiVideoFill />
                                        Video
                                    </a>
                                </label>
                                <input
                                    type="file"
                                    multiple
                                    id="newsfeed__input"
                                    hidden
                                />
                            </>
                        )}
                        {mobile === true ? (
                            <div className="newsfeed__hidden__wrap">
                                <Button
                                    className="newsfeed__hidden__btn"
                                    children={<AiFillTag />}
                                    type="submit"
                                />
                                <div className="newsfeed__tags">
                                    <input
                                        type="text"
                                        placeholder="Enter your friend's name"
                                        className="newsfeed__tags__input"
                                    />
                                    {User.friends.map(
                                        (friend, index) =>
                                            index <= 4 && (
                                                <span key={index}>
                                                    {friend}
                                                </span>
                                            ),
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="newsfeed__hidden__wrap">
                                <Button
                                    className="newsfeed__hidden__btn"
                                    type="submit"
                                >
                                    <AiFillTag />
                                    Tag someone else
                                </Button>
                                <div className="newsfeed__tags">
                                    <input
                                        type="text"
                                        placeholder="Enter your friend's name"
                                        className="newsfeed__tags__input"
                                    />
                                    {User.friends.map(
                                        (friend, index) =>
                                            index <= 9 && (
                                                <span key={index}>
                                                    {friend}
                                                </span>
                                            ),
                                    )}
                                </div>
                            </div>
                        )}
                        {mobile === true ? (
                            <div className="newsfeed__hidden__wrap">
                                <Button
                                    className="newsfeed__hidden__btn"
                                    children={<ImLocation2 />}
                                    type="submit"
                                />
                                <div className="newsfeed__checkin">
                                    <input
                                        type="text"
                                        placeholder="Enter location..."
                                        className="newsfeed__checkin__input"
                                    />
                                    {Location.map(
                                        (loca, index) =>
                                            index <= 4 && (
                                                <span key={index}>{loca}</span>
                                            ),
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="newsfeed__hidden__wrap2">
                                <Button
                                    className="newsfeed__hidden__btn"
                                    type="submit"
                                >
                                    <ImLocation2 />
                                    Check-in
                                </Button>
                                <div className="newsfeed__checkin">
                                    <input
                                        type="text"
                                        placeholder="Enter location..."
                                        className="newsfeed__checkin__input"
                                    />
                                    {Location.map(
                                        (loca, index) =>
                                            index <= 9 && (
                                                <span key={index}>{loca}</span>
                                            ),
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <Posts />
            </div>
        </div>
    );
}

export default Newsfeed;
