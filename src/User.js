function User(props){
    const {Name , Role} = props
    return (
        <>
        <h5>{Name}</h5>
        <p>{Role}</p>
        </>
    );
}

export default User;