import { BrowserRouter, Route, Routes ,useLocation} from "react-router-dom";
 import Patient from "../../Pages/Patient";
import Utilisateur from "../../Pages/Utilisateur";
import Dashboard from "../../Pages/Dashbaord";
import RendezVous from "../../Pages/RendezVous";
import Ordonance from "../../Pages/Ordonance";
import AjouterOrdonance from "../../Pages/Ordonance/AjouterOrdonance";
import DossiersMedicaux from "../../Pages/DossiersMedicaux";
import AfficherDossier from "../../Pages/DossiersMedicaux/AfficherDossier";
import AjouterRendezVous from "../../Pages/RendezVous/AjouterRendezVous";
import ModifierRv from "../../Pages/RendezVous/ModifierRv";
import AjouterPatient from "../../Pages/Patient/AjouterPatient";
import ModifierPatient from "../../Pages/Patient/ModifierPatient";
import AjouterUtilisateur from "../../Pages/Utilisateur/AjouterUtilisateur";
import ModifierUtilisateur from "../../Pages/Utilisateur/ModifierUtilisateur";
import Pharmacie from "../../Pages/Pharmacie";
import AjouterCategorie from "../../Pages/Pharmacie/AjouterCategorie";
import AjouterMedicament from "../../Pages/Pharmacie/AjouterMedicament";
import ModifierMedicament from "../../Pages/Pharmacie/ModifierMedicament";
import Laboratoire from "../../Pages/Laboratoire";
import AjouterResultat from "../../Pages/Laboratoire/AjouterResultat";
import AjouterTest from "../../Pages/Laboratoire/AjouterTest";
import VoirResultat from "../../Pages/Laboratoire/VoirResultat";
import ModifierResultat from "../../Pages/Laboratoire/VoirResultat/ModifierResultat"
import ModifierTest from "../../Pages/Laboratoire/ModifierTest";
import VoirPatient from "../../Pages/Patient/VoirPatient";
import ModifierOrdonance  from '../../Pages/Ordonance/ModifierOrdonance'
import VoirOrdonance  from '../../Pages/Ordonance/VoirOrdonance'
import {Login} from '../../Pages/Login'
import { AnimatePresence } from 'framer-motion';
import { useParams } from 'react-router-dom';

function AppRoutes() {


  const location=useLocation();
  return (
    <AnimatePresence>
    <Routes >
      {/* Dashbaord*/}
      <Route path="/" element={<Dashboard />}></Route>

      
      {/* Patient*/}
      <Route path="/patient" element={<Patient />}></Route> 
      <Route path="/patient/ajouterpatient" element={<AjouterPatient />}></Route>
      <Route path="/patient/modifierpatient" element={<ModifierPatient />}></Route>

      {/* Utilisateur*/}
      <Route path="/utilisateur" element={<Utilisateur />}></Route>
      <Route path="/utilisateur/ajouterutilisateur" element={<AjouterUtilisateur />}></Route>
      <Route path="/utilisateur/modifierutilisateur" element={<ModifierUtilisateur />}></Route>

      {/* Rendez-vous*/}
      <Route path="/rendezvous" element={<RendezVous />}></Route>
      <Route path="/rendezvous/ajouterrendezvous" element={<AjouterRendezVous />}></Route>
      <Route path="/rendezvous/modifierrendezvous" element={<ModifierRv />}></Route>

      {/* Parmacie*/}
      <Route path="/pharmacie" element={<Pharmacie />}></Route>
      <Route path="/pharmacie/ajoutercategorie" element={<AjouterCategorie />}></Route>
      <Route path="/pharmacie/ajoutermedicament" element={<AjouterMedicament />}></Route>
      <Route path="/pharmacie/modifiermedicament" element={<ModifierMedicament />}></Route>

      {/* laboratoire*/}
      <Route path="/laboratoire" element={<Laboratoire />}></Route>
      <Route path="/laboratoire/ajouterresultat" element={<AjouterResultat />}></Route>
      <Route path="/laboratoire/ajoutertest" element={<AjouterTest />}></Route>
      <Route path="/laboratoire/voirresultat" element={<VoirResultat />}></Route>
      <Route path="/laboratoire/voirresultat/modifierresultat" element={<ModifierResultat />}></Route>
      <Route path="/laboratoire/modifiertest" element={<ModifierTest />}></Route>


      {/* Ordonance*/}
      <Route path="/ordonance" element={<Ordonance />}></Route>
      <Route path="/ordonance/ajouterordonance" element={<AjouterOrdonance />}></Route>
      <Route path="/ordonance/modifierordonance" element={<ModifierOrdonance />}></Route>
      <Route path="/ordonance/Voirordonance" element={<VoirOrdonance />}></Route>
      

      
      {/* Dossier-Medicaux*/}
      <Route path="/dossiersmedicaux" element={<DossiersMedicaux />}></Route>
      <Route path="/dossiersmedicaux/afficherdossier" element={<AfficherDossier />}></Route>

     


    </Routes>
    </AnimatePresence>
  );
}
export default AppRoutes;
