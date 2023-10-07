import product from './image-product-1-thumbnail.jpg';
import deleteIcon from './icon-delete.svg';

export default function Cart() {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        <li>
          <div>
            <img src={product} alt="" />
            <div>
              <p>Fall Limited Edition Sneakers</p>
              <p>$125 x 3 $375.00</p>
            </div>
              <button>{deleteIcon}</button>
          </div>
        </li>

        <button>Checkout</button>
      </ul>
    </div>
  )
}
