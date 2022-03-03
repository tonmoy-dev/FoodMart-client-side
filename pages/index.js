import Banner from "../src/Components/Home/Banner/Banner";
import BestSells from "../src/Components/Home/BestSells/BestSells";
// import Blogs from '../src/Components/Home/Blogs/Blogs';
import Brands from "../src/Components/Home/Brands/Brands";
import Categories from "../src/Components/Home/Categories/Categories";
import DealsofDay from "../src/Components/Home/DealsofDay/DealsofDay";
import DeliverySteps from "../src/Components/Home/DeliverySteps/DeliverySteps";
import Footer from "../src/Components/Home/Footer/Footer";
import NewsLetter from "../src/Components/Home/NewsLetter/NewsLetter";
import PopularProducts from "../src/Components/Home/PopularProducts/PopularProducts";
import ProductOffer from "../src/Components/Home/ProductOffer/ProductOffer";
import Reviews from "../src/Components/Home/Reviews/Reviews";
import ManageProducts from "./dashboard/admin/manage-products";
// import ManageProducts from "./dashboard/admin/manage-products";


export default function Home({ reviews, products, blogs }) {
  console.log(products)
  return (
    <div className="">
      <Banner></Banner>
      <PopularProducts products={products}></PopularProducts>
      <DealsofDay></DealsofDay>
      <BestSells products={products}></BestSells>
      <Categories></Categories>
      <ProductOffer></ProductOffer>
      <DeliverySteps></DeliverySteps>
      <Reviews reviews={reviews}></Reviews>
      {/* <Example products={products}></Example> */}
      {/* <Blogs blogs={blogs}></Blogs> */}
      <Brands></Brands>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
      {/* <ManageProducts products={products}></ManageProducts> */}
      <ManageProducts products={products}></ManageProducts>
    </div>
  );
}

export async function getStaticProps() {
  const reviews_res = await fetch("http://localhost:3000/api/reviews");
const reviews = await reviews_res.json();
  // return {
  //   props: {reviews}, // will be passed to the page component as props
  // }


  const products_res = await fetch("http://localhost:3000/api/products");
  const products = await products_res.json();
  console.log(products)

  const blogs_res = await fetch("http://localhost:3000/api/blogs");
  const blogs = await blogs_res.json();

  return {
    props: { reviews, products, blogs },
  }
}

