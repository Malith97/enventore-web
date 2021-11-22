import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";
import * as ImIcons from "react-icons/im";
import * as VscIcons from "react-icons/vsc";

export const RestaurantNavBar = [
  {
    title: "Dashboard",
    path: "/restdashboard",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Add Dishes",
    path: "/add_dish",
    icon: <FaIcons.FaStar />,
  },
  {
    title: "View Dishes",
    path: "/view_dishes",
    icon: <FaIcons.FaDiceD6 />,
  },
  {
    title: "User Complaints",
    path: "/rest_user_complaints",
    icon: <BsIcons.BsTools />,
  },
  {
    title: "Analytics",
    path: "/rest_analytics",
    icon: <GiIcons.GiServerRack />,
  },
];

export const AdminNavBar = [
  {
    title: "Dashboard",
    path: "/admindashboard",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Add Restaurants",
    path: "/add_restaurants",
    icon: <FaIcons.FaStar />,
  },
  {
    title: "View Restaurant",
    path: "/view_restaurant",
    icon: <FaIcons.FaDiceD6 />,
  },
  {
    title: "User Complaints",
    path: "/user_complaints",
    icon: <BsIcons.BsTools />,
  },
  {
    title: "Available Dishes",
    path: "/available_dishes",
    icon: <MdIcons.MdEditLocation />,
  },
  {
    title: "Analytics",
    path: "/admin_analytics",
    icon: <GiIcons.GiServerRack />,
  },
];
