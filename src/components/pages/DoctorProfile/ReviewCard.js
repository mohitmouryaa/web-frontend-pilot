import { Image } from 'primereact/image';
import { Rating } from 'primereact/rating';

export default function ReviewCard() {
  return (
    <div className="mt-4">
      <div className="flex align-items-center">
        <div className="profileImageDiv flex align-items-center justify-content-center">
          <Image src="/img/reviewPic.svg" />
        </div>
        <div className="flex-column">
          <span className="mx-2 font-semibold">Mark Pauling</span>
          <div className="flex align-items-center mx-2">
            <Rating
              id="doctorRating"
              value={5}
              readOnly
              cancel={false}
              style={{ color: 'yellow' }}
            />
            <span className="mx-2 font-normal text-sm">4.9</span>
          </div>
        </div>
      </div>
      <div className="font-light text-xs mt-2 line-heigh-2">
        fdsakfjdkljfldksjfkdd dslakjdlkasjd asjdaklsdjskjk asjdklsadj sdjsa
        dklsadjlks sajsklajskaljsklajskal lajsklajsl asjdklsadj
      </div>
    </div>
  );
}
