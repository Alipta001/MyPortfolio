import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');

    if (!mediaQuery.matches) {
      return undefined;
    }

    const updatePosition = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    const handlePointerDown = () => setIsPointer(true);
    const handlePointerUp = () => setIsPointer(false);
    const handlePointerLeave = () => setVisible(false);
    const handleHoverStart = (event) => {
      setIsPointer(true);
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };
    const handleHoverEnd = () => setIsPointer(false);

    window.addEventListener('pointermove', updatePosition);
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointerleave', handlePointerLeave);

    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, label, [role="button"]'
    );

    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', handleHoverStart);
      element.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('pointermove', updatePosition);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointerleave', handlePointerLeave);

      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleHoverStart);
        element.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  return (
    <div
      className={`cursor-shell ${visible ? 'visible' : 'hidden'} ${isPointer ? 'cursor-active' : ''}`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      aria-hidden="true"
    >
      <div className="cursor-orbit" />
      <div className="cursor-ring" />
      <div className="cursor-core" />
    </div>
  );
}
