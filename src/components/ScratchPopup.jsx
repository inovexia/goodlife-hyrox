'use client';

export default function ScratchPopup({ data, onClose }) {
  return (
    <div className='popup-overlay'>
      <div className='popup-card'>
        <button className='popup-close' onClick={onClose}>
          ×
        </button>

        <h2>{data.popup_title}</h2>
        <p className='popup-subtitle'>{data.popup_subtitle}</p>

        <img
          src={data.prize_image}
          alt={data.prize_name}
          className='popup-image'
        />

        <h3>{data.prize_name}</h3>
        <p>{data.popup_description}</p>

        <button className='popup-cta'>{data.popup_cta_text}</button>
      </div>
    </div>
  );
}
