
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import AdminActionPage from "./pages/AdminActionPage/AdminActionPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserPage from "./pages/UserPage/UserPage";
import CongratulationPage from "./pages/CongratulationPage/Congratulation";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import StaffPage from "./pages/StaffPage/StaffPage";
import UserActionPage from "./pages/UserActionPage/UserActionPage";
const routes = [
  {
    path: "/",
    main: () => <HomePage />
  },
  {
    path: "/register",

    main: ({ history }) => <RegisterPage history={history} />
  },
  {
    path: "/profile/:id/edit",

    main: ({ history, match }) => (
      <ProfilePage history={history} match={match} />
    )
  },
  {
    path: "/user-manager",
    main: () => <AdminPage />
  },
  {
    path: "/staff-manager",
    main: () => <StaffPage />
  },
  {
    path: "/user-managers/add",

    main: ({ history }) => <AdminActionPage history={history} />
  },
  {
    path: "/login",
    main: ({ history }) => <LoginPage history={history} />
  },
  {
    path: "/user",
    main: ({ history }) => <UserPage history={history} />
  },
  {
    path: "/congratulation",
    main: () => <CongratulationPage />
  },
  {
    path: "/users/:id/edit",
    main: ({ match, history }) => (
      <AdminActionPage history={history} match={match} />
    )
  },
  {
    path: "/staff/:id/edit",
    main: ({ match, history }) => (
      <UserActionPage history={history} match={match} />
    )
  },
  {
    path: "",

    main: () => <NotFoundPage />

  }
]

export default routes;
