import { doctorProfileData } from '../../../utils/constants';
import { uppercaseFirstLetterOfEachWord } from '../../../utils/function';
import { Image } from 'primereact/image';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import './../../../styles/doctorProfile.scss';
import ReviewCard from './ReviewCard';

export default function DoctorProfile() {
  return (
    <div>
      <div className="flex">
        <div className="flex-initial flex justify-content-center font-bold px-5 py-3 border-round w-3 mr-4">
          <div style={{ width: '22vw' }}>
            <Image src="/img/doctor-profile-1.svg" alt="Doctor Profile" />
            <div className="font-bold">{'Dr. Alec Cemat'}</div>
            <div className="font-light text-sm">{'Alec@simmmple.com'}</div>
            {/* Stars */}
            <div className="mt-2">
              <Rating
                id="doctorRating"
                value={5}
                readOnly
                cancel={false}
                style={{ color: 'yellow' }}
              />
            </div>
            <div className="font-light text-xs mt-1">55 Reviews</div>
            <div className="mt-4">
              <Button
                label="Appointment"
                className="w-9 bg-cyan-300 border-none"
                style={{ color: 'black' }}
                size='small'
              />
              <Button
                className="w-9 mt-4"
                label="Message"
                outlined
                size='small'
                style={{ color: 'black' }}
              />
            </div>
            <div
              className="mt-4 font-normal text-lg"
              style={{ color: '#595959' }}
            >
              Patient Reviews
            </div>
            {/* Reviews */}
            <div>
              <ReviewCard />
              <ReviewCard />
            </div>
            {/* Location */}
            <div className="mt-4 text-xl">
              <div style={{ color: '#595959' }} className="font-semibold ml-1">
                Location
              </div>
              <div className="mt-4">
                <Image src="/img/map.svg" />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ borderColor: 'rgb(162 174 92 / 92%)' }}
          className="flex-initial flex  justify-content-center font-bold m-2 px-5 border-left-1"
        >
          <div className="flex-1">
            {Object.entries(doctorProfileData).map(([key, value], index) => {
              return (
                <div className="flex line-height-4 w-full" key={index}>
                  <div className="flex-initial flex align-items-left justify-content-left font-bold m-2 px-2 py-2 w-19rem line-height-4">
                    {uppercaseFirstLetterOfEachWord(key)} :
                  </div>
                  <div
                    className="flex-initial flex align-items-left justify-content-left font-light m-2 ml-7 px-2 py-2 w-6 line-height-4"
                    style={{ color: '#A79797' }}
                  >
                    {value}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
