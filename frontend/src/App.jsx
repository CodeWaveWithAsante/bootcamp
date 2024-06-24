import { useEffect } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import { setAuthToken } from "./libs/apiCalls";
import Accounts from "./pages/accounts";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Register from "./pages/register";
import Settings from "./pages/settings";
import Transactions from "./pages/transactions";
import useStore from "./store";
import Navbar from "./componenets/navbar";

const RootLayout = () => {
  const user = useStore((state) => state.user);
  if (user) {
    setAuthToken(user.token);
  }

  return !user ? (
    <Navigate to="/login" replace={true} />
  ) : (
    <>
      <Navbar />
      <div className="min-h-[cal(h-screen-100px)] ">
        <Outlet />
      </div>
    </>
  );
};

const App = () => {
  const theme = useStore((state) => state.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <main>
      <div className="w-full min-h-screen px-6 md:px-20 bg-white dark:bg-slate-900">
        <Routes>
          {/* Protected routes */}
          <Route element={<RootLayout />}>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/account" element={<Accounts />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/settings" element={<Settings />} />
          </Route>

          {/* Unprotected routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Toaster richColors position="top-center" />
    </main>
  );
};

export default App;
