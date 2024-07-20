import { Menu, MenuProps } from "antd"
import "./index.scss"
import { useLocation, useNavigate } from "react-router-dom"

export default function Navbar() {

    const navbarItems = [
        {
            label: "Home",
            key: "/",
        },
        {
            label: "Program",
            key: "/program",
        },
        {
            label: "Committee",
            key: "/committee",
        },
        {
            label: "Submission",
            key: "/submission",
        },
        {
            label: "Partners",
            key: "/partners",
        }
    ]

    const navigate = useNavigate()

    const handleNavigate: MenuProps["onClick"] = (e) => {
        navigate(e.key)
    }

    const currentPath = useLocation()
    const currentPathName = currentPath.pathname

  return (
    <div className="navbar">
        <span className="navbarTitle">VNQSS2025</span>
        <Menu rootClassName="navBarMenuFormat" className="navbarMenu" onClick={handleNavigate} mode="horizontal" defaultSelectedKeys={[currentPathName]} items={navbarItems} />
    </div>
  )
}