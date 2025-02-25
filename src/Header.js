import chefClaudeLogo from "./images/chef-icon.png"


export default function Header() {
    return (
        <header>
            <img src={chefClaudeLogo} alt="Chef-image"/>
            <h1>Chef Claude</h1>
        </header>
    )
}