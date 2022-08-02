import { useState } from "react";




const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');

    const handleAdd = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('Blog Added');
        }).catch(err=> {
            console.log('Error', err);
        })
    }

    return (
        <div> 
            <h1 className='Header'>Adding Blog</h1>
            <div className="create">
            <form>
                <label>Blog Title: </label>
                <input 
                type="text" 
                required
                value={title}
                onChange = {(e)=> setTitle(e.target.value)}                
                />
                <label>Blog Content: </label>
                <textarea
                required
                value={body}
                onChange = {(e)=> setBody(e.target.value)}                
                ></textarea>
                <label>Blog Author: </label>
                <select
                required
                value={author}
                onChange = {(e)=> setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>

                <button onClick={handleAdd}>Add Blog</button>
            </form>
            </div>
        </div>
    );
}
 
export default AddBlog;

