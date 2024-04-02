import axios from 'axios';
import React, { useEffect, useState } from 'react';

const User = () => {
    const [array, setarray] = useState([]);
const [loading, setloading] = useState(false);
    useEffect(() => {
        setloading(true)
        axios.get("https://mongoose-server-indol.vercel.app/users")
        .then(res=>{
            setarray(res.data)
            setloading(false)
        })
        .catch(err=>{
            console.log(err);
        })
    }, []);
    return (
        <section>
            <h1>User Information</h1>
            <div>
                {
array.map(element=> <Card key={element._id} card={element} setloading={setloading}></Card>)
                }
            </div>
        </section>
    );
};

const Card = ({ card, setloading }) => {

    const handledelete = (id) => {
        // console.log(id);
        setloading(true)

        axios.delete(`https://mongoose-server-indol.vercel.app/items/${id}`)
            .then(res => {
                console.log(res);
                setloading(false)
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className='w-80 border-2 flex flex-col  h-72'>
            <h1>Name: {card?.name}</h1>
            <h1>price: {card?.age}</h1>
            <h1>Details: {card?.details}</h1>
            <div className='mt-auto mx-auto my-3'>
                <button onClick={() => handledelete(card._id)} className='btn btn-success'>Delete</button>
            </div>

        </div>
    )
}

export default User;