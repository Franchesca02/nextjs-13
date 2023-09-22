import Link from "next/link";
import headerClassNames from "./headerClassNames";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Header = () => {
  const {
    header,
    container,
    li,
    logoContainer,
    link,
    logo,
    nav,
    ul,
    orders,
    contactUs,
    signupBtn,
    signinBtn,
    logoutBtn,
    cart,
  } = headerClassNames;
  return (
    <header className={header}>
      <div className={container}>
        <Link href="/" className={logoContainer}>
          <h1 className={logo}>Logo</h1>
        </Link>
        <nav className={nav}>
          <ul className={ul}>
            <li>
              <button className={link}>
                <span>
                  Cart
                  <AiOutlineShoppingCart className="inline-block text-3xl" />
                </span>
                <div className={cart}>12</div>
              </button>
            </li>
            <li className="flex items-center justify-center h-7">
              <Link href="/orders" className={orders}>
                Orders
              </Link>
              <button className={logoutBtn}>Logout</button>
              <button className={signupBtn}>Sign up</button>
              <button className={signinBtn}>
                Sign in
                <FcGoogle
                  style={{
                    fontSize: "25px",
                    cursor: "pointer",
                    marginLeft: "12px",
                  }}
                  className={link}
                />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// import Link from "next/link";
// import headerClassNames from "./headerClassNames";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { FcGoogle } from "react-icons/fc";

// const Header = () => {
//   return (
//     <header className={headerClassNames.header}>
//       <div className={headerClassNames.container}>
//         <Link href="/" className={headerClassNames.logoContainer}>
//           <h1 className={headerClassNames.logo}>Logo</h1>
//         </Link>
//         <nav className={headerClassNames.nav}>
//           <ul className={headerClassNames.ul}>
//             <li>
//               <button className={headerClassNames.link}>
//                 <span>
//                   Cart
//                   <AiOutlineShoppingCart className="inline-block text-3xl" />
//                 </span>
//                 <div className={headerClassNames.cart}>12</div>
//               </button>
//             </li>
//             <li className="flex items-center justify-center h-7">
//               <Link href="/orders" className={headerClassNames.orders}>
//                 Orders
//               </Link>
//               <button className={headerClassNames.logoutBtn}>Logout</button>
//               <button className={headerClassNames.signupBtn}>Sign up</button>
//               <button className={headerClassNames.signinBtn}>
//                 Sign in
//                 <FcGoogle
//                   style={{
//                     fontSize: "25px",
//                     cursor: "pointer",
//                     marginLeft: "12px",
//                   }}
//                   className={headerClassNames.link}
//                 />
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
