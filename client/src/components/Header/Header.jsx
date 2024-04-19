import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
import {useAuth0} from '@auth0/auth0-react'
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import AddPropertyModal from "../AddPropertyModal/AddPropertyModal";
import useAuthCheck from "../../hooks/useAuthCheck";





const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();
  const [modalOpened, setModalOpened] = useState(false)
  const {loginWithRedirect, isAuthenticated, user, logout} = useAuth0()
  const {validateLogin} = useAuthCheck()


  const handleAddPropertyClick = () => {
    if(validateLogin){
      setModalOpened(true)
    }
  }


  return (
    <section className="h-wrapper" style={{ backgroundColor: 'var( --gray) '}}>
      <div 
      className="flexCenter innerWidth paddings h-container"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
        
      }}
      >
        {/* logo */}
        <Link className="nav-logo" to={'/'} >
           <img src="./logo.svg" alt="logo" width={170} style={{ filter: `invert(100%)`}} />
        </Link>

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >

              <NavLink to={'/properties'} > Rent</NavLink>

              <NavLink to={'/properties'} > Buy</NavLink>


              <a href="mailto:user1@gmail.com">Contact</a>


              {/* add property */}


             <div className="add-property" onClick={handleAddPropertyClick} >Add property</div>
             <AddPropertyModal 
                 opened={modalOpened}
                 setOpened={setModalOpened}
                  />


              { !isAuthenticated ?
                (<button style={{marginBottom: '15px'}} className="button" onClick={loginWithRedirect} >
                    Login
                  </button>) : 
                (<ProfileMenu user={user} logout={logout} />)
                  
               }
          
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
