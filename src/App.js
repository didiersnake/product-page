import Navbar from "./components/Navbar";
import Product from "./features/product/Product";
import CartItems, { cartItems } from "./features/CartItems";


function App() {
  return (
    <div className="md:px-44">
      <Navbar />
      <Product />
      <CartItems />
    </div>
  );
}

export default App;
