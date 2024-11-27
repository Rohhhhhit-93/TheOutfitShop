import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Button, Card, Container, Navbar } from 'react-bootstrap';
import ProductList from './ProductList';
import Header from './Header';
import Footer from './Footer';
import PaymentInterface from './PaymentInterface';
import NavigationBar from './NavigationBar';

interface Product {
  categories: any;
  description: string;
  image: {
    original: string;
  };
}

const Productdetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>(); // Extract the slug from the URL

  // Explicitly type the state as an array of Product
  const [data, setData] = useState<Product[]>([]);
  useEffect(() => {
    axios
      .get(`https://ecom-shop-api.vercel.app/products/${slug}`, {
        params: { store: "clothing" },
      })
      .then((response) => {
        const responseData = response.data;
        setData([responseData]);
      })

  }, [slug]);

  return (
    <div>
      <Container>
      {data.length === 0 ? (
        <h1 className="loading">Loading....</h1>
      ) : (
        <div>
          <NavigationBar/>
          {data.map((data, index) => (
            // <img src={data.image} alt="" />
            <div className="row" key={index}>
              <div className="product-detail-container">
                <div className="product-images">
                  {/* Main Product Image */}
                  <div className="image-main">
                    {data.categories.name}
                    <img src={data.image.original} alt="Men's Slim-Fit Denim Jacket" id="main-image" />
                  </div>

                  {/* Thumbnails for changing the main image */}
                  {/* <div className="image-thumbnails">
                    <img
                        src="images/jacket-front.jpg"
                        alt="Front View"
                        className="thumbnail"
                        onClick={() => changeImage('images/jacket-front.jpg')}
                    />
                    <img
                        src="images/jacket-back.jpg"
                        alt="Back View"
                        className="thumbnail"
                        onClick={() => changeImage('images/jacket-back.jpg')}
                    />
                    <img
                        src="images/jacket-side.jpg"
                        alt="Side View"
                        className="thumbnail"
                        onClick={() => changeImage('images/jacket-side.jpg')}
                    />
                </div> */}
                </div>
                      
                <div className="product-details">
                <h1>Clothing</h1>
                <hr></hr>
                  <h1>Men's Slim-Fit Denim Jacket</h1>
                  <p className="price">
                    $79.99 <span className="discount">20% OFF</span>
                  </p>
                  <p className="rating">★★★★☆ (4.5 out of 5)</p>

                  {/* Size selection dropdown */}
                  <div className="size-selection">
                    <label htmlFor="size">Size: XS | S | M | L</label>
                    {/* <select id="size" value={selectedSize} onChange={handleSizeChange}>
                        {sizes.map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select> */}
                  </div>

                  {/* Add to Cart Button */}
                  {/* <div className="cta-buttons">
                    <button className="add-to-cart" onClick={addToCart}>
                        Add to Cart
                    </button>
                    <button className="buy-now" onClick={addToCart}>
                        Buy Now
                    </button>
                </div> */}

                  {/* Product Description */}
                  <div className="description">
                    <h3>Description:</h3>
                    <p>
                      A stylish, comfortable slim-fit denim jacket made of high-quality cotton.
                      Perfect for casual and semi-formal occasions.
                    </p>
                  </div>

                  {/* Shipping & Returns */}
                  <div className="shipping-returns">
                    <p>Free shipping on orders over $50. Free returns within 30 days.</p>
                    <Button variant="success">BUY NOW</Button>
                  </div>
                </div>
              </div>
              <ProductList />
              <Footer />
              <PaymentInterface />
            </div>
          ))}
        </div>
      )}
      </Container>
      
    </div>
  );
};

export default Productdetail;
