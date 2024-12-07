import Cart from "./Cart";
import {useState} from 'react'

function Selection(props) {
  const [clicked, setClicked] = useState(false)
  function gotoCart(){
    setClicked(true)
  }
  if (clicked === true)
    return <Cart price = {props.price}/>
  return (
    <>
      <h3>Welcome to amazon!</h3>
      <h3>Selection Page</h3>

      <h2>Price : {props.price}</h2>

      <button onClick = {gotoCart}>
        Go to Cart
      </button>  
    </>
  );
}

export default Selection;