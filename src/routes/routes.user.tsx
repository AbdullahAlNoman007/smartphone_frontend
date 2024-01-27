import { Troutes } from "../Types";
import AddPhone from "../pages/AddPhone";
import AllPhone from "../pages/AllPhone";
import DeletePhone from "../pages/DeletePhone";
import PhoneFiltering from "../pages/PhoneFiltering";
import SaleHistory from "../pages/SaleHistory";
import UpdatePhone from "../pages/UpdatePhone";

const SideRoutes: Troutes[] = [
    {
        key: 'add-phone',
        name: 'Create New Phone',
        element: <AddPhone />
    },
    {
        key: 'delete-phone',
        name: 'Delete Phone',
        element: <DeletePhone />
    },
    {
        key: 'all-phone',
        name: 'All Phones',
        element: <AllPhone />
    },
    {
        key: 'phone-filter',
        name: 'Phone Search',
        element: <PhoneFiltering />
    },
    {
        key: 'sale-history',
        name: 'Sale History',
        element: <SaleHistory />
    },
    {
        key: 'update-phone',
        name: 'Update Phone',
        element: <UpdatePhone />
    }
]

export default SideRoutes