import React from "react";

export const Products = () => {
    const [data,setData] = React.useState([]);

    const fetchData = () => {
        fetch('http://localhost:8080/posts')
        .then((res) => {
           return res.json();
        .then((data) => {
            setData(data)
        });
    }

    React.useEffect(() => {
        fetchData();
    },[]);


    },[]);

    return ( 
    <>
    <div> 
        {data.map((item) => {
                return (
                <div key={item.id}>
                    <p> {item.name}</p>
                    <p> {item.description}</p>
                    <button> ADD TO CART </button>
                    </div>
                );
        })}
        </div>


         </>
         
    );

   

};