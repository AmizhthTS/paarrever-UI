import { useEffect, useState } from 'react';

const useLiveLocation = () => {
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error('Geolocation is not supported');
      return;
    }

    const watcher = navigator.geolocation.watchPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        setLocation({ latitude, longitude });

        // Reverse geocode
        try {
          const res = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=20bb2d159fe04ebdb874af65d05ded38`
          );
          const data = await res.json();
          setRegion(data.results[0].components);
        } catch (e) {
          console.error('Geocoding error', e);
        }
      },
      (err) => console.error('Error watching position', err)
    );

    return () => navigator.geolocation.clearWatch(watcher);
  }, []);

  return { location, region };
};
export default useLiveLocation;
