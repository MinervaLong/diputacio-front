import './card.css'

function Card(){
    return(
        <>
        <div className='card__container'>
        <div className="card">
            <h1>Player's Name</h1>
            <h2 className='card__h2'>Position</h2>
            <h1>Price in €</h1>
            <p>Years old</p>
            <p>Nation</p>
            <p>League</p>
            <p>Team</p>
        </div>
        </div>
        </>
    );
}

export default Card