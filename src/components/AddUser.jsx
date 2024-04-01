import React from 'react';

const AddUser = () => {

    const handleuser =(e)=>{
        e.preventDefault()
        const from = e.target
        const name = from.name.value
        const age = from.age.value
        const details = from.details.value
    }
    return (
        <section>
            <div>
                <form action="" onSubmit={handleuser}>
                    <div>
                        <label>User Name</label> <br />
                        <input name='name' type="text" className='w-80 border-2 rounded-xl p-1' />
                    </div>
                    <div>
                        <label>User Age</label> <br />
                        <input type="number" name='age' className='w-80 border-2 rounded-xl p-1' />
                    </div>
                    <div>
                        <label>User Details</label> <br />
                        <textarea name="details" id="" className='w-full rounded-xl p-2' rows="5"></textarea>
                    </div>
                    <div className=' w-fit mx-auto my-5'>
                        <button className='btn btn-primary'>Add Item</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddUser;