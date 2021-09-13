import React from 'react';
import { Link } from 'react-router-dom';
import classes from './OfferItem.module.css'

const OfferItem = (props) => {
    let info = props.itemData
    return (
        <div className={classes.item}>
            <div className={classes.logo}>
                <img src={info.organization.logo} alt="logo" />
            </div>
            <div className={classes.rateWrapper}>
                {info.rate.periods[0].rate.from === info.rate.periods[0].rate.to
                    ? <span className={classes.rate}>{info.rate.periods[0].rate.from}%</span>
                    : <div>от <span className={classes.rate}>{info.rate.periods[0].rate.from}%</span></div>
                }
                <div className={classes.name}>
                    «{info.name}»
                </div>
            </div>
            <div className={classes.amount}>
                <span> от {info.rate.creditAmount.from} ₽</span>
                <div>
                    На срок до {info.rate.periods[0].term.to / 12}
                    {info.rate.periods[0].term.to / 12 % 10 === 1
                        ? ' года'
                        : ' лет'}
                </div>
            </div>
            <div className={classes.requirements}>
                Возраст от {info.customerRequirements.age}
                {info.customerRequirements.age % 10 === 1
                    ? <span> года</span>
                    : <span>лет</span>} <br />
                Стаж от {info.customerRequirements.lastExperience} месяцев <br />
                {info.customerRequirements.documents}
                {info.customerRequirements.documents === 1
                    ? <span> документ</span>
                    : <span> документа</span>}
            </div>
            <div className={classes.license}>
                <span>лиц. № {info.organization.license}</span>
                <div className={classes.button}>
                    <Link to={`/offerPage/${info.id}`} >Перейти на сайт</Link>
                </div>
            </div>
        </div>
    )
}

export default OfferItem