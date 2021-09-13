import React from 'react';
import OfferItem from '../offerItem/OfferItem';
import classes from './OffersList.module.css';

const OffersList = (props) => {
    // console.log(props.selectedSort)
    const addMore = () => {
        props.addData(props.pageNumber)
    }

    const sortOffers = (sort) => {
        props.setSelectedSort(sort)
        props.sortData(sort)
        // console.log(sort)
    }

    return (
        <div className={classes.offersListWrapper}>
            <div className={classes.title}>Список финансовых предложений</div>
            <div className={classes.select}>
                <select value={props.selectedSort} onChange={event => sortOffers(event.target.value)}>
                    <option disabled>Сортировка</option>
                    <option value='rate'>По ставке</option>
                    <option value='amount'>По сумме</option>
                </select>
            </div>
            {(props.offersData)
                ? <div className={classes.offersItemsWrapper}>
                    {props.offersData.map(offer =>
                        offer.id < props.pageNumber * 10 + 1
                            ? <OfferItem key={offer.id} itemData={offer} getPageData={props.getPageData} />
                            : ''
                    )}
                </div>
                : <span>no data</span>}
            <div className={classes.button}>
                {props.pageNumber < props.totalPagesNumber
                    ? <button onClick={() => addMore()}>Показать ещё</button>
                    : ''}
            </div>
        </div>
    )
}

export default OffersList