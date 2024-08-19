import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const [html, setHtml] = useState(<h2>please wait....</h2>);
    const [change, setChange] = useState(1);
    const navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:8080/cart/all").then(res => res.json()).then(res => {
            setHtml(
                <>
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Price</th>
                                <th scope="col">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {res.map((ele, ind) => <tr key={ind}>
                                <th scope="row">{ind + 1}</th>
                                <td>{ele.product.name}</td>
                                <td>
                                    <img src={`http://localhost:8080/products/${ele.product.id}/image`} alt="" width="150px" />
                                </td>
                                <td>Rs. {ele.product.price} /-</td>
                                <td>
                                    <button onClick={() => removeCart(ele.cartId)} className='btn btn-danger'>Remove</button>
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                    {res.length > 0 ? <button className='btn btn-warning btn-lg' onClick={() => checkout(res)}>Checkout</button> : <></>}
                </>
            )
        }).catch(err => console.log(err));
        // eslint-disable-next-line
    }, [change])

    function removeCart(id) {
        fetch("http://localhost:8080/cart/delete/" + id).then(res => res.json()).then(res => {
            if (res) {
                setChange(change + 1);
                window.alert("removed");
            }
        }).catch(err => console.log(err));
    }

    function checkout(data) {

        var newData = [];
        for (let i = 0; i < data.length; i++) {
            newData.push({
                id: data[i].cartId,
                product: data[i].product,
            })
        }

        fetch("http://localhost:8080/orders/add", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(newData)
        }).then(res => res.json()).then(res => {
            if (res === true) {
                setChange(change + 1);
                alert("order placed");
                navigate("/orders")
            } else {
                navigate("/orders");
            }
        }).catch(err => console.log(err));
    }

    return (
        <section className='py-5 bg-primary'>
            <div className="container">
                {html}
            </div>
        </section>
    )
}

export default Cart
