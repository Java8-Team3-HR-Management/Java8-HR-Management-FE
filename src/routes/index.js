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
import Review from "../pages/Review";
import Subscription from "../pages/Subcription";
import Expense from "../pages/Expense";
import CreateExpense from "../pages/Create Expense";
import ExpenseDetail from "../pages/ExpenseDetail";

const ROLES = {
  ADMIN: "ADMIN",
  EMPLOYEE: "EMPLOYEE",
  MANAGER: "MANAGER",
  GUEST: "GUEST"
};
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
      {
        name: "subscriptoon",
        title: "Abonelik",
        component: Subscription,
        path: "/subscription",
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
        role: ROLES.ADMIN,
      },
      {
        name: "company",
        title: "Şirket Sayfası",
        component: Company,
        path: "/company",
        role:ROLES.MANAGER,
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
        role: ROLES.ADMIN,
      },
      {
        name: "review",
        title: "Review",
        component: Review,
        path: "/review",
      },
      {
        name: "expense",
        title: "Expense",
        component: Expense,
        path: "/expense",
      },
      {
        name: "createExpense",
        title: "Create Expense",
        component: CreateExpense,
        path: "/create-expense",
      },
      {
        name: "expenseDetail",
        title: "Expense Detail",
        component: ExpenseDetail,
        path: "/expense-detail",
      },
    ],
  },
];


export const Routes = renderRoutes(routes);
