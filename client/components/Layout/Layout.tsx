import Header from "../Header/Header";

const menu = [
    {
        id: 0,
        title: "Main",
        link: "/"
    },
    {
        id: 1,
        title: "About Doctor",
        link: "/about"
    },
    {
        id: 2,
        title: "FAQ",
        link: "/faq"
    }
]

export default function Layout({ children }) {
  return (
    <>
      <Header menu={menu} />
      <main>{children}</main>
    </>
  )
}