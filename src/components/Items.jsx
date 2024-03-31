import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Items = () => {
const [array, setarray] = useState([]);
const [loading, setloading] = useState(false);
    useEffect(() => {
    setloading(true)
        axios.get(`http://localhost:3000/items`)
        .then(res=>{
            console.log(res.data);
            setarray(res.data)
            setloading(false)
        })
        .catch(error=>{
            console.log(error);
        })
    }, []);
    return (
        <section>
            <h1 className='text-3xl text-center my-5'>Your Items</h1>
            <div className='flex flex-wrap justify-center gap-10'>
                {
                    loading == true ?
                    "loading"
                    :
                    array.map(element=><Card key={element._id} card={element}></Card> )
                }
            </div>
        </section>
    );
};

const Card =({card})=>{
    return(
        <div className='w-80 border-2 h-full'>
            <h1>Name: {card?.name}</h1>
            <h1>price: {card?.price}</h1>
            <h1>Details: {card?.details}</h1>
            <div>
                <button>Delete</button>
            </div>

        </div>
    )
}

export default Items;