import React, { Suspense } from "react";
import PageLoadingSpinner from "Components/Spinner/PageLoadingSpinner";
import { Route, Routes } from "react-router-dom";
import AppLayout from "AppLayout";
import ROUTES from "Routes";
import FullPageSpinner from "Components/Spinner/FullPageSpinner";
import "@twa-dev/sdk";

function App() {
  const appRoutes = Object.values(ROUTES) || [];

  return (
    <React.Fragment>
      <Suspense fallback={<PageLoadingSpinner extraClass="w-screen h-screen" />}>
        <Routes>
          {/* App Layout  */}
          <Route element={<AppLayout />}>
            {appRoutes.map((route, index) => {
              const { element: Element } = route;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Suspense fallback={<FullPageSpinner />}>
                      <Element />
                    </Suspense>
                  }
                />
              );
            })}
          </Route>
        </Routes>
      </Suspense>
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
    </React.Fragment>
  );
}

export default App;
