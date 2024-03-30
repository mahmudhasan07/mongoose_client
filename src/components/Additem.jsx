import React from 'react';

const Additem = () => {
    return (
        <section>
            <div>
                <h1>Add Your Product</h1>
                <form>
                    <div>
                        <label>Product Name</label>
                        <input type="text" className='w-80 border-2 rounded-xl p-1' />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Additem;