import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Agents from "./pages/Agents";
import Process from "./pages/Process";
import Technology from "./pages/Technology";
import Careers from "./pages/Careers";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import KleviBot from "./components/KleviBot";
import { inject } from "@vercel/analytics"


const queryClient = new QueryClient();

inject(); /* added for vercel analytics */


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/process" element={<Process />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <KleviBot />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
