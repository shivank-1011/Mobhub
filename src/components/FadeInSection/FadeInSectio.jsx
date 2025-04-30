import React, { useEffect, useRef, useState } from "react";
import "./FadeInSection.css";

export default function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // If the element is visible in the viewport
      if (entries[0].isIntersecting) {
        setVisible(true);
        // No need to keep observing once it's visible
        observer.unobserve(domRef.current);
      }
    });
    
    observer.observe(domRef.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
}