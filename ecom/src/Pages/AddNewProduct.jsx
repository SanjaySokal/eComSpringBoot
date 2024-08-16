import React from 'react'

const AddNewProduct = () => {
    return (
        <section className='py-5 bg-primary'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <form className='border rounded rounded-2 py-4 px-3'>
                            <h4 className='text-center mb-3'>Add New Product</h4>
                            <div className="row justify-content-center">
                                <div className="col-md-12">
                                    <input type="text" name='name' placeholder='Name' required className='form-control w-100 mb-3' />
                                </div>
                                <div className="col-md-12">
                                    <input type="number" name='price' placeholder='Price' required className='form-control w-100 mb-3' />
                                </div>
                                <div className="col-md-12">
                                    <input type="file" name='image' accept='image/*' placeholder='Image' required className='form-control w-100 mb-4' />
                                </div>
                                <div className="col-md-6">
                                    <button type='submit' className='btn btn-secondary w-100'>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddNewProduct
