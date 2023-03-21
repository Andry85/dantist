import Header from "../Header/Header";
import {menu, contacts} from '../../data';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


export default function Layout({ children }) {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Header menu={menu} contacts={contacts} />
        <main>{children}</main>
      </LocalizationProvider>
    </>
  )
}