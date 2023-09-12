import EmptyLayout from "../components/EmptyLayout";
import MainLayout from "../components/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Admin from "../pages/Admin";
import Company from "../pages/Company";
import Employee from "../pages/Employee";
import { renderRoutes } from "./generate-routes";
import ForgotPassword from "../pages/ForgotPassword";
import AdminLogin from "../pages/AdminLogin";
import AdminRegister from "../pages/AdminRegister";
import Calendar from "../pages/Calendar";
import Profile from "../pages/Profile";
import AddCompany from "../pages/Add Company";
export const routes = [
  {
    layout: EmptyLayout,
    routes: [
      {
        name: "login",
        title: "Giriş Yap",
        component: Login,
        path: "/login",
        isPublic: true,
      },
      {
        name: "register",
        title: "Kayıt Ol",
        component: Register,
        path: "/register",
        isPublic: true,
      },
      {
        name: "forgotPassword",
        title: "Kayıt Ol",
        component: ForgotPassword,
        path: "/forgotpassword",
        isPublic: true,
      },
      {
        name: "adminLogin",
        title: "Admin Girişi",
        component: AdminLogin,
        path: "/adminlogin",
        isPublic: true,
      },
      {
        name: "adminRegister",
        title: "Admin Kayıt",
        component: AdminRegister,
        path: "/adminregister",
        isPublic: true,
      },
    ],
  },
  {
    layout: MainLayout,
    routes: [
      {
        name: "admin",
        title: "Admin Panel",
        component: Admin,
        path: "/admin",
        isPublic: false,
        isAuthorized: true,
      },
      {
        name: "company",
        title: "Şirket Sayfası",
        component: Company,
        path: "/company",
      },
      {
        name: "employee",
        title: "Çalışanlar",
        component: Employee,
        path: "/employee",
      },
      {
        name: "calendar",
        title: "Takvim",
        component: Calendar,
        path: "/calendar",
      },
      {
        name: "profile",
        title: "Profile",
        component: Profile,
        path: "/profile",
      },
      {
        name: "addCompany",
        title: "Add Company",
        component: AddCompany,
        path: "/add-company",
      },
    ],
  },
];


export const Routes = renderRoutes(routes);
