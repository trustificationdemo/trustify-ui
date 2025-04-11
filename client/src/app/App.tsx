import "./App.css";
import type React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { AppRoutes } from "./Routes";
import { AnalyticsProvider } from "./components/AnalyticsProvider";
import { NotificationsProvider } from "./components/NotificationsContext";
import { DefaultLayout } from "./layout";

import "@patternfly/patternfly/patternfly.css";
import "@patternfly/patternfly/patternfly-addons.css";

const App: React.FC = () => {
  return (
    <Router>
      <AnalyticsProvider>
        <NotificationsProvider>
          <DefaultLayout>
            <AppRoutes />
          </DefaultLayout>
        </NotificationsProvider>
      </AnalyticsProvider>
    </Router>
  );
};

export default App;
