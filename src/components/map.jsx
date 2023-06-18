import React from 'react';

export default function Map() {
  return (
    <div className='map'>
      <div className="map-container">
        <div className="map-title">
          <p>Каждая кухня работает со своей зоной доставки,<br />чтобы привезти еду максимально быстро</p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d600.731711996289!2d46.5966381002723!3d43.24874774040546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404e6ddb7f6cf649%3A0x1515cc4eb6bb44af!2z0JPQvtGA0LDQvQ!5e0!3m2!1sru!2sus!4v1687079806783!5m2!1sru!2sus" title='Goran' width="100%" height="500" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}
