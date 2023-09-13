"use client";

import React, { createContext, useContext, useState } from "react";

interface IQuoteContext {
  showModal: boolean;
  openQuoteModal: () => void;
  closeQuoteModal: () => void;
}

const QuoteContext = createContext<IQuoteContext | undefined>(undefined);

export const QuoteProvider = ({ children }: { children: React.ReactNode }) => {
  const [showModal, setShowModal] = useState(false);

  const openQuoteModal = () => {
    setShowModal(true);
  };

  const closeQuoteModal = () => {
    setShowModal(false);
  };

  return (
    <QuoteContext.Provider value={{ showModal, openQuoteModal, closeQuoteModal }}>
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuote = (): IQuoteContext => {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    throw new Error("useQuote must be used within a QuoteProvider");
  }

  return context;
};
