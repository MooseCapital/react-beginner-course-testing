import React, { useEffect, useState, Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

// Custom hook for prefetching
const usePrefetch = (importStatement) => {
  const [component, setComponent] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    importStatement().then((module) => {
      if (!isCancelled) {
        setComponent(module.default);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [importStatement]);

  return component;
};

export {usePrefetch}
