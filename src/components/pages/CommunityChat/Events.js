import { Image } from 'primereact/image';

export default function Events() {
  return (
    <div className="mt-6">
      <div className="text-3xl font-semibold" style={{ color: '#595959' }}>
        Upcoming Network Events
      </div>
      <div className="flex border-3 border-round-lg border-cyan-100 mt-4 w-10">
        <div className="flex-1 font-bold text-center p-4 ">
          <div className="p-mr-3 p-shadow-2 flex flex-column align-items-center justify-content-center">
            <Image src="/img/20-attending.svg" width="100" />
            <div className="mt-2 font-bold" style={{ color: '#595959' }}>
              20 Attending
            </div>
            <div
              className="flex flex-wrap max-w-min mt-2 font-medium"
              style={{ color: '#595959' }}
            >
              AAOS Conference
            </div>
          </div>
        </div>
        <div className="flex-1 font-bold text-center p-4  mx-4">
          <div className="p-mr-3 p-shadow-2 flex flex-column align-items-center justify-content-center">
            <Image src="/img/40-attending.svg" width="100" />
            <div className="mt-2 font-bold" style={{ color: '#595959' }}>
              40 Attending
            </div>
            <div
              className="flex flex-wrap max-w-min mt-2 font-medium"
              style={{ color: '#595959' }}
            >
              CMA Conference
            </div>
          </div>
        </div>
        <div className="flex-1 font-bold text-center p-4 ">
          <div className="p-mr-3 p-shadow-2 flex flex-column align-items-center justify-content-center">
            <Image src="/img/65-attending.svg" width="100" />
            <div className="mt-2 font-bold" style={{ color: '#595959' }}>
              65 Attending
            </div>
            <div
              className="flex flex-wrap max-w-min mt-2 font-medium"
              style={{ color: '#595959' }}
            >
              NIH Conference
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
