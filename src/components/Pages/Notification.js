import React from 'react';
import clsx from 'clsx';
import styles from '../../resources/scss/Pages/Notification.module.scss';

function Notification() {
    return (
        <div className={clsx(styles.notification, { col_lg_5_3: true })}>
            Notification
        </div>
    );
}

export default Notification;
