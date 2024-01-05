import Iconify from "../../../components/iconify/Iconify";

export const menuConfig = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: <Iconify icon="material-symbols:insert-chart" />,
  },
  {
    title: "Food Order",
    path: "/admin/foodOrder",
    icon: <Iconify icon="majesticons:shopping-cart" />,
  },
  {
    title: "Manage Menu",
    path: "/admin/manageMenu",
    icon: <Iconify icon="ic:baseline-text-snippet" />,
  },
  {
    title: "Customer Review",
    path: "/admin/customerReview",
    icon: <Iconify icon="ic:baseline-speaker-notes" />,
  },
];

export const otharConfig = [
  {
    title: "Settings",
    path: "/admin/settings",
    icon: <Iconify icon="ic:baseline-settings" />,
  },
  {
    title: "Payment",
    path: "/admin/payment",
    icon: <Iconify icon="solar:wallet-bold" />,
  },
  {
    title: "Accounts",
    path: "/admin/accounts",
    icon: <Iconify icon="iconamoon:profile" />,
  },
  {
    title: "Help",
    path: "/admin/help",
    icon: <Iconify icon="ic:baseline-privacy-tip" />,
  },
];
