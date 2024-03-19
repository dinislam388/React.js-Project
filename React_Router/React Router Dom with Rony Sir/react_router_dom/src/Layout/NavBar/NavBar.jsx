import './NavBar.css'
const NavBar = () => {
    return (
        <>
        <h1>This is Nav Bar</h1>
            <div className="header">
                <div className="logo">LoGo</div>
                <div className="navBar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link></Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default NavBar;