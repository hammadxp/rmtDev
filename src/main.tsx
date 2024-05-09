import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BookmarksContextProvider from "./contexts/BookmarksContextProvider.tsx";
import SearchQueryContextProvider from "./contexts/SearchQueryContextProvider.tsx";
import SortContextProvider from "./contexts/SortContextProvider.tsx";
import PaginationContextProvider from "./contexts/PaginationContextProvider.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BookmarksContextProvider>
        <PaginationContextProvider>
          <SortContextProvider>
            <SearchQueryContextProvider>
              <App />
            </SearchQueryContextProvider>
          </SortContextProvider>
        </PaginationContextProvider>
      </BookmarksContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
