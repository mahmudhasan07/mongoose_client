import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const id = useParams()

    const ref = useRef({})

    // let data = {}
    console.log(ref);

    useEffect(() => {
        axios.get(`http://localhost:3000/itemInfo/${id?.id}`)
            .then(res => {
                // console.log(res.data);
                ref.current = res.data
            })
            .catch(error => {
                console.log(error);
            })
    }, [id]);
    console.log(id);
    const handleuser = (e) => {
        e.preventDefault()
        const from = e.target
        const name = from.name.value
        const price = from.price.value
        const details = from.details.value
        // console.log(name, price, details);

        axios.patch(`http://localhost:3000/updateInfo/${id.id}`, { price })
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <section className=' flex justify-center items-center'>
            <div className='mt-20 w-1/3 p-2 border-2 rounded-xl'>
                <form action="" onSubmit={handleuser}>
                    <div>
                        <label>Product Name</label> <br />
                        <input defaultValue={ref?.current?.name} name='name' type="text" className='w-80 border-2 rounded-xl p-1' />
                    </div>
                    <div>
                        <label>Product Price</label> <br />
                        <input defaultValue={ref?.current?.price} type="number" name='price' className='w-80 border-2 rounded-xl p-1' />
                    </div>
                    <div>
                        <label>Product Details</label> <br />
                        <textarea defaultValue={ref.current?.details} name="details" id="" className='w-full rounded-xl p-2' rows="5"></textarea>
                    </div>
                    <div className=' w-fit mx-auto my-5'>
                        <button className='btn btn-primary'>Add Item</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default UpdateUser;