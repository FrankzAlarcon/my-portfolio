import React, { useState, useEffect } from 'react';

function useOnScroll() {
  const [showFixed, setShowFixed] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 50;
      if (showFixed !== newShowFixed) setShowFixed(newShowFixed);
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [showFixed]);
  return {
    showFixed,
  };
}

export default useOnScroll;
