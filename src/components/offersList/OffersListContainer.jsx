import React from 'react';
import { connect } from 'react-redux';
import { addData, setSelectedSort, sortData } from '../../redux/reducers/offersReducer';
import OffersList from './OffersList';

const OffersListContainer = (props) => {
    console.log(props.offersData)
    const addData = (pageNumber) => {
        props.addData(props.offersData, pageNumber)
    }

    return (
        <OffersList offersData={props.offersData} totalPagesNumber={props.totalPagesNumber}
            addData={addData} sortData={props.sortData} pageNumber={props.pageNumber}
            selectedSort={props.selectedSort} setSelectedSort={props.setSelectedSort} />
    )
}

const mapStateToProps = (state) => {
    return {
        offersData: state.offersData.offersData,
        pageNumber: state.offersData.pageNumber,
        totalPagesNumber: state.offersData.totalPagesNumber,
        selectedSort: state.offersData.selectedSort
    }
}

export default connect(mapStateToProps, { addData, sortData, setSelectedSort })(OffersListContainer)