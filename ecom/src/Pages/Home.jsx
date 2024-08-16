import React, { useEffect, useState } from 'react'
import SingleProduct from '../Inc/SingleProduct';

const Home = () => {
    const [html, setHtml] = useState(<h2>please wait....</h2>);
    const [change, setChange] = useState(1);
    useEffect(() => {
        setHtml(<div className="row">
            <div className="col-lg-4 col-md-6">
                <SingleProduct
                    name="Mouse"
                    product_id={25}
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/3-Tasten-Maus_Microsoft.jpg/640px-3-Tasten-Maus_Microsoft.jpg"
                    price={1500}
                    addToCart={() => addToCart(25)}
                    deleteProduct={() => deleteProduct(25)}
                />
            </div>
            <div className="col-lg-4 col-md-6">
                <SingleProduct
                    name="Mouse"
                    product_id={25}
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/3-Tasten-Maus_Microsoft.jpg/640px-3-Tasten-Maus_Microsoft.jpg"
                    price={1500}
                    addToCart={() => addToCart(25)}
                    deleteProduct={() => deleteProduct(25)}
                />
            </div>
            <div className="col-lg-4 col-md-6">
                <SingleProduct
                    name="Mouse"
                    product_id={25}
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/3-Tasten-Maus_Microsoft.jpg/640px-3-Tasten-Maus_Microsoft.jpg"
                    price={1500}
                    addToCart={() => addToCart(25)}
                    deleteProduct={() => deleteProduct(25)}
                />
            </div>
            <div className="col-lg-4 col-md-6">
                <SingleProduct
                    name="Mouse"
                    product_id={25}
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/3-Tasten-Maus_Microsoft.jpg/640px-3-Tasten-Maus_Microsoft.jpg"
                    price={1500}
                    addToCart={() => addToCart(25)}
                    deleteProduct={() => deleteProduct(25)}
                />
            </div>
            <div className="col-lg-4 col-md-6">
                <SingleProduct
                    name="Mouse"
                    product_id={25}
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/3-Tasten-Maus_Microsoft.jpg/640px-3-Tasten-Maus_Microsoft.jpg"
                    price={1500}
                    addToCart={() => addToCart(25)}
                    deleteProduct={() => deleteProduct(25)}
                />
            </div>
            <div className="col-lg-4 col-md-6">
                <SingleProduct
                    name="Mouse"
                    product_id={25}
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/3-Tasten-Maus_Microsoft.jpg/640px-3-Tasten-Maus_Microsoft.jpg"
                    price={1500}
                    addToCart={() => addToCart(25)}
                    deleteProduct={() => deleteProduct(25)}
                />
            </div>
        </div>)
    }, [change])

    const addToCart = (id) => {
        // setChange(change + 1);
        console.log(id);
    }

    const deleteProduct = (id) => {
        // setChange(change + 1);
        console.log(id);
    }

    return (
        <section className='py-5 bg-primary'>
            <div className="container">
                {html}
            </div>
        </section>
    )
}

export default Home
