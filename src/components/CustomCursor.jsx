import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [hoverDark, setHoverDark] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      const btn = e.target.closest('button, a, .magnetic-btn, .faq-question-btn');
      const img = e.target.closest('.editorial-img-wrap, img');

      if (target) {
        setActive(true);
        setCursorText(target.getAttribute('data-cursor') || 'VIEW');
      } else if (btn) {
        setActive(true);
        setCursorText('SELECT');
        setHoverDark(btn.classList.contains('magnetic-btn-primary'));
      } else if (img) {
        setActive(true);
        setCursorText('EXPLORE');
        setHoverDark(false);
      } else {
        setActive(false);
        setCursorText('');
        setHoverDark(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${active ? 'active' : ''} ${hoverDark ? 'hover-dark' : ''}`}
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`
      }}
    >
      {active && cursorText}
    </div>
  );
};
