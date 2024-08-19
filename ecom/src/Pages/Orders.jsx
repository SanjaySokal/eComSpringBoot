import React, { useEffect, useState } from 'react'

const Orders = () => {
    const [html, setHtml] = useState(<h2>please wait....</h2>);
    const [change, setChange] = useState(1);
    useEffect(() => {
        fetch("http://localhost:8080/orders/all").then(res => res.json()).then(res => {
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
                                    <button onClick={() => removeOrder(ele.id)} className='btn btn-danger'>delivered</button>
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                </>
            )
        }).catch(err => console.log(err));
        // eslint-disable-next-line
    }, [change])

    function removeOrder(id) {
        fetch("http://localhost:8080/orders/delete/" + id).then(res => res.json()).then(res => {
            if (res) {
                setChange(change + 1);
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

export default Orders
