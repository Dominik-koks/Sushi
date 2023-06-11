import React from 'react';

export default function Map() {
  return (
    <div className='map'>
      <div className="map-container">
        <div className="map-title">
          <p>Каждая кухня работает со своей зоной доставки,<br />чтобы привезти еду максимально быстро</p>
        </div>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <a
            href="https://yandex.ru/maps/org/goran/165725828075/?utm_medium=mapframe&utm_source=maps"
            style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px" }}>
            Горан
          </a>
          <a
            href="https://yandex.ru/maps/11011/khasavurt/category/cafe/184106390/?utm_medium=mapframe&utm_source=maps"
            style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>
            Кафе в Хасавюрте
          </a>
          <a
            href="https://yandex.ru/maps/11011/khasavurt/category/coffee_shop/35193114937/?utm_medium=mapframe&utm_source=maps"
            style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "28px" }}>
            Кофейня в Хасавюрте
          </a>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=46.598002%2C43.248983&mode=poi&poi%5Bpoint%5D=46.596858%2C43.249031&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D165725828075&z=17.86"
            width="100%"
            height="500"
            frameborder="1"
            allowfullscreen="true"
            style={{ position: "relative" }}></iframe>
        </div>
      </div>
    </div>
  );
}
