import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blog, pending, error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="Home">
          <h1 className='Header'>All Blogs</h1>
            {error && <div>{ error }</div>}
            {pending && <div><h1>Loading...</h1></div>}
            {blog && <BlogList blog = {blog}/>}
        </div>
     );
}
 
export default Home;
