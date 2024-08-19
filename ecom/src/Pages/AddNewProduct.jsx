import axios from 'axios';
import React, { useState } from 'react';

const AddNewProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState();

    const handleForm = e => {
        e.preventDefault();
        axios.post("http://localhost:8080/products/add",
            {
                name: name,
                price: price,
                image: image
            },
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                if (response.data === true) {
                    e.target.reset();
                    setName("");
                    setPrice(0);
                    alert("product added!");
                } else {
                    alert("failed to add")
                    console.log(response);
                }
            })
            .catch((error) => {
                window.alert("file size is big!")
                console.log(error);
            });
    }
    return (
        <section className='py-5 bg-primary'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <form onSubmit={handleForm} className='border rounded rounded-2 py-4 px-3'>
                            <h4 className='text-center mb-3'>Add New Product</h4>
                            <div className="row justify-content-center">
                                <div className="col-md-12">
                                    <input type="text" name='name' value={name} onChange={e => setName(e.target.value)} placeholder='Name' required className='form-control w-100 mb-3' />
                                </div>
                                <div className="col-md-12">
                                    <input type="number" name='price' min={0} minLength={0} value={price} onChange={e => setPrice(e.target.value)} placeholder='Price' required className='form-control w-100 mb-3' />
                                </div>
                                <div className="col-md-12">
                                    <input type="file" name='image' onChange={e => setImage(e.target.files[0])} accept='image/*' placeholder='Image' required className='form-control w-100 mb-4' />
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
