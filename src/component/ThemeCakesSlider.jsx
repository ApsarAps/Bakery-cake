import React, { useRef, useState, useEffect } from 'react';

const ThemeCakesSlider = ({ themes, setSelectedCategory }) => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; 
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

 
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].clientX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => setIsDragging(false);

 
  useEffect(() => {
    const slider = sliderRef.current;
    const disableScroll = (e) => e.preventDefault();
    slider.addEventListener('touchmove', disableScroll, { passive: false });

    return () => {
      slider.removeEventListener('touchmove', disableScroll);
    };
  }, []);

  return (
    <div
      ref={sliderRef}
      className={`p-4 flex gap-8 overflow-hidden select-none ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {themes.map((theme, index) => (
        <div
          key={index}
          onClick={() => setSelectedCategory(theme.name)}
          className="flex flex-col items-center gap-4 flex-shrink-0"
        >
          <img
            src={theme.image}
            alt={theme.name}
            className="h-[120px] w-[120px] sm:h-[140px] sm:w-[140px] object-cover rounded-full shadow-md hover:scale-110 transition-transform duration-300"
          />
          <p className="font-semibold text-center text-sm">{theme.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ThemeCakesSlider;
