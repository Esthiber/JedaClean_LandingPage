import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/contexts/CartContext";
import Home from "@/pages/Home";
import Store from "@/pages/Store";
import Checkout from "@/pages/Checkout";
import Clients from "@/pages/Clients";
import Team from "@/pages/Team";
import About from "@/pages/About";
import Products from "@/pages/Products";
import Jobs from "@/pages/Jobs";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/tienda" component={Store} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/clientes" component={Clients} />
      <Route path="/equipo" component={Team} />
      <Route path="/nosotros" component={About} />
      <Route path="/productos" component={Products} />
      <Route path="/empleos" component={Jobs} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
