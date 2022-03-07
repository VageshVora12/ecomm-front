import React from 'react';
import{Form} from 'react-bootstrap';

const FilterComponent =(props)=>{
    const onHandleChange=(e)=>{
        props.setSortby(e.target.value);
        //console.log(e.target.value);
    
    }
    return(
        <React.Fragment>
            <Form.Select onChange ={onHandleChange}>
                <option value='-1'>HIGH TO LOW</option>
                <option value='1'>LOW TO HIGH</option>
            </Form.Select>
        </React.Fragment>
    )
}
export default FilterComponent;