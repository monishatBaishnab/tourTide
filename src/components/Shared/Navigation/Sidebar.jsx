import { List, ListItem } from "@material-tailwind/react";
import navList from "./navList";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div>
            <List>
                {
                    navList.map(item => <ListItem key={item.path}>
                        <Link to={item.path}>{item.level}</Link>
                    </ListItem>)
                }
            </List>
        </div>
    );
};

export default Sidebar;