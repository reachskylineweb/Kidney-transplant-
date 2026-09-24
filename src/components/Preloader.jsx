import React, { useEffect, useState } from 'react';
import { ASSETS } from '../constants/assets';

export const Preloader = ({ onComplete }) => {
  const [counter, setCounter] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 1200; // 1.2s rapid counter
    const steps = 20;
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 800);
          }, 300);
          return 100;
        }
        return prev + 5;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`preloader ${isExiting ? 'exit' : ''}`}>
      <div className="preloader-header">
        <img src={ASSETS.GEM_LOGO} alt="GEM Hospital" className="preloader-logo" />
        <span style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          CHENNAI • PERUNGUDI
        </span>
      </div>

      <div className="preloader-body">
        <div className="preloader-title-sm">SPECIALIST CAMPAIGN</div>
        <div className="preloader-title-lg">
          ABO-INCOMPATIBLE<br />
          KIDNEY TRANSPLANT
        </div>
      </div>

      <div className="preloader-footer">
        <div>CLINICAL EVALUATION PROGRAM</div>
        <div className="preloader-counter">{counter}%</div>
      </div>
    </div>
  );
};
