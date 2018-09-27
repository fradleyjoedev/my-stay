import { removeDuplicates } from '../helpers/hotelHelper';
const axios = require('axios');

export const DATA_SET = 'DATA_SET';
export const FILTER_SET = 'FILTER_SET';
export const FILTER_DATA_SET = 'FILTER_DATA_SET';
export const SORTING_DATA_SET = 'SORTING_DATA_SET';

export function storeHotelData(){
    return dispatch => {
        axios.get('../src/data/data.json')
        .then( response => {
            //order by name of hotel
            let hotelData = response.data.sort((a, b) => a.name.localeCompare(b.name));  
            dispatch({
                type: DATA_SET,
                payload:{
                    data: hotelData
                }
            });  

           dispatch(storeFilter(hotelData));
        })
        .catch(function (error) {
            console.log("Error getting data: " + error);
        });
    }  
}

function storeFilter(data){
    let name = [];
    let starRating = [];
    let facilities = [];

    data.map((group, key) => {
        for (var i = 0; i < Object.keys(group).length; i++) {
            switch(Object.keys(group)[i]){
                case "name":
                    name.push(group[Object.keys(group)[i]])
                    name = removeDuplicates(name)
                    break;
        
                case "starRating":
                    starRating.push(group[Object.keys(group)[i]])
                    starRating = removeDuplicates(starRating)
                    break;
                
                case "facilities":
                    group[Object.keys(group)[i]].map((facility, keyVal) => {
                        facilities.push(facility)
                        facilities = removeDuplicates(facilities)
                    });
                    break;
                default:
                    break;
            }
        }     
    });

    return dispatch => {
		dispatch({
			type: FILTER_SET,
			payload:{
				filters: {
                    hotelNames: name,
                    stars:  starRating,
                    facilities: facilities
                }
			}
		});
	} 
}

export function filterList(data, selectedFilters, filterName, filterValue){
    selectedFilters.push({[filterName]: filterValue});

    let filteredData = data.filter(function (value) {
        if(Array.isArray(value[filterName]))
        {
            return value[filterName].includes(filterValue);
        }
        else {
            return value[filterName] === filterValue;
        }     
    });

     return dispatch => {
		dispatch({
            type: FILTER_DATA_SET,
            payload:{
                filteredData: filteredData,
                selectedFilters: selectedFilters
            }
        })
	}  
}

export function clearFilters(){
     return dispatch => {
		dispatch({
            type: FILTER_DATA_SET,
            payload:{
                filteredData: null,
                selectedFilters: []
            }
        })
	}  
}

export function sortData(descending){
    return dispatch => {
        dispatch({
            type: SORTING_DATA_SET,
            payload:{
                sorting: descending ? 'desc' : 'asc'
            }
        });  
    }  
}