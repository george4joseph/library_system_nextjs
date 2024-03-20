
import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";


const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "Books",
      path: "/books",
    },
    {
      title: "Members",
      path: "/members",
    },
    {
      title: "Reports",
      path: "/reports",
    },
  ];


const Links = () => {

  const session = true
  const isAdmin = true

    return (
        <div className={styles.links}>
            {links.map((link=> (
              <NavLink item={link} key={link.title} />
            )))}{
              session ? (
                <>
                {isAdmin && (
                  <NavLink item = {{title: "Admin", path: "/admin"}} />
                )
                }
                <button className={styles.logout}>Logout</button>
                </>

              ): (
                <NavLink item = {{title: "Login", path: "/login"}} />
              )
            }
        </div>
    );
}

export default Links;