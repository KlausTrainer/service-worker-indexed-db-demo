'use strict';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').then(registration => {
    console.log(
      'sevice worker registration successful with scope: ',
      registration.scope);
  }).catch(err => {
    console.log('service worker registration failed: ', err);
  });
}
