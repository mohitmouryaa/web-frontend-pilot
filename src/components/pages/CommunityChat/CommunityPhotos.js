import { Image } from 'primereact/image';

export default function CommunityPhotos() {
  return (
    <div className="text-center border-round-sm font-bold">
      <div className="flex flex-wrap align-items-center justify-content-start gap-4">
        <div className="ml-4">
          <div>
            <Image src="/img/physician-assistant.svg" width="140" />
            <div className="font-medium mt-2">Physician Assistant</div>
          </div>
        </div>
        <div className="ml-4">
          <div>
            <Image src="/img/orthopedic-surgeons.svg" width="140" />
            <div className="font-medium mt-2">Orthopedic Surgeons</div>
          </div>
        </div>
        <div className="ml-4">
          <div>
            <Image src="/img/physiotherapist.svg" width="140" />
            <div className="font-medium mt-2">Physiotherapist</div>
          </div>
        </div>
        <div className="ml-4">
          <div>
            <Image src="/img/orthopedic-surgeons.svg" width="140" />
            <div className="font-medium mt-2">Orthopedic Specialist</div>
          </div>
        </div>
        <div className="ml-4">
          <div>
            <Image src="/img/chiropractors.svg" width="140" />
            <div className="font-medium mt-2">Chiropractors</div>
          </div>
        </div>
      </div>
    </div>
  );
}
