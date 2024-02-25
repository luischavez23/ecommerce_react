import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <div className="md:flex md:justify-between">
            <h3>Games App</h3>
            <div className="flex">
                <a href="#">Video Juegos</a>
                <a href="#">Consolas</a>
                <a href="#">Accesorios</a>
                <CartWidget />
            </div>
        </div>
    )
}

export default NavBar;