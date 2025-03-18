import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SWRConfig } from "swr";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import store from "./redux/store";
import APIService from "./service/api.service";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/Theme.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Suspense>
          <ThemeProvider theme={theme} >
            <Provider store={store}>
              <SWRConfig
                value={{
                  // refreshInterval: 3000,
                  fetcher: (url) => APIService.fetcher(url),
                }}
              >
                <App />
              </SWRConfig>
            </Provider>
          </ThemeProvider>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
