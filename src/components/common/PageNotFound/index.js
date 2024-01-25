import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';

function PageNotFound() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(30);
  const [timerActive, setTimerActive] = useState(true);

  useEffect(() => {
    if (timerActive && seconds > 0) {
      const timerId = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);

      return () => {
        clearTimeout(timerId);
      };
    } else if (seconds === 0) {
      navigate('/');
      setTimerActive(false);
    }
  }, [timerActive, seconds]);

  return (
    <div>
      <div className="flex flex-column align-items-center">
        <div className="w-15rem">
        <Image src="/img/svg/pageNotFound.svg" alt="Image" />
        </div>
        <div className="text-4xl font-bold text-primary">404 Error</div>
        <div className="m-1 mb-2">Page not found</div>
        <div className="w-max">
          <Link className="w-max" to="/">
            <Button label="Visit Dashboard" />
          </Link>
          <div>You will be redirected to homepage in {seconds} seconds...</div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
