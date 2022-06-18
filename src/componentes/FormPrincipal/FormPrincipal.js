import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from 'react-router-dom';
import 'styled-components'
import AcceptedTeianes from '../AcceptedTeianes/AcceptedTeianes';
import ApprovedIdeas from '../ApprovedIdeas';
import FormIdea from '../FormIdea';
import NavBar from '../NavBar';
import SideBar from '../SideBar';
import TableIdeas from '../TableIdeas';
import Dudas from '../Dudas';
import TeianesRechazados from '../TeianesRechazados';
import styles from './FormPrincipal.module.css'

const cont = styles.cont
const FormPrincipal = () =>{
  return(
    <div>
      <div className={cont}>
        <SideBar />
        <NavBar/>
        <Routes>
          <Route path="/" element={<FormIdea />}/>
          <Route path="/Formideas" element={<FormIdea />} />
          <Route path="/TableIdeas" element={<TableIdeas/>}/>
          <Route path="/ApproveIdeas" element={<ApprovedIdeas/>}/>
          <Route path="/TeianesAccepted" element={<AcceptedTeianes/>}/>
          <Route path="/TeianesRechazados" element={<TeianesRechazados/>}/>
          <Route path="/Dudas" element={<Dudas/>}/>
        </Routes>
  </div> 
    </div>
  );
}

  export default FormPrincipal