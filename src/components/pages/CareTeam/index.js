import PatientTable from './PatientTable';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function CareTeam() {
  return (
    <div>
      {/* Assistant Photo Block */}
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
        <div className="flex justify-content-between align-items-center mb-2">
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
        <PatientTable />
      </div>
    </div>
  );
}
