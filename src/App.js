import React, { lazy, useMemo } from 'react';
import LandingPage from './components/pages/landingPage';
import Login from './components/pages/Login';
import SignUp from './components/pages/Signup';
import SideBarContainer from './components/pages/SideBarContainer';
import { Route, Routes } from 'react-router-dom/dist';
import { sideBarMenu } from './utils/constants';
import PageNotFound from './components/common/PageNotFound';
import DefaultComponent from './components/common/DefaultComponent';
const AppointmentApp = lazy(() => import('./components/pages/Appointment'));
const DocumentsApp = lazy(() => import('./components/pages/Documents'));
const OrthopedicSpecialistApp = lazy(() =>
  import('./components/pages/OrthopedicSpecialist'),
);
const CommunityApp = lazy(() => import('./components/pages/Community'));
const AppointmentVideoApp = lazy(() =>
  import('./components/pages/Appointment/AppointmentVideo'),
);
const ProfileApp = lazy(() => import('./components/pages/Profile'));

function App() {
  const routeComponent = {
    Documents: DocumentsApp,
    Community: CommunityApp,
    Appointment: AppointmentApp,
    Profile: ProfileApp,
    OrthopedicSpecialists: OrthopedicSpecialistApp,
    AppointmentVideoApp: AppointmentVideoApp,
  };

  function createRoutes(sideBarMenu) {
    if (!Array.isArray(sideBarMenu) || sideBarMenu.length === 0) {
      return null;
    }
    const routeElement = sideBarMenu.map((item, index) => {
      const CurrentElement = routeComponent[item.component] || DefaultComponent;
      return (
        <React.Fragment key={index}>
          <Route
            path={item.path}
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <CurrentElement />
              </React.Suspense>
            }
          />
        </React.Fragment>
      );
    });
    return routeElement;
  }
  const protectedRoutes = useMemo(
    () => createRoutes(sideBarMenu),
    [sideBarMenu],
  );
  return (
    <React.Fragment>
      <Routes>
        <Route path="doctor" element={<SideBarContainer />}>
          {protectedRoutes}
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route
          path="/*"
          element={
            <div>
              <LandingPage />
            </div>
          }
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;