# hello-angular-motoko
This is an example of locally implementing and deploying the Internet Computer's motoko project along side Angular.

-----------
## Getting started

- [Install DFX](https://sdk.dfinity.org/docs/quickstart/local-quickstart.html). Please keep in mind the dfx cli currently only runs on Linux and Apple based PCs.
- [Install Angular Globally](https://angular.io/guide/setup-local)
- Install npm packages from the project root:

    ```
    npm install
    ```
- Initalize the project declarations and dfx processes:
    ```Bash
    # Deploys your canisters to the replica and generates your candid interface
    npm run init:dfx
    ```

-----

## Serving the project locally
- You can use the following command:

    ```bash
    # Starts the replica, running in the background
    # Serves Angular and dfx canisters locally with hot reloading
    npm run start
    ```
    Once the job completes, your application will be available at `http://localhost:4200`.

    If you make any changes while in development mode, the project will recompile on both the Angular and motoko side.

-----

## Deploying the project to the IC:
From the project root:

 1. [Follow this guide except for the following](https://kyle-peacock.com/blog/dfinity/your-first-canister) - The `canister_id.json` file you need to modify is in the project root. Update both "motoko" and "www" "ic" properties. Please do not attempt to deploy as provided in the last part of the guide. Instead, run the command in step 2.
	 
    ```bash
    # canister_id.json
    {
    "motoko": {
        # replace this with your unique cansiter from the above guide
        "ic":"65yca-4yaaa-aaaak-qaqcq-cai"
    },
    "www": {
         # replace this with a second unique cansiter from the above guide
        "ic": "zcp5t-tqaaa-aaaaj-aijea-cai"
    }
   
    ```
	
 2. Execute `npm run deploy:dfx` to deploy the project to your IC canisters.

CLI commands run from the project root

|         `npm run`       |Description                         
|----------------|-------------------------------
|`init:dfx`| Initial bootstrap of the IC.   
|`start`| Serve both project IC canisters locally with hot reloading.         
|`deploy:dfx`         |Deploy to IC           
|`restart:dfx`         |Restarts the local canister execution environment and web server processes. You can use this to Start the IC services as well.
|`restart:clean:dfx`|Starts the local canister execution environment and web server processes in a clean state by removing checkpoints from your project cache. You can use this to set your project cache to a new state when troubleshooting or debugging.|
|`generate:motoko`| Generate canister type declarations for motoko supported programming languages. This will generate the `src/declarations` folder and remove conflicts. These generated js files allow you to consume the motoko language service on the front end. i.e `const  ic_service = require('src/declarations/motoko').motoko;`

-----

### To learn more about working with dfx, see the following documentation available online:

- [Quick Start](https://sdk.dfinity.org/docs/quickstart/quickstart-intro.html)
- [SDK Developer Tools](https://sdk.dfinity.org/docs/developers-guide/sdk-guide.html)
- [Motoko Programming Language Guide](https://sdk.dfinity.org/docs/language-guide/motoko.html)
- [Motoko Language Quick Reference](https://sdk.dfinity.org/docs/language-guide/language-manual.html)
- [JavaScript API Reference](https://erxue-5aaaa-aaaab-qaagq-cai.raw.ic0.app)


## Notes
- The npm `build` command is used by the IC build process. Using it may have unintended side effects.
- The npm `prebuild` and `prestart` are used by the IC service, respectively.

