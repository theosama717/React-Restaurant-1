import '../styles/SingleCard.scss'


const Cards = ({imgsrc, heading}) => {
  return (
    <div className='card'>
        <div className="card-img">
            <img src={imgsrc} alt="" />
        </div>

        <div>
            <h4>{heading}</h4>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    </div>
  )
}

export default Cards