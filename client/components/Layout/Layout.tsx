import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


export default function Layout({ children }) {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div>{children}</div>
      </LocalizationProvider>
    </>
  )
}