import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import InvestmentReport from "@/pages/InvestmentReport";
import ResilientSectorsReport from "@/pages/ResilientSectorsReport";
import Newsletter from "@/pages/Newsletter";
import Launch from "@/pages/Launch";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/reports/indias-next-wave-5-sectors" component={InvestmentReport} />
      <Route path="/reports/resilient-sectors" component={ResilientSectorsReport} />
      <Route path="/subscribe" component={Newsletter} />
      <Route path="/launch" component={Launch} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
