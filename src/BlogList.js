// import AddBlog from "./AddBlog";

import { Link } from "react-router-dom";

const BlogList = ({blog}) => {

    const handledelete = (id) => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: "DELETE"
        }).then(()=>{
            console.log('Blog Deleted');
            window.location.reload();
        })
    }

    return ( 
        <div className="BlogList"> 
            {blog.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                    <h1>{blog.id}: { blog.title }</h1>
                    <h2>- By { blog.author }</h2>
                    </Link>
                    <div className="delete-btn">
                        <button className="DeleteBlog" onClick={()=> handledelete(blog.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>   );
}
 
export default BlogList;
