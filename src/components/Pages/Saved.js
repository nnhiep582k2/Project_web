import React from 'react';
import clsx from 'clsx';
import styles from '../../resources/scss/Pages/Saved.module.scss';

function Saved() {
    return (
        <div className={clsx(styles.saved, { col_lg_5_3: true })}>Saved</div>
    );
}

export default Saved;
