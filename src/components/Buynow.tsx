import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import SimpleSlider from "./SimpleSlider";
import Categories from "./Varieties";
import Sale from "./Sale";
import ProductList from "./ProductList";
import Footer from "./Footer";
import PaymentInterface from "./PaymentInterface";

export default function Buynow() {
    return (
        <>
      <NavigationBar />
    <SimpleSlider />
    <Categories />
    <Sale />
    <ProductList />
    <Footer />
    <PaymentInterface />
        </>
    );
}