const Cards = ({content}) => {
    return(
        <>
            <div className="card border_none">
                <div className="card-body">
                    <p>{content}</p>
                </div>
            </div>
        </>
    );
}
export default Cards;
