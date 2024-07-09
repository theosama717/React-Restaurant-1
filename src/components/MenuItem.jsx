import '../styles/MenuItem.scss'


const MenuItem = ({imgsrc}) => {
  return (
    <div className="menu-item">
        <img src={imgsrc} alt="" />
    </div>
  )
}

export default MenuItem