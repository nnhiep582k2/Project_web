import React from 'react';
import clsx from 'clsx';
import styles from '../../resources/scss/Pages/People.module.scss';

function People() {
    return (
        <div className={clsx(styles.people, { col_lg_5_3: true })}>People</div>
    );
}

export default People;
