
import { DoctorDataCards } from "./DoctorDataCards"
import { Nav } from "../Nav"

export const DoctorDashboard=()=>{
    return(
        <div>
            <Nav></Nav>
            <div className="container py-5">
      <DoctorDataCards></DoctorDataCards>
      </div>
        </div>
    )
}