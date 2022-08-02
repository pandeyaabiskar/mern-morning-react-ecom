import "./index.css";
import useFetch from "../../hooks";
import {useParams, useNavigate} from 'react-router-dom';

function ProductDetail() {
	const { productID } = useParams();
	const navigate = useNavigate();
	const {data:productData, isPending, error} = useFetch(`http://localhost:4000/api/products/${productID}`);
	

	const redirectToHome = () => {
		navigate('/');
	}

  return (
	!isPending && !error ? (
    <section className="product">
      <div className="product__photo">
        <div className="photo-container">
          <div className="photo-main">
            <div className="controls">
              <i className="material-icons">share</i>
              <i className="material-icons">favorite_border</i>
            </div>
            <img
              src={productData.image}
              alt="green apple slice"
            />
          </div>
          <div className="photo-album">
            <ul>
              <li>
                <img
                  src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png"
                  alt="green apple"
                />
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png"
                  alt="half apple"
                />
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png"
                  alt="green apple"
                />
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png"
                  alt="apple top"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="product__info">
        <div className="title">
          <h1>{productData.title}</h1>
          <span>COD: 45999</span>
        </div>
        <div className="price">
          R$ <span>{productData.price}</span>
        </div>
        <div className="variant">
          <h3>SELECT A COLOR</h3>
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png"
                alt="green apple"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png"
                alt="yellow apple"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png"
                alt="orange apple"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png"
                alt="red apple"
              />
            </li>
          </ul>
        </div>
        <div className="description">
          <h3>BENEFITS</h3>
          <ul>
            <li>Apples are nutricious</li>
            <li>Apples may be good for weight loss</li>
            <li>Apples may be good for bone health</li>
            <li>They're linked to a lowest risk of diabetes</li>
          </ul>
        </div>
        <button className="buy--btn">ADD TO CART</button>
      </div>
	  <button onClick={redirectToHome}>Go to Home Page</button>
    </section>) : (
		<h1>Data is Loading...</h1>
	)
  );
}

export default ProductDetail;
