import {  Component , useState } from "react";
import { Link } from "react-router-dom";
import SidebarData from "../../data/SidebarData";



const Sidebar = () => {
    const [menuList , setMenuList] = useState(SidebarData)    
 
    function isActive(index){
        console.log(index)
    }
    return (
    <>
        <div className="logo">
            {SidebarData.title}
        </div>
        <ul className="menu">
            { menuList.menu.map((item , index) => (
                <li key={index} className={ item.isActive == 1 ? 'active' : ''} onClick={isActive.bind(index)}>
                    <Link to={item.to}>
                        <svg fill="currentColor"><use xlinkHref={item.icon}></use></svg>
                        <span>{item.text}</span>
                    </Link>
                </li>
            ))}
        </ul>
    </>
    )
}


// class Sidebar extends Component {
// constructor() {
//     super();
//     this.state = {active :}
// }
// render() {
//     return (
//         <>
//          <div className="logo">
//              {SidebarData.title}
//          </div>
//          <ul className="menu">
//              { SidebarData.menu.map((item , index) => (
//                 <li key={index} className={ this.state.active === item ? 'active' : ''}>
//                     <Link to={item.to}>
//                         <svg fill="currentColor"><use xlinkHref={item.icon}></use></svg>
//                         <span>{item.text}</span>
//                      </Link>
//                  </li>
//              ))}
//          </ul>
//      </>
//     )
// }
// }
export default Sidebar;