import './cart.css'

const Cart = () => {
    return (
        <div className='cart'>
            <h5>Cart</h5>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='product'>
                            <div className='product__image'>
                                <img
                                    width={100}
                                    height={75}
                                    src="https://cdn.daylambanh.edu.vn/wp-content/uploads/2020/10/cong-thuc-lam-hamburger.jpg"
                                    alt=""
                                />
                            </div>
                            <div className='product__desc'>
                                <h6>Hamburger</h6>
                                <p>Messi</p>
                            </div>
                        </td>
                        <td>2</td>
                        <td>100</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Cart;