import './product.css'

const Product = ({ item }) => {
    return (
        <div className="product-item">
            <img
                width={200}
                height={150}
                src={item.image}
                alt=""
            />
            <div className='desc'>
                <h5>{item.name}</h5>
                <p>{item.price}</p>
                <button>Add to cart</button>
            </div>
        </div>
    );
}

export default Product;