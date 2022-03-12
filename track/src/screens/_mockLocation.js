import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 20,
      altitudeAccuracy: 5,
      altitude: 5,
      latitude: 34.74430165439705 + increment * tenMetersWithDegrees,
      longitude: 72.35278535385821 + increment * tenMetersWithDegrees,
    }
  };
}

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter)
  });
  counter++;
}, 1000);
