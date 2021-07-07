# HelloAngularMotoko
## Introduction
This example demonstrates an Angular application running on the Internet Computer.

## Prerequisites

Verify the following before running this demo:

*  You have downloaded and installed [Node.js](https://nodejs.org).

*  You have downloaded and installed the [DFINITY Canister
   SDK](https://sdk.dfinity.org).

*  You have stopped any Internet Computer or other network process that would
   create a port conflict on 8000.

* Install angular cli Globabally:
    ```
    npm install -g @angular/cli
    ```
## Demo
1. Install your front-end.

   ```text
   npm install
   ```

1. Build your front-end.

   ```text
   ng build
   ```

1. Start a local internet computer.

   ```text
   dfx start
   ```

1. Open a new terminal window.

1. Reserve an identifier for your canister.

   ```text
   dfx canister create --all
   ```

1. Build your canister.

   ```text
   dfx build
   ```

1. Deploy your canister.

   ```text
   dfx canister install --all
   ```

1. Take note of the URL at which the application is accessible.

   ```text
   echo "http://localhost:8000/?canisterId=$(dfx canister id www)"
   ```

1. Open the aforementioned URL in your web browser.
