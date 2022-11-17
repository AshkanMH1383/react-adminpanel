import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
    <div className="sidebar box-white">
        <div className="logo">
           ریکت ادمین پنل
        </div>
        <ul className="menu d-flex">
            <li><span></span><Link to="/" >Dashboard</Link></li>
            <li><span></span><Link to="/users" >Users</Link></li>
            
            
        </ul>
    </div>
    )
}
export default Sidebar;