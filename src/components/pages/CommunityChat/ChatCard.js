import { Image } from 'primereact/image';
import React from 'react';
import { Badge } from 'primereact/badge';

export default function ChatCard({
  name = '',
  role = '',
  img = '',
  badge = null,
  lastSeen = false,
}) {
  return (
    <div>
      <div
        className={`flex flex-column border-bottom-1 border-black-alpha-20 ${
          !lastSeen ? 'h-4rem' : 'h-5rem'
        }`}
      >
        <div className="flex mt-2">
          <div
            className="profileImageDiv flex align-items-center justify-content-center mx-2 mt-1"
            style={{ width: '15%' }}
          >
            <Image src={`/img/${img}`} />
          </div>
          <div className="flex-column" style={{ width: '65%' }}>
            <span
              className="mx-1 font-normal text-sm"
              style={{ color: '#585859' }}
            >
              {name}
            </span>
            <div
              className="flex align-items-center mx-1 font-light text-xs uppercase"
              style={{ color: '#777777' }}
            >
              {role}
            </div>
          </div>
          {badge && (
            <div className="flex-1" style={{ width: '10%' }}>
              <Badge value={badge}></Badge>
            </div>
          )}
        </div>
        {lastSeen && (
          <div className="mx-3 font-light text-sm" style={{ color: '#5D7081' }}>
            Last Seen 2:52 AM
          </div>
        )}
      </div>
    </div>
  );
}
