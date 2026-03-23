import chefLogo from "../../assets/chef-claude.png"
import "./Header.css"

export default function Header() {
    return (
        <>
            <header>
                <img src={chefLogo} alt="Chef Logo" className="chef-logo"/>
                <p className="logo-title">Chef Claude</p>
            </header>   
        </>
    )
}