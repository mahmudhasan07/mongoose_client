import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useNavigate } from 'react-router-dom';

const Items = () => {
    const [array, setarray] = useState([]);
    const [loading, setloading] = useState(false);
    useEffect(() => {
        setloading(true)
        axios.get(`https://mongoose-server-indol.vercel.app/items`)
            .then(res => {
                console.log(res.data);
                setarray(res.data)
                setloading(false)
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    return (
        <section>
            <h1 className='text-3xl text-center my-5'>Your Items</h1>
            <div className=' flex flex-wrap justify-center gap-16'>
                {
                    loading == true ?
                        "loading"
                        :
                        array.map((element, idx) => <Card key={element._id} setloading={setloading} id={idx} card={element}></Card>)
                }
            </div>
        </section>
    );
};

const Card = ({ card, setloading, id }) => {
    const ref = useRef(null)
    const inView = useInView(ref)
    const navigate = useNavigate()

    useEffect(()=>{
        inView
    },[inView])

    const handledelete = (id) => {
        // console.log(id);
        setloading(true)

        axios.delete(`https://mongoose-server-indol.vercel.app/items/${id}`)
            .then(res => {
                console.log(res);
                alert("Successfully Delete")
                setloading(false)
            })
            .catch(err => {
                console.log(err);
                alert("Unsuccessfully to Delete")
            })
    }


    const handleupdate =(id)=>{
        navigate(id)
    }

    return (
        <motion.div ref={ref} initial={{ x: -500, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.5, delay: id * 1.5 }}  className='w-80 border-2 flex flex-col  h-full'>
            <h1 className='text-4xl font-bold'>Name: {card?.name}</h1>
            <h1 className='text-3xl font-bold'>price: {card?.price}</h1>
            <h1 className='my-3 text-xl font-semibold'>Details: {card?.details}</h1>
            <div className='mt-auto mx-auto my-3 space-x-3'>
                <button onClick={() => handleupdate(card._id)} className='btn btn-success'>Update</button>
                <button onClick={() => handledelete(card._id)} className='btn btn-success'>Delete</button>
            </div>

        </motion.div>
    )
}

export default Items;