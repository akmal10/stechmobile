import React, { createContext, useContext, useState } from 'react';

const DateContext = createContext(undefined);

export function DateProvider({ children }) {
  const [selectedPeriod, setSelectedPeriod] = useState('Last 7 Days');
  const [comparisonEnabled, setComparisonEnabled] = useState(false);
  const [selectedComparison, setSelectedComparison] = useState('None');

  return (
    <DateContext.Provider
      value={{
        selectedPeriod,
        setSelectedPeriod,
        comparisonEnabled,
        setComparisonEnabled,
        selectedComparison,
        setSelectedComparison,
      }}
    >
      {children}
    </DateContext.Provider>
  );
}

export function useDate() {
  const context = useContext(DateContext);
  if (context === undefined) {
    throw new Error('useDate must be used within a DateProvider');
  }
  return context;
}
