import { Link } from 'react-router-dom';

const navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Blogs Junction</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Add Blog</Link>
            </div>
        </nav>
    );
}
 
export default navbar;
