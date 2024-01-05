import { Navigate, useRoutes } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { FoodOrder } from "./pages/food-order";
import { Manage } from "./pages/manage";
import { CustomerReview } from "./pages/customer-review";
import AdminLayout from "./layouts/dashboard/AdminLayout";

export default function Router() {
  const routes = useRoutes([
    {
      path: "*",
      element: <Navigate to="/admin/dashboard" />,
      index: true,
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        { path: "dashboard", element: <Dashboard /> },
        { path: "foodOrder", element: <FoodOrder /> },
        { path: "manageMenu", element: <Manage /> },
        { path: "customerReview", element: <CustomerReview /> },
      ],
    },
  ]);

  return routes;
}
