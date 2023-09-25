function Blog(props){
    const {title, description} = props;
    console.log(props);
    return(
        <div>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    );
}


export default Blog;