import '../styles/Hero.scss'
import HeroImg from '../assets/hero_image.png'



const Hero = () => {
  return (
    <div className='container hero-con'>
        <div className="hero-img">
            <img src={HeroImg} alt="hero-img" />
        </div>

        <div className="hero-content">
            <p className="green-tag">50 % OFF All Products</p>
            <h1>Enjoy Your Delicious Food</h1>
            <p className='info'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus aspernatur ullam id soluta fugit adipisci iusto beatae voluptatem similique voluptas?</p>
            <button type="button" className="explore-btn">Explore Now</button>
        </div>
    </div>
  )
}

export default Hero