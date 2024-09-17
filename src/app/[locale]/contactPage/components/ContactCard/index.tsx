'use client';
import { useEffect } from 'react';
import style from './style.module.scss';

export const ContactCard = () => {
  useEffect(() => {
    const initMap = () => {
      if (window.ymaps) {
        window.ymaps.ready(() => {
          const existingMap = document.getElementById('map');
          if (existingMap) {
            existingMap.innerHTML = '';
          }

          const map = new window.ymaps.Map('map', {
            center: [53.9, 27.5667],
            zoom: 6,
          });

          const placemarks = [
            { coords: [53.9, 27.5667], name: 'Минск, Беларусь' },
            { coords: [55.751574, 37.573856], name: 'Москва, Россия' },
            { coords: [52.2297, 21.0122], name: 'Варшава, Польша' },
          ];

          placemarks.forEach((place) => {
            const placemark = new window.ymaps.Placemark(
              place.coords,
              {
                balloonContent: place.name,
              },
              {
                preset: 'islands#icon',
                iconColor: '#0095b6',
              },
            );

            map.geoObjects.add(placemark);
          });
        });
      }
    };

    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${process.env.NEXT_PUBLIC_YANDEX_MAP_API_KEY}&lang=ru_RU`;
    script.async = true;
    script.onload = initMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className={style.container}>
      <div id="map" className={style.map}></div>
    </div>
  );
};
