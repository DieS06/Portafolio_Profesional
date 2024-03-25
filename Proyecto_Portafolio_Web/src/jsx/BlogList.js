import "../css/home.css";

const BlogList = (props) => {
    const blogs = props.blogs;

    return (        
        <div className="blog-list">
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <h3>Writen by {blog.author}</h3>
                <p>{blog.body}</p>
            </div>
        ))}
        </div>
    );
}
 
export default BlogList;