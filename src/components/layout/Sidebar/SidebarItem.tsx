import { NavLink } from "react-router-dom";
import styles from "./SidebarItem.module.css";


interface SidebarItemProps{

    label:string;

    icon:React.ReactNode;

    path:string;

}


export default function SidebarItem({
    label,
    icon,
    path
}:SidebarItemProps){

    return(

        <NavLink
            to={path}
            className={({isActive}) =>
                `${styles.item} ${
                    isActive ? styles.active : ""
                }`
            }
        >

            <span className={styles.icon}>
                {icon}
            </span>


            <span>
                {label}
            </span>


        </NavLink>

    );

}