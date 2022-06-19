import React, { useState } from "react";
import Portions from "../Portions/Postions";
import styles from "./card.module.css"

const Card = ({flavour, portions, mice, weight, isAvailiable}) => {
    const [isChosen, setIsChosen] = useState(false);
    const [isHovered, setIsHovered] = useState(true);

    let flavours = {
        flavour1: 'с фуа-гра',
        flavour2: 'с рыбой',
        flavour3: 'с курой',
    };
    
    let flavourComment = 'Чего сидишь? Порадуй котэ, ';
    if (flavour === flavours.flavour1 && isChosen) flavourComment = 'Печень утки разварная с артишоками.';
    if (flavour === flavours.flavour2 && isChosen) flavourComment = 'Головы щучьи с чесноком да свежайшая сёмгушка.';
    if (flavour === flavours.flavour3 && isChosen) flavourComment = 'Филе из цыплят с трюфелями в бульоне.';
    if (flavour === flavours.flavour1 && !isAvailiable) flavourComment = 'Печалька, с фуа-гра закончился.';
    if (flavour === flavours.flavour2 && !isAvailiable) flavourComment = 'Печалька, с рыбой закончился.';
    if (flavour === flavours.flavour3 && !isAvailiable) flavourComment = 'Печалька, с курой закончился.';
    
    let cardClasses = [styles.card];
    let weightClasses = [styles.weight];
    let subTitleClasses = [styles.label];
    let topBorderClasses = [styles.topBorder];
    let leftBorderClasses = [styles.leftBorder];
    let commentClasses = !isAvailiable?[styles.linkDescr, styles.linkDescrNotAvailiable]:[styles.linkDescr];
    
    function choose () {
        if (isChosen) {
            setIsChosen(false);
        } else {
            setIsChosen(true);
        }
    };

    function changeSubTitle() {
        if (!isHovered) {
            setIsHovered(true);
        } else {
            setIsHovered(false);
        };
    };

    if (isChosen) {
        cardClasses.push(styles.cardChosen); 
        weightClasses.push(styles.weightChosen);
        topBorderClasses.push(styles.weightChosen);
        leftBorderClasses.push(styles.weightChosen);
    };

    if (isAvailiable) {
        cardClasses.push(styles.cardHover);
        weightClasses.push(styles.weightHover);
    };

    if (!isAvailiable) {
        cardClasses.push(styles.cardNotAvailiable);
        weightClasses.push(styles.weightNotAvailiable);
        topBorderClasses.push(styles.weightNotAvailiable);
        leftBorderClasses.push(styles.weightNotAvailiable);
    };

    if (isChosen && !isHovered) {
        subTitleClasses.push(styles.pinkLabel);
    };

    return (
        <div className={styles.relative} 
            onClick={isAvailiable ? choose : null}
            onMouseLeave={isChosen ? changeSubTitle : null}
            onMouseEnter={isChosen ? changeSubTitle : null}
        >
            <div className={ cardClasses.join(' ') }>
                <div className={ topBorderClasses.join(' ')}/>
                <div className={ leftBorderClasses.join(' ')}/>
                {!isChosen && <p className={styles.label}>Сказочное заморское явство</p>}
                {isChosen && isHovered && <p className={subTitleClasses.join(' ')}>Сказочное заморское явство</p>}
                {!isHovered && isChosen && <p className={subTitleClasses.join(' ')}>Котэ не одобряет?</p>}
                <h2 className={styles.title}>Нямушка</h2>
                <p className={styles.flavour}>{flavour}</p>
                <Portions portions={portions} mice={mice}/>
                <div className={weightClasses.join(' ')}>{weight}<p className={styles.kg}> кг</p></div>
            </div>
            <div className={styles.linkWrap} >
                {!isChosen && isAvailiable
                    ? 
                    <p className={styles.linkDescr}>{flavourComment} <a className={styles.link}>купи</a></p> 
                    :
                    <p className={commentClasses.join(' ')}>{flavourComment}</p> 
                }
            </div>
        </div>
    )
}

export default Card;