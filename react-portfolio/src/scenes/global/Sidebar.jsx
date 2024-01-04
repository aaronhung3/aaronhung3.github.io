import "../../styles.css";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
    return (
      <div className="nav-container">
        <ul className="nav-ul">
          {SidebarData.map((val, key) => {
            return (
            <li className="nav-li"
                id={window.location.pathname == val.link ? "active" : ""}
                key={key} 
                onClick={() => {window.location.pathname = val.link}}>
              <div id="icon">{val.icon}</div>
            </li>
            );
          })}
        </ul>
      </div>
  )
}

export default Sidebar;