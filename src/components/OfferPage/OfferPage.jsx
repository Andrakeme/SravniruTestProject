import React from 'react';
import { Link } from 'react-router-dom';
import classes from './OfferPage.module.css'

const OfferPage = (props) => {

    const info = props.pageData

    return (
        <div className={classes.pageWrapper}>
            {info
                ? <div className={classes.item}>
                    <div className={classes.logo}>
                        <img src={info.organization.logo} alt="logo" />
                    </div>
                    <div>
                        <div>Ставка</div>
                        <div className={classes.rateWrapper}>
                            {info.rate.periods[0].rate.from === info.rate.periods[0].rate.to
                                ? <span className={classes.rate}>{info.rate.periods[0].rate.from}%</span>
                                : <div>от <span className={classes.rate}>{info.rate.periods[0].rate.from}% </span>
                                    до <span className={classes.rate}>{info.rate.periods[0].rate.to}%</span></div>
                            }
                            <div className={classes.name}>
                                «{info.name}»
                            </div>
                        </div>
                    </div>
                    <div className={classes.amount}>
                        <div>Сумма</div>
                        <span> от {info.rate.creditAmount.from} ₽</span>
                        {info.rate.creditAmount.to ? <span> до {info.rate.creditAmount.to} ₽</span> : ''}
                        <div>
                            На срок до {info.rate.periods[0].term.to / 12}
                            {info.rate.periods[0].term.to / 12 % 10 === 1
                                ? ' года'
                                : ' лет'}
                        </div>
                    </div>
                    <div className={classes.requirements}>
                        <div>Условия</div>
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
                        <span>лицензия № {info.organization.license}</span>
                    </div>
                </div>
                : 'No data'
            }
            <div className={classes.button}>
                <Link to='/mainPage'>На главную</Link>
            </div>
        </div>
    )
}

export default OfferPage