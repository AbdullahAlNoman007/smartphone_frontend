import { NavLink } from "react-router-dom";
import { Tnavlink, Troutes } from "../Types";

export const sidebarGenerator = (routes: Troutes[]) => {
    const itemsResult = routes.reduce((acc: Tnavlink[], item) => {

        if (item.name && item.key) {
            acc.push({
                key: item.key,
                label: <NavLink to={`/${item.key}`}>{item.name}</NavLink>
            })
        }

        return acc
    }, [])
    return itemsResult
}