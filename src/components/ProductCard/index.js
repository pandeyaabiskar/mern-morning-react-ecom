import {Link} from 'react-router-dom';

function ProductCard(props) {
    return (
        <div className="product-card">
          <Link to={`/details/${props.data._id}`}>
            <div className="product-image">
              <img src={props.data.image} />
            </div>
            <div className="product-info">
              <h5>{props.data.title}</h5>
              <h6>${props.data.price}</h6>
            </div>
          </Link>
        </div>
    )
}

export default ProductCard