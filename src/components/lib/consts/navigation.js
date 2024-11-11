import { HiOutlineViewGrid ,

} from "react-icons/hi";
import { AiOutlineProduct } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { TbTransactionRupee } from "react-icons/tb";
import { BsMessenger } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { TbHelpHexagonFilled } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";

export const DASHBOARD_SIDBAR_LINKS=[
    {
        key: "dashboard",
        label: "Dashboard",
        path : "/dashboard",
        icon : <HiOutlineViewGrid/>
    },
    {
        key: "products",
        label: "Products",
        path : "/products",
        icon : <AiOutlineProduct/>
    },
    {
        key: "orders",
        label: "Orders",
        path : "/",
        icon : <IoMdCart/>
    },
    {
        key: "customers",
        label: "Customers",
        path : "/customers",
        icon : <FaUserGroup/>
    },
    {
        key: "transactions",
        label: "Transactions",
        path : "/transactions",
        icon : <TbTransactionRupee/>
    },
    {
        key: "messages",
        label: "Messages",
        path : "/messages",
        icon : <BsMessenger/>
    },

]
export const DASHBOARD_SIDBAR_BOTTON_LINK=[
    {
        key: "setting",
        label: "Setting",
        path : "/setting",
        icon : <IoMdSettings/>
    },
    {
        key: "support",
        label: "Help & Support",
        path : "/support",
        icon : <TbHelpHexagonFilled/>
    },
    {
        key: "logout",
        label: "Logout",
        path : "/logout",
        icon : <CiLogout/>
    },
]

