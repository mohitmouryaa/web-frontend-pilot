import React from 'react';
import { doctorData } from '../../../utils/constants';
import { uppercaseFirstLetterOfEachWord } from '../../../utils/function';
import { Image } from 'primereact/image';

export default function Profile() {
  return (
    <div className="flex">
      <div className="flex-1">
        {Object.entries(doctorData).map(([key, value], index) => {
          return (
            <div className="flex line-height-1" key={index}>
              <div className="flex-initial flex align-items-left justify-content-left font-bold m-2 px-2 py-2 w-3 line-height-1">
                {uppercaseFirstLetterOfEachWord(key)} :
              </div>
              <div
                className="flex-initial flex align-items-left justify-content-left font-light m-2 ml-7 px-2 py-2 w-4 line-height-1"
                style={{ color: '#A79797' }}
              >
                {value}
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ width: '22vw' }}>
        <Image src="/img/doctor-profile-1.svg" alt="Doctor Profile" />
        <div className="font-bold">{doctorData.name}</div>
        <div className="font-light">{'Alec@simmmple.com'}</div>
      </div>
    </div>
  );
}
