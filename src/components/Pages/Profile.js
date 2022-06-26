import React from 'react';
import clsx from 'clsx';
import styles from '../../resources/scss/Pages/Profile.module.scss';

function Profile() {
    return (
        <div className={clsx(styles.profile, { col_lg_5_3: true })}>
            Profile
        </div>
    );
}

export default Profile;
