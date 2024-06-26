import React,{useRef, useEffect} from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/Designer.png";
import "./header.css";

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Header = () => {
const headerRef= useRef(null)
const menuRef= useRef(null)
const stickyHeaderFunc=()=>{
  window.addEventListener('scroll',()=>{
    if(document.body.scrollTop>80  ||  document.documentElement.scrollTop > 80){
      headerRef.current.classList.add('sticky__header')
    }else{
      headerRef.current.classList.remove('sticky__header')
    }
  })
}


useEffect(()=>{
  stickyHeaderFunc()


  return window.removeEventListener('scroll', stickyHeaderFunc)
})

const toggleMenu=()=>menuRef.current.classList.toggle('show__menu')






  return (
    <header className="header"    ref={headerRef}          >
      <Container>
        <Row>
          <div className="nav__wrapper   d-flex    align-items-center  justify-content-between">
            {/* -----------logo---------- */}

            <div className="logo">
              {/* <img src={logo} alt="logo" /> */}
              <h2 >Tourista</h2>

            </div>

            {/* -----------logo end---------- */}
            {/* -----------menu---------- */}
            <div className="navigation"         ref={menuRef}   onClick={toggleMenu}>
              <ul className="menu  d-flex align-items-center gap-5   ">
                {nav__links.map((item,index) => (
                  <li className="nav__item">
                    <NavLink to={item.path}   className={navClass => navClass.isActive ? "active__link" : ""}       >{item.display}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* -----------menu end---------- */}


            <div className="nac__right d-flex align-items-center gap-4 ">
              <div className="nav__btns d-flex align-items-center gap-4">
                <button className="btn secondary__btn">
                  <Link to="/login">Login</Link>
                </button>
                <button className="btn primary__btn">
                  <Link to="/register">Register</Link>
                </button>
              </div>

              <span className="mobile__menu"          onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
              </span>
            </div>

            
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
