import img from '../assets/Globe.png'

function Header(){
 return(
    <header>
        <img src={img} alt="Globe" />
        <span>My travel journal</span>
    </header>
 )
}

export default Header