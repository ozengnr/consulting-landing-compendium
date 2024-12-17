import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import React from "react";

// Inline ContactForm component
const ContactForm = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify
      className="flex flex-col gap-4 max-w-md mx-auto p-4"
    >
      <input type="hidden" name="form-name" value="contact" />

      <label className="flex flex-col">
        Name:
        <input
          type="text"
          name="name"
          required
          className="border p-2 rounded mt-1"
        />
      </label>

      <label className="flex flex-col">
        Email:
        <input
          type="email"
          name="email"
          required
          className="border p-2 rounded mt-1"
        />
      </label>

      <label className="flex flex-col">
        Message:
        <textarea
          name="message"
          required
          className="border p-2 rounded mt-1"
        />
      </label>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Send
      </button>
    </form>
  );
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
