// react imports
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

//router and query imports
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "@/shared/config/router/routeTree.gen";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

// shadcn, tailwind imports
import "@/shared/styles/index.css";

// create a new router instance and query client
const router = createRouter({ routeTree });
const queryClient = new QueryClient();

// register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// init the root element
const rootElement = document.getElementById("root")!;

// if the root element is not empty, render the app
if (!rootElement.innerHTML) {
  // create a new root element
  const root = ReactDOM.createRoot(rootElement);

  // render the app
  root.render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </StrictMode>
  );
}
