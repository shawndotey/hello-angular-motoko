// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  MOTOKO_CANISTER_ID: process.env.MOTOKO_CANISTER_ID,
  MOTOKO_CANISTER_HOST: process.env.MOTOKO_CANISTER_HOST
};
