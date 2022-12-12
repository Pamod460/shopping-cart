import {Link} from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';

const Header = () => {

  return (

    <>
      <Link to="/cart"> <Icon.CartCheckFill/>
      </Link>
      <Link to="/checkout">Checkout</Link>
    </>

  )

}

export default Header;
