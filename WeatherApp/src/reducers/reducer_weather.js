import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
    switch(action.type){
        case FETCH_WEATHER:
            //These both work

            // return state.concat([action.payload.data]);  == return [state, ...[action.payload.data]]
            return [ action.payload.data, ...state]; // equivelent to action.payload.data.concat(state);  [city, city, city] NOT [city, [city, city]]
        }
        
    return state;
}