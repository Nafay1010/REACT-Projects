const Header = () => {
    return ( 
        <nav className="navbar">
            <img src={require('./Logo.jpg')} alt="" className='logo'/>
            <h3>Home</h3>
            <h3>Items</h3>
            {/* <button className='checkoutbtn'>Checkout</button> */}
        </nav>
     );
}
 
export default Header;
