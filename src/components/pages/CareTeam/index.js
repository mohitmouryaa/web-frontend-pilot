import PatientTable from './PatientTable';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import '../../../styles/doctorPatient.scss'

export default function CareTeam() {
  return (
    <div>
      {/* Assistant Photo Block */}
      <div className='flex-column'>
        <div className='flex justify-content-around'>
          <div className="card doctor-patient-card">
            <Card title="Physician Assistant">
              <div>
                <Image src="/img/doctor-patient.svg" width="60" />
                &#160;
                &#160;
                <Image src="/img/doctor-patient.svg" width="60" />
                &#160;
                &#160;
                <Image src="/img/doctor-patient.svg" width="60" />
              </div>
            </Card>
          </div>
          <div className="card doctor-patient-card">
            <Card title="Physician Assistant">
              <div>
                <Image src="/img/doctor-patient.svg" width="60" />
                &#160;
                &#160;
                <Image src="/img/doctor-patient.svg" width="60" />
                &#160;
                &#160;
                <Image src="/img/doctor-patient.svg" width="60" />
              </div>
            </Card>
          </div>
        </div>
        <div className='flex justify-content-around'>
          <div className="card doctor-patient-card">
            <Card title="Non Surgical Orthopedic Specialist">
              <div>
                <Image src="/img/doctor-patient.svg" width="60" />
                &#160;
                &#160;
                <Image src="/img/doctor-patient.svg" width="60" />
                &#160;
                &#160;
                <Image src="/img/doctor-patient.svg" width="60" />
              </div>
            </Card>
          </div>
          <div className="card doctor-patient-card">
            <Card title="Orthopedic Surgeons">
              <div>
                <Image src="/img/doctor-patient.svg" width="60" />
                &#160;
                &#160;
                <Image src="/img/doctor-patient.svg" width="60" />
                &#160;
                &#160;
                <Image src="/img/doctor-patient.svg" width="60" />
              </div>
            </Card>
          </div>
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
