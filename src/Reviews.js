import UserImage from 
function Reviews(props){
    const {name = 'Anonymous', rating = '0', description} = props
    return(
        <>
        
        <h2>{name}</h2>
        <h2>{rating}</h2>
        <h2>{description}</h2>
        </>
    );
}

export default Reviews;