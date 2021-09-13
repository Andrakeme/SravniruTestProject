import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import OfferPage from './OfferPage';

const OfferPageContainer = (props) => {

    const params = useParams()

    const pageData = props.offersData[params.id - 1]

    return (
        <OfferPage pageData={pageData} />
    )
}

const mapStateToProps = (state) => {
    return {
        offersData: state.offersData.offersData
    }
}

export default connect(mapStateToProps, null)(OfferPageContainer)