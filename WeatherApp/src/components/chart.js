import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

function average(data){
    return _.round(_.sum(data)/data.length);
}

export default (props) => { 
    return(
        <div>
            <Sparklines data={props.data} Width={285} Height={200}>
                <SparklinesLine color={props.color}/> 
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>

            <div>{average(props.data)} {props.units} Average</div>
        </div>
    );
}


