import { Tacc, Troutes } from "../Types";

const routesGenerator = (routes: Troutes[]) => {
    const route = routes.reduce((acc: Tacc[], item) => {
        if (item.key && item.element) {
            acc.push({
                path: item.key,
                element: item.element
            })
        }

        // if (item.children) {
        //     item.children.forEach((child) => {
        //         acc.push({
        //             path: child.key,
        //             element: child.element
        //         })
        //     })
        // }
        return acc
    }, [])

    return route

}

export default routesGenerator