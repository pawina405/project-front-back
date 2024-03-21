import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import LoginForm from '../layout/LoginForm'
import RegisterForm from '../layout/RegisterForm'
import useAuth from '../hooks/useAuth'
import Header from '../layout/Header'
import UserHome from '../layout/UserHome'
import Account from '../layout/Account'
import EditProfile from '../layout/EditProfile'
import Footer from '../layout/Footer'
import Search from '../layout/Search'
import Product from '../layout/Product'
import AddItem from '../layout/AddItem'
import Shopping from '../layout/Shopping'
import Payment from '../layout/Payment'
import AdminHome from '../admin/AdminHome'
import CancelOrder from '../layout/CancelOrder'
import DisMiss from '../layout/DisMiss'



const guestRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children: [
      { index: true, element: <LoginForm /> },
      { path: '/register', element: <RegisterForm />}
    ]
  }
])

const userRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Search/>
      <Outlet />
      <br />
      <Footer />
    </>,
    children : [
      { index: true, element: <UserHome /> },
      { path: '/new', element: <Account />},
      { path: '/edit-profile', element: <EditProfile /> },
      { path: '/product', element: <Product /> },
      { path: '/Item', element: <AddItem /> },
      { path: '/Shop', element: <Shopping /> },
      { path: '/Pay', element: <Payment /> },
      { path: '/Cancel-order', element: <CancelOrder /> },
      { path: '/Cancel', element: <DisMiss /> },
    ]
  }
])

const adminRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
      <Header/>
      <Outlet/>
      </>
    ),
    children: [
      { index: true, element: <AdminHome />}
    ]
  }
])

export default function AppRouter() {
  const {user} = useAuth()
  const finalRouter = user?.role === 'ADMIN' ? adminRouter : user ?  userRouter : guestRouter;
  return (
    <RouterProvider router={finalRouter} />
  )
}

