import Header from "../Header/Header";
import {menu, contacts} from '../../data';


export default function Layout({ children }) {
  return (
    <>
      <Header menu={menu} contacts={contacts} />
      <main>{children}</main>
    </>
  )
}