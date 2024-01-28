import { Troutes } from "../Types";
import AddPhone from "../pages/AddPhone";
import AllPhone from "../pages/AllPhone";
import PhoneFiltering from "../pages/PhoneFiltering";
import SaleHistory from "../pages/SaleHistory";
import ProtectedRoute from "../utils/ProtectRoutes";

const SideRoutes: Troutes[] = [
    {
        key: 'add-phone',
        name: 'Create New Phone',
        element: <ProtectedRoute><AddPhone /></ProtectedRoute>
    },
    {
        key: 'all-phone',
        name: 'All Phones',
        element: <ProtectedRoute><AllPhone /></ProtectedRoute>
    },
    {
        key: 'phone-filter',
        name: 'Phone Search',
        element: <ProtectedRoute><PhoneFiltering /></ProtectedRoute>
    },
    {
        key: 'sale-history',
        name: 'Sale History',
        element: <ProtectedRoute><SaleHistory /></ProtectedRoute>
    }
]

export default SideRoutes