// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: 'https://localhost:5001/api/',
  apiBinaria: 'https://apimarketplace.azure-api.net/',
  tokenBinariaOCR: '655ff315512745a69652bd815447c0f2',
  tokenBinariaFace: '238371a1791b4c518b26915f8d1863ac',
  ws: 'wss://prestaqi.com:81/ws',
  hubConnectionBinaria: 'https://binariaapiservices.azurewebsites.net/ChatHub'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
