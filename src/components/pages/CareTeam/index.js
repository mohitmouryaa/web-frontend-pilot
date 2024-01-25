import PatientTable from './PatientTable';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import '../../../styles/doctorPatient.scss';
import PatientCard from './PatientCard';

export default function CareTeam() {
  return (
    <div>
      {/* Assistant Photo Block */}
      <div className="px-12 mx-4 mt-3">
        <div className="flex justify-content-around">
          <PatientCard title={'Physician Assitant'} />
          <PatientCard title={'Physician Assitant'} />
        </div>
        <div className="flex justify-content-around">
          <PatientCard title={'Non Surgical Orthopedic Specialist'} />
          <PatientCard title={'Orthopedic Surgeons'} />
        </div>
      </div>
      <div></div>
      {/* Middle Buttons */}
      <div>
        <div className="card flex flex-wrap justify-content-center gap-3">
          <Button label="Screen" severity="success" className="w-2" />
          <Button label="Orange" severity="warning" className="w-2" />
          <Button label="Surgery" severity="danger" className="w-2" />
        </div>
      </div>
      {/* Patient table */}
      <div>
        <div className="flex justify-content-between align-items-center mb-2 w-11 ml-6">
          <div
            className="font-semibold text-2xl mb-4"
            style={{ color: '#595959' }}
          >
            All Patients
          </div>
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText placeholder="Search" />
          </span>
        </div>
        <div style={{ width: '70vw', margin: 'auto' }}>
          <PatientTable />
        </div>
      </div>
    </div>
  );
}
