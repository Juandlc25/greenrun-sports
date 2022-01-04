import { ReactElement } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Onboarding from "./views/onboarding";
import ForgotPassword from "./views/forgot-password";
import History from "./views/history";
import Home from "./views/home";
import Login from "./views/login";
import Register from "./views/register";
import PrivateRoute from "./helpers/PrivateRoute";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import StyledToast from "./components/Toast/StyledToast";
import { darkTheme, lightTheme } from "./styles/theme";
import ResetPassword from "./views/reset-password/index";
import NotFound from "./components/NotFound/index";
import { useDarkMode } from "./hooks/useDarkMode";

export enum RouteList {
  ROOT = "/",
  LOGIN = "/login",
  REGISTER = "/register",
  ONBOARDING = "/onboarding",
  HISTORY = "/history",
  FORGOT_PASSWORD = "/forgot-password",
  RESET_PASSWORD = "/reset-password",
  NOT_FOUND = "*",
}

function App(): ReactElement {
  const [theme, themeToggler] = useDarkMode();
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledToast />
      <Router>
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path={RouteList.REGISTER} element={<Register />} />
          <Route path={RouteList.LOGIN} element={<Login />} />
          <Route path={RouteList.ONBOARDING} element={<Onboarding />} />
          <Route
            path={RouteList.FORGOT_PASSWORD}
            element={<ForgotPassword />}
          />
          <Route path={RouteList.RESET_PASSWORD} element={<ResetPassword />} />
          <Route path={RouteList.NOT_FOUND} element={<NotFound />} />
          {/* PRIVATE ROUTES */}
          <Route path={RouteList.ROOT} element={<PrivateRoute />}>
            <Route
              path={RouteList.ROOT}
              element={<Home theme={theme} themeToggler={themeToggler} />}
            />
          </Route>
          <Route path={RouteList.HISTORY} element={<PrivateRoute />}>
            <Route path={RouteList.HISTORY} element={<History />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
