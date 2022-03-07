import React, { useState, useEffect } from 'react';
const CategoryComponent = (props) => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('http://localhost:9000/category/category-list', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
            }

        }).then(function(response) {
            return response.json();
        }).then((data)=>{
            setCategory(data.data);
        })
    }, []);


    const getCategoryId = (e)=>{
        let isCheck = e.target.checked;
       
        if(isCheck){
            props.setCategoryid([...props.categoryid,e.target.value]);
            console.log('props: ' + props.categoryid);
        }else{
            const indexCategory = props.categoryid;
            const index = indexCategory.indexOf(e.target.value);
            indexCategory.splice(index,1)
            props.setCategoryid([...props.categoryid]);
        }
    }
    

    return (
        <React.Fragment>
            <h1>Category Page</h1>
             {category.map((category , index)=>{ 
            return(
                <div key={index}>
                <input value={category._id} id={`inline-${index}`} onChange={getCategoryId} type = 'checkbox'></input>
                {category.name}                
                </div>
            );
        })}
        </React.Fragment>
    )
}
export default CategoryComponent;