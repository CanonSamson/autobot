import { Link } from "react-router-dom"
import logo from "./logo.svg"


export const Logo = (className) => {
    return (
        <Link to="/">
            <img src={logo} className={className} />
        </Link>

    )
}
