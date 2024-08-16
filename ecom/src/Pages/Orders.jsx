import React, { useEffect, useState } from 'react'

const Orders = () => {
    const [html, setHtml] = useState(<h2>please wait....</h2>);
    useEffect(() => {
        setHtml(
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mouse</td>
                        <td>
                            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/3-Tasten-Maus_Microsoft.jpg/640px-3-Tasten-Maus_Microsoft.jpg"} alt="" width="150px" />
                        </td>
                        <td>Rs. 1500 /-</td>
                    </tr>
                </tbody>
            </table>
        )
    }, [])
    return (
        <section className='py-5 bg-primary'>
            <div className="container">
                {html}
            </div>
        </section>
    )
}

export default Orders
