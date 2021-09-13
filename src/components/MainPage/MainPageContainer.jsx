import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setData } from '../../redux/reducers/offersReducer';
import MainPage from './MainPage';

const MainPageContainer = (props) => {

    useEffect(() => {
        console.log('main')
        props.setData(props.data.default)
    }, [])

    return (
        <MainPage />
    )
}

const mapStateToProps = (state) => {
    return {
        offersData: state.offersData.offersData,
    }
}

export default connect(mapStateToProps, { setData })(MainPageContainer)