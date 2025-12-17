'use client';

import { useEffect, useRef, useState } from 'react';
import ScratchPopup from './ScratchPopup';

export default function ScratchCard({ apiUrl = '/api/scratch-card' }) {
  const canvasRef = useRef(null);
  const [data, setData] = useState(null);
  const [isScratched, setIsScratched] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Fetch dummy API
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [apiUrl]);

  // Scratch logic
  useEffect(() => {
    if (!data) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = 360;
    canvas.height = 360;

    // Red scratch layer
    ctx.fillStyle = '#ff1d3c';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // IMPORTANT: erase mode
    ctx.globalCompositeOperation = 'destination-out';

    const brush = new Image();
    brush.src = '/scratch-mask.png';

    let isDrawing = false;

    const scratch = (x, y) => {
      ctx.drawImage(brush, x - 40, y - 40, 80, 80);
    };

    const checkScratchPercent = () => {
      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      let cleared = 0;

      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) cleared++;
      }

      if (cleared / (pixels.length / 4) > 0.45) {
        setIsScratched(true);
        setShowPopup(true);
      }
    };

    const start = () => (isDrawing = true);
    const end = () => {
      isDrawing = false;
      checkScratchPercent();
    };

    const move = (e) => {
      if (!isDrawing) return;

      const rect = canvas.getBoundingClientRect();
      const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;

      scratch(x, y);
    };

    canvas.addEventListener('mousedown', start);
    canvas.addEventListener('mouseup', end);
    canvas.addEventListener('mousemove', move);

    canvas.addEventListener('touchstart', start);
    canvas.addEventListener('touchend', end);
    canvas.addEventListener('touchmove', move);

    return () => {
      canvas.removeEventListener('mousedown', start);
      canvas.removeEventListener('mouseup', end);
      canvas.removeEventListener('mousemove', move);
    };
  }, [data]);

  if (!data) return null;

  return (
    <>
      <h2 className='scratch-title'>{data.scratch_title}</h2>

      <div className='scratch-container'>
        <div className='prize-layer'>
          <img src={data.prize_image} alt={data.prize_name} />
        </div>

        <div className='scratch-underlay'></div>

        {!isScratched && <canvas ref={canvasRef} className='scratch-canvas' />}
      </div>

      {showPopup && (
        <ScratchPopup data={data} onClose={() => setShowPopup(false)} />
      )}
    </>
  );
}
