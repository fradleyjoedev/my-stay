import { DATA_SET, FILTER_SET, FILTER_DATA_SET, SORTING_DATA_SET } from '../actions/hotelActions';

export const HotelReducer = (state = {
   data: null,
   filters: null,
   filteredData : null,
   selectedFilters: [],
   sorting: ''
}, action) => {
    switch (action.type) {
        case DATA_SET:
            return {
                ...state,
                data: action.payload.data
            }
        case FILTER_SET:
            return {
                ...state,
                filters: action.payload.filters
            }
        case FILTER_DATA_SET:
            return {
                ...state,
                filteredData: action.payload.filteredData,
                selectedFilters: action.payload.selectedFilters
        }
        case SORTING_DATA_SET:
            return {
                ...state,
                sorting: action.payload.sorting
        }
        default:
            return state
    }
}