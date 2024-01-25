import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { Badge } from 'primereact/badge';

export default function PatientCard({ title }) {
  return (
    <div className="card doctor-patient-card">
      <Card className="w-11" title={title}>
        <div className="flex gap-4 align-items-center">
          <div className="p-overlay-badge">
            <Badge value="15"></Badge>
            <Image src="/img/doctor-patient.svg" width="60" />
          </div>
          <div className="p-overlay-badge">
            <Badge value="15"></Badge>
            <Image src="/img/doctor-patient.svg" width="60" />
          </div>
          <div className="p-overlay-badge">
            <Badge value="15"></Badge>
            <Image src="/img/doctor-patient.svg" width="60" />
          </div>
        </div>
      </Card>
    </div>
  );
}
