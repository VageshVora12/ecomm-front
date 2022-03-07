import React,{useState,useEffect} from 'react';
import {Row,Col,Card} from 'react-bootstrap'

const ProductComponent=(props)=>{
    const[product,setProduct] = useState([]);
    const [imagepath,setImagePath] = useState("");
    useEffect(()=>{
        fetch('http://localhost:9000/product/product-list',{
            method:'POST',
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
            },
            // body:JSON.stringify({cateId:props.value.categoryid, sortby:props.value.sortby})
        }).then(function(response){
            return response.json();
        }).then((data)=>{
            console.log(data.data)
            setProduct(data.data);
            setImagePath(data.imgpath)
        });
    },[props.value])
 return(
     <React.Fragment>
         <h1 className="App">Product Page</h1>
         
            <Row>
            {product.map((product,index)=>{               
             return(
                <Col key={index}>
                    <Card style={{ width: '15rem' }}>
                    <img src={imagepath+product.image}/>
                <Card.Body>
               
                    <Card.Title> NAME : {product.name}
                    PRICE : {product.price}
                    CATEGORY : {product.categoryname.name}
                    
                    </Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                   
                </Card.Body>
                </Card>
                </Col>
                 )
             })}
                 
            
            </Row>
             

        
     </React.Fragment>
 )   
}
export default ProductComponent;