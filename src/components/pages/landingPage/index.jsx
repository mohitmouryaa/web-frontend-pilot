import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import './../../../styles/landing.scss';
import Navbar from '../../common/Navbar';
import MyFooter from '../../common/Footer';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="surface-0 text-700 text-center">
        <div className="heroDivBackGroundImage pt-7">
          <div className="hero-head-tag">
            Musculoskeletal Injury Care Anywhere
          </div>
          <div className="grid heroDiv" style={{ marginLeft: '1.5rem' }}>
            <div className="col-3" style={{ marginBottom: '-141px' }}>
              <div className="text-center p-3 border-round-sm  font-bold ">
                <Image src="img/patient-1.svg" alt="Image" />
              </div>
            </div>
            <div className="col-5" style={{ marginLeft: '-115px' }}>
              <div
                className="text-center p-3 border-round-sm  font-bold "
                style={{ width: '100%', display: 'block' }}
              >
                <Image
                  src="img/doctor-1.svg"
                  alt="Image"
                  style={{ width: '100%' }}
                />
              </div>
            </div>
            <div className="col-4">
              <div className="text-center p-3 border-round-sm">
                <div className="flex flex-wrap align-items-center justify-content-center">
                  <div className="border-round  font-normal p-7 flex align-items-center justify-content-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Odio, dolore. Atque aliquam commodi nisi! Repellendus
                    ducimus alias saepe quisquam, dolor veritatis ex quis et ab,
                    amet modi dolores molestiae at?
                  </div>
                  <Button label="Learn more" severity="secondary" outlined />
                </div>
              </div>
            </div>
          </div>
          <Link to={"/Signup"}>
            <Button
              label="Get Started"
              raised
              className="font-medium px-6 py-3 p-button-raised  white-space-nowrap border-none"
              style={{ background: '#B3ECF2', color: '#3C868E' }}
            />
          </Link>
        </div>

        <div className="surface-0 text-700 text-center mt-7">
          <div className="text-700 font-medium text-5xl mt-6">
            &#9839;1 Cost Driver In Health Care
          </div>
          <div className="text-600 font-normal text-5xl">
            1 In 2 Employees Suffer MSK Pain
          </div>
          <div className="card flex justify-content-center mt-8">
            <Image src="/img/group-doctors.svg" alt="Image" />
          </div>
          <div className="grid doctor-text">
            <div className="col-12 md:col-6 lg:col-3">
              <div className="text-center p-3 border-round-sm font-normal">
                <p className="doc-text">Work</p>
                <p className="doc-text">Injury</p>
                <Button
                  label="Learn more"
                  severity="secondary"
                  outlined
                  className="learn-more-btn"
                />
              </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              <div className="text-center p-3 border-round-sm font-normal">
                <p className="doc-text">Telehealth</p>
                <p className="doc-text">Visit</p>
                <Button
                  label="Learn more"
                  severity="secondary"
                  outlined
                  className="learn-more-btn"
                />
              </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              <div className="text-center p-3 border-round-sm font-normal">
                <p className="doc-text">Happy Talking to</p>
                <p className="doc-text">Doctor</p>
                <Button
                  label="Learn more"
                  severity="secondary"
                  outlined
                  className="learn-more-btn"
                />
              </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              <div className="text-center p-3 border-round-sm font-normal">
                <p className="doc-text">Working</p>
                <p className="doc-text">Again</p>
                <Button
                  label="Learn more"
                  severity="secondary"
                  outlined
                  className="learn-more-btn"
                />
              </div>
            </div>
          </div>

          {/* who we serve */}

          <div className="thirdBlock">
            <div className="thirdBlkHeading">
              <div className="heading">Who We Serve</div>
              <div className="subHeadingWrapper">
                <div className="subHeading">
                  Orthopedic Physicians have a new remote patient monitoring
                  module to serve patients better.
                </div>
              </div>
              <div className="quoteBlock">
                <div className="grid mx-4">
                  <div className="dropShadow">
                    <div className="col-6 leftBox">
                      <div className="quoteIcon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="59"
                          height="48"
                          viewBox="0 0 59 48"
                          fill="none"
                        >
                          <path
                            d="M14.6617 25.1774C17.7236 25.5396 20.02 26.8679 21.5509 29.1623C23.0818 31.4566 23.8473 33.9925 23.8473 36.7698C23.8473 39.6679 22.9052 42.2641 21.021 44.5585C19.2545 46.8528 16.6048 48 13.0719 48C11.6587 48 10.1866 47.7585 8.65569 47.2755C7.12475 46.6717 5.71158 45.7057 4.41617 44.3774C3.12076 43.0491 2.06088 41.2377 1.23653 38.9434C0.412176 36.6491 0 33.7509 0 30.2491C0 23.7283 1.82535 17.8717 5.47605 12.6792C9.12675 7.36604 13.7784 3.13962 19.4311 0L24.5539 7.24528C21.492 8.93584 18.7246 11.2302 16.2515 14.1283C13.8962 16.9057 12.3064 20.4076 11.482 24.634L14.6617 25.1774ZM49.1078 25.1774C52.1697 25.5396 54.4661 26.8679 55.997 29.1623C57.5279 31.4566 58.2934 33.9925 58.2934 36.7698C58.2934 39.6679 57.3513 42.2641 55.4671 44.5585C53.7006 46.8528 51.0509 48 47.518 48C46.1048 48 44.6327 47.7585 43.1018 47.2755C41.5709 46.6717 40.1577 45.7057 38.8623 44.3774C37.5669 43.0491 36.507 41.2377 35.6826 38.9434C34.8583 36.6491 34.4461 33.7509 34.4461 30.2491C34.4461 23.7283 36.2715 17.8717 39.9222 12.6792C43.5729 7.36604 48.2245 3.13962 53.8772 0L59 7.24528C55.9381 8.93584 53.1707 11.2302 50.6976 14.1283C48.3423 16.9057 46.7525 20.4076 45.9281 24.634L49.1078 25.1774Z"
                            fill="#B3ECF2"
                          />
                        </svg>
                      </div>
                      <div className="quoteBox">
                        I'm spending more time with patients and surgical care
                        as they need and less burnout, helps in better patient
                        care.
                      </div>
                      <div className="lineBox">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="179"
                          height="2"
                          viewBox="0 0 179 2"
                          fill="none"
                        >
                          <path
                            d="M1 1H177.5"
                            stroke="#B3ECF2"
                            stroke-width="2"
                            stroke-linecap="round"
                          />
                        </svg>
                      </div>
                      <div className="sign">
                        lorem ipsum
                        <span>Lorem ipsum</span>
                      </div>
                    </div>
                    <div className="col-3 rightBox">
                      <Image src="/img/png/docImage3.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MyFooter />
    </>
  );
}
