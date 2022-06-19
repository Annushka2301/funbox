import React from "react";
import styles from "./portions.module.css"

const Portions = ({portions, mice}) => {

    return (
        <div>
            <p className={styles.portions}><span className={styles.number}>{portions}</span> порций</p>
            <p className={styles.portions}><span className={styles.number}>{mice.number}</span> {mice.details}</p>
        </div>
    )
}

export default Portions;