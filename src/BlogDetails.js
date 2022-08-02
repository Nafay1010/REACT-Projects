import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
    const { id } = useParams();
    const {data:blog, error, pending} = useFetch('http://localhost:8000/blogs/' + id);
    return ( 
        <div className="blog-details">
          {pending && <div>Loading...</div>}
          {error && <div>error</div>}
          {blog && (
          <div>
          <h1 className='Header'>{blog.title}</h1>
          <p className="body">{blog.body}</p>
          <div className="author">
            <h3>Written By: {blog.author}</h3>
          </div>
          </div>
          )}
        </div>
     );
}
 
export default BlogDetails;