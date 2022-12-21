import './product.css'

const Product = ({  }) => {
    return (
        <div className="product-item">
            <img
                width={200}
                height={150}
                src="https://cdn.daylambanh.edu.vn/wp-content/uploads/2020/10/cong-thuc-lam-hamburger.jpg"
                alt=""
            />
            <div className='desc'>
                <h5>Hamburger</h5>
                <p>100$</p>
                <button>Add to cart</button>
            </div>
        </div>
    );
}

export default Product;