import React,{useEffect, useState} from 'react';
import CategoryComponent from './categoryComponent';
import FilterComponent from './filterComponent';
import ProductComponent from './productComponent';
import {Row , Col} from 'react-bootstrap';
const ShoppingComponent=()=>{
    const[categoryid,setCategoryid] = useState([]);
    const[sortby , setSortby] = useState();

    useEffect(()=>{
    setCategoryid(categoryid)        
    },[categoryid]);
    useEffect(()=>{
        setSortby(sortby);
    },[sortby]);


    return(
        <React.Fragment>
            <Row>
                <Col lg={3}>
                    <CategoryComponent setCategoryid={setCategoryid} categoryid={categoryid}/>

                    <FilterComponent setSortby={setSortby}/>
                </Col>
                <Col>
                    <ProductComponent value={{categoryid:categoryid,sortby:sortby}}/>
                </Col>
            </Row>

        </React.Fragment>
    )
}
export default ShoppingComponent;