import React from 'react';
import style from './Navigation.module.css'

const Navigation = () => {
    return (
        <>
            <nav className={style.navigation}>
                <ul className={style.navigation__list}>
                    <li className={style.navigation__item}>
                        <a className={style.navigation__link} href="#">
                            Profile
                        </a>
                    </li>
                    <li className={style.navigation__item}>
                        <a className={style.navigation__link} href="#">
                            Messages
                        </a>
                    </li>
                    <li className={style.navigation__item}>
                        <a className={style.navigation__link} href="#">
                            News
                        </a>
                    </li>
                    <li className={style.navigation__item}>
                        <a className={style.navigation__link} href="#">
                            Music
                        </a>
                    </li>
                    <li className={style.navigation__item}>
                        <a className={style.navigation__link} href="#">
                            Settings
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navigation;