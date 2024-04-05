import { Routes as BrowserRouterRoutes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewContact } from "./pages/NewContact";
import { EditContact } from "./pages/EditContact";

export const Routes = () => (
  <BrowserRouterRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/new" element={<NewContact />} />
    <Route path="/edit/:id" element={<EditContact />} />
  </BrowserRouterRoutes>
);
