import { useAuth0 } from '@auth0/auth0-react';
import React, { useContext, useEffect } from 'react';
import { useMutation } from 'react-query';
import { Outlet, useLocation } from 'react-router-dom';
import UserDetailContext from '../../context/UserDetail';
import useBookings from '../../hooks/useBookings';
import useFavorites from '../../hooks/useFavorites';
import { createUser } from '../../utils/api';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';







const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  

  useFavorites()
  useBookings()

  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const { setUserDetails } = useContext(UserDetailContext);

  const { mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: (token) => createUser(user?.email, token)
  });

  useEffect(() => {
    const getTokenAndRegister = async () => {
      try {
        const res = await getAccessTokenSilently({
          audience: "http://localhost:8500",
          scope: "openid profile email"
        });

        localStorage.setItem('access_token', res);
        setUserDetails((prev) => ({ ...prev, token: res }));
        console.log(res);
        mutate(res)

      } catch (error) {
        console.error("Error getting access token:", error);
      }
    };

    isAuthenticated && getTokenAndRegister();

  }, [isAuthenticated, getAccessTokenSilently, setUserDetails, user]);

  

  return (
    <>
      <div style={{ background: 'white', overflow: 'hidden' }}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
