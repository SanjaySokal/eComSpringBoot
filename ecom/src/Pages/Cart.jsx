import React, { useEffect, useState } from 'react'

const Cart = () => {
    const [html, setHtml] = useState(<h2>please wait....</h2>);
    useEffect(() => {
        fetch("http://localhost:8080/cart/all").then(res => res.json()).then(res => {
            console.log(res);

            setHtml(
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
                            <td>{ele.products}</td>
                            <td>
                                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/3-Tasten-Maus_Microsoft.jpg/640px-3-Tasten-Maus_Microsoft.jpg"} alt="" width="150px" />
                            </td>
                            <td>Rs. 1500 /-</td>
                            <td>
                                <button className='btn btn-danger'>Remove</button>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>
            )
        }).catch(err => console.log(err));
    }, [])
    return (
        <section className='py-5 bg-primary'>
            <div className="container">
                {html}
            </div>
        </section>
    )
}

export default Cart
