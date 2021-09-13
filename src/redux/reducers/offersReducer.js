const SET_DATA = 'SET_DATA';
const ADD_DATA = 'ADD_DATA';
const SORT_DATA = 'SORT_DATA';
const SET_SELECTED_SORT = 'SET_SELECTED_SORT';

export const setData = (data) => ({ type: SET_DATA, data })
export const addData = (data, pageNumber) => ({ type: ADD_DATA, data, pageNumber })
export const sortData = (sort) => ({ type: SORT_DATA, sort })
export const setSelectedSort = (selectedSort) => ({ type: SET_SELECTED_SORT, selectedSort })

let initialState = {
    offersData: [],
    pageNumber: 1,
    totalPagesNumber: 1,
    selectedSort: 'Сортировка'
}

const offersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            let totalPagesNumber = Math.ceil(action.data.length / 10)
            let initialData = action.data
            initialData.map(offer => offer.id = initialData.indexOf(offer) + 1)
            return {
                ...state,
                offersData: initialData,
                totalPagesNumber
            }
        case ADD_DATA:
            return {
                ...state,
                pageNumber: state.pageNumber + 1
            }
        case SORT_DATA:
            let sortedData = [...state.offersData]
            switch (action.sort) {
                case 'rate':
                    sortedData.sort((a, b) => {
                        return a.rate.periods[0].rate.from - b.rate.periods[0].rate.from
                    })
                    break
                case 'amount':
                    sortedData.sort((a, b) => {
                        return b.rate.creditAmount.from - a.rate.creditAmount.from
                    })
                    break
                default: return sortedData
            }
            sortedData.map(offer => offer.id = sortedData.indexOf(offer) + 1)
            return {
                ...state,
                offersData: sortedData
            }
        case SET_SELECTED_SORT:
            return {
                ...state,
                selectedSort: action.selectedSort
            }
        default: return state;
    }
}

export default offersReducer