import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import router from "./MyRouter/MyRouter.jsx";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import "./index.css";
import "./App.css";
import MyProver from "./MyAuthProvider/MyProver.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <MyProver>
          <div className="max-w-[1920px] mx-auto">
            <RouterProvider router={router} />
          </div>
        </MyProver>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
