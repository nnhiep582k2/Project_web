import React from 'react';
import clsx from 'clsx';
import styles from '../../resources/scss/Pages/Settings.module.scss';

function Settings() {
    return (
        <div className={clsx(styles.settings, { col_lg_5_3: true })}>
            Settings
        </div>
    );
}

export default Settings;
