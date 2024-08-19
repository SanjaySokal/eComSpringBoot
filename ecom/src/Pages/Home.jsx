import React, { useEffect, useState } from 'react'
import SingleProduct from '../Inc/SingleProduct';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [html, setHtml] = useState(<h2>please wait....</h2>);
    const [change, setChange] = useState(1);
    const navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:8080/products/all").then(res => res.json()).then(res => {
            if (typeof (res) === "object") {
                setHtml(<div className="row">
                    {res.map((ele, ind) => <div key={ind} className="col-lg-4 col-md-6">
                        <SingleProduct
                            name={ele.name}
                            product_id={ele.id}
                            image={`http://localhost:8080/products/${ele.id}/image`}
                            price={ele.price}
                            addToCart={() => addToCart(ele.id)}
                            deleteProduct={() => deleteProduct(ele.id)}
                        />
                    </div>
                    )}
                </div>)
            }
        }).catch(err => console.log(err));
        // eslint-disable-next-line
    }, [change])

    const addToCart = (id) => {
        fetch("http://localhost:8080/cart/add", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                product: {
                    id: id
                }
            })
        }).then(res => res.json()).then(res => {
            if (res) {
                setChange(change + 1);
                navigate("/cart")
            }
        }).catch(err => console.log(err));
    }

    const deleteProduct = (id) => {
        if (window.confirm("sure wanted to delete!")) {
            fetch("http://localhost:8080/products/delete/" + id).then(res => res.json()).then(res => {
                if (res) {
                    setChange(change + 1);
                    window.alert("deleted");
                }
            }).catch(err => console.log(err));
        }
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
