import SingleCard from './SingleCard'

import '../styles/Cards.scss'

import Discount from '../assets/discount.png'
import Fresh from '../assets/fresh.png'
import Delivery from '../assets/delivery.png'


const Cards = () => {
  return (
    <div className="card-con container">
    <SingleCard imgsrc={Discount} heading='Discount Voucher'/>
    <SingleCard imgsrc={Fresh} heading='Fresh Healthy Food'/>
    <SingleCard imgsrc={Delivery} heading='Fast Home Delivery'/>
    </div>
  )
}

export default Cards