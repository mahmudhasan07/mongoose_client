import axios from 'axios';
import React from 'react';

const Additem = () => {


    const handleitem =(e)=>{
        e.preventDefault()
const from = e.target
        const name = from.name.value
        const price = from.price.value
        const details = from.details.value
        console.log(name,price,details);
        const product = {name,price,details}
        console.log(product);
        axios.post("http://localhost:3000/additems", product)
        .then((res)=>{
            console.log(res.data);
        })
        .catch(error=>{
            console.log(error);
        })


    }
    return (
        
            <div className='border-2 w-1/3 mx-auto my-16 p-4 bg-gray-800 text-white rounded-2xl'>
                <h1 className='text-3xl font-semibold text-center my-5'>Add Your Product</h1>
                <form onSubmit={handleitem} className='my-5'>
                    <div>
                        <label>Product Name</label> <br />
                        <input name='name' type="text" className='w-80 border-2 rounded-xl p-1' />
                    </div>
                    <div>
                        <label>Product Name</label> <br />
                        <input type="number" name='price' className='w-80 border-2 rounded-xl p-1' />
                    </div>
                    <div>
                        <label>Product Name</label> <br />
                        <textarea  name="details" id="" className='w-full rounded-xl p-2' rows="5"></textarea>
                    </div>
                    <div className=' w-fit mx-auto my-5'>
                        <button className='btn btn-primary'>Add Item</button>
                    </div>
                </form>
            </div>

    );
};

export default Additem;