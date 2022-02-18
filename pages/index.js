import AddProduct from '../src/Components/AddProduct/AddProduct';
import Checkout from '../src/Components/Checkout/Checkout/Checkout';
import Banner from '../src/Components/Home/Banner/Banner';
import BestSells from '../src/Components/Home/BestSells/BestSells';
// import Blogs from '../src/Components/Home/Blogs/Blogs';
import Brands from '../src/Components/Home/Brands/Brands';
import Categories from '../src/Components/Home/Categories/Categories';
import DealsofDay from '../src/Components/Home/DealsofDay/DealsofDay';
import DeliverySteps from '../src/Components/Home/DeliverySteps/DeliverySteps';
import Footer from '../src/Components/Home/Footer/Footer';
import Navbar from '../src/Components/Home/Navbar/Navbar';
import NewsLetter from '../src/Components/Home/NewsLetter/NewsLetter';
import PopularProducts from '../src/Components/Home/PopularProducts/PopularProducts';
import ProductOffer from '../src/Components/Home/ProductOffer/ProductOffer';
import Reviews from '../src/Components/Home/Reviews/Reviews';
import Login from '../src/Components/Login/Login/Login';
import AllProducts from '../src/Components/Products/AllProducts/AllProducts';
import Register from '../src/Components/Register/Register';
import Vendors from '../src/Components/Vendors/Vendors/Vendors';
import AuthProvider from '../src/context/AuthProvider/AuthProvider';


export default function Home({ reviews, products, blogs }) {
  // console.log(products);
  return (
    <div className="box-border ">

      {/* <AuthProvider> */}



        {/* <Navbar></Navbar>
      <Banner></Banner>
      <PopularProducts products={products}></PopularProducts>
      <DealsofDay></DealsofDay>
      <BestSells products={products}></BestSells>
      <Categories></Categories>
      <ProductOffer></ProductOffer>
      <DeliverySteps></DeliverySteps>
      <Reviews reviews={reviews}></Reviews> */}
        {/* <Blogs blogs={blogs}></Blogs> */}
        {/* <Brands></Brands>
      <NewsLetter></NewsLetter>
      <Footer></Footer> */}

        {/* <AllProducts products={products}></AllProducts> */}
        {/* <Vendors></Vendors> */}
        {/* <Checkout products={products}></Checkout> */}
        {/* <VendorsList></VendorsList> */}
        <Register></Register>
        <Login></Login>
        {/* <AddProduct></AddProduct> */}
      {/* </AuthProvider> */}
    </div>
  );
}


export async function getStaticProps() {
  const reviews_res = await fetch('http://foodmart11.herokuapp.com/reviews');
  const reviews = await reviews_res.json();

  const products_res = await fetch('http://foodmart11.herokuapp.com/products');
  const products = await products_res.json();

  const blogs_res = await fetch('http://foodmart11.herokuapp.com/blogs');
  const blogs = await blogs_res.json();

  return {
    props: { reviews, products, blogs }
  }

}
