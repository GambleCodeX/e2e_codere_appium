# Cucumber WebdriverIO-V8

Run native automation for Codere app (android) using cucumber-wdio-appium with page object model.

## Supports

- VSCode
- JavaScript
- Native/Hybrid Android apps
- Contains sample test scenario in Cucumber
- Page Object Model
- Allure HTML reports

## Architecture info

Given that this e2e automation project on Codere app has been performed with Cucumber (as test layer framework) and WebdriverIO with appium service (as automation tool), here some notes about its architecture:
- WebdriverIO with appium service lets us to set the initial configuration to stablish the appium session and interact with the mobile devices (either virtual or real devices). In order to configure an Android (or iOS) device, we need to set the proper capabilities, for the provided project we are covering just the Android virtual device defined in `config/android.local.conf.js`, however others could be added, even the tests could be run using an external service like Browserstack, with a pool of real devices.
- Cucumber feature files are located in `test/features/_codereDocumentation`
- Those features, written in gherkin, are linked to Cucumber step definitions located in `test/features/stepDefinitions`(1 step in the feature file = 1 step in the step definitions files)
- Last but not least, since the POM has been implemented, we will treat each page/screen/module in the app as an independent file in our source code. Each page contains the required selectors and methods to interact with the elements of the page. The step definitions point to actions/methods defined in the pages.
Then page files are located in `test/src/pages`.

## Installation guide (Beware of mandatory versions)

- WebdriverIO v8
- Cucumber v8
- Node version 18.16.1, execute `npm install -g node@18.16.1`
- NPM version 9, execute `npm install -g npm@latest`, currently 9.5.1
- JAVA JDK 11 or higher, execute `brew tap homebrew/cask-versions` and `brew install --cask zulu11`
- Appium 2.0.1, execute `npm i -g appium@next` to install latest version (to install a new appium version, first uninstall the existing one by `npm uninstall -g appium`)
- UIAutomator2 driver, execute `appium driver install uiautomator2` or `appium driver update uiautomator2`, current version 2.9.0
- Install [Appium inspector](https://github.com/appium/appium-inspector/releases)

To ensure everything is installed properly
-  Install appium doctor `npm install appium-doctor -g` and run `appium-doctor` in the terminal [Appium doctor](https://www.npmjs.com/package/appium-doctor)
- In case there are missing environment variables, jump to the next section.

### Environment variables config

- Edit the `~/.zshrc` (or bash_profile), the environment variables should look like:

```
export JAVA_HOME=$HOME/OpenJDK/jdk-18.0.1.1.jdk/Contents/Home
export PATH=$JAVA_HOME/bin:$PATH
export ANDROID_HOME=$HOME/Library/Android/sdk
export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
```

- Run once again `appium-doctor` in the terminal to check if the appium setup is successful. If not, please follow the guidelines/troubleshoting from appium-doctor.

### Additional requirements

For Android
- Android Studio, SDK tools & platform tools
- AVD Manager to create & configure android emulators (with developer options enabled)
- [Appium driver UIAutomator2](https://www.npmjs.com/package/appium-uiautomator2-driver)


## Running tests & Reports

Follow the below commands 
- Clone the project - `https://github.com/rsksmart/swallet-automation`.

- Install dependencies using `npm i` in the terminal.
(To install code upgrades, execute `rm -rf node_modules && npm cache clean -f && rm package-lock.json && npm i`)

- In Android Studio, configure and run the Android device emulator accordingly using the Virtual Device Manager (it's mandatory to have the emulator configured & running before launching the tests).

- Update the Android capabilities 'deviceName' and 'platFormVersion' in `config/android.local.conf.js`. 

- Execute `test:android` script to run android native app locally

- Execute `allure:report` script to get the test execution results. After executing, if everything went well we should see the following report

<img width="842" alt="image" src="https://github.com/lokali/e2e_codere_automation/assets/101832531/845f27c5-ca3d-45ae-ae70-91d6b0249763">



### VSCode tricks

- To visualize NPM Scripts view go to View -> Open View... -> NPM Scripts
- To create step definitions from feature files easily [Cuke Step Definition Generator extension] (https://marketplace.visualstudio.com/items?itemName=muralidharan92.cuke-step-definition-generator&utm_source=VSCode.pro&utm_campaign=AhmadAwais#:~:text=generate%20step%20definition-,Below%20Are%20The%203%20Different%20Ways%20To%20Trigger%20The%20Cuke,proceed%20to%20generate%20step%20definition)

## Sources

Click below to know more 
- [Appium Introduction](http://appium.io/docs/en/about-appium/intro/)
- [Appium Capabilities](http://appium.io/docs/en/writing-running-appium/caps/)
- [Appium package installation](https://www.npmjs.com/package/appium/v/2.0.1)
- [Running Appium Tests](http://appium.io/docs/en/writing-running-appium/running-tests/)
- [Webdriver.IO](https://webdriver.io/docs/) [Selectors](https://webdriver.io/docs/selectors) [Recorder](https://webdriver.io/docs/record)
- [Cucumber](https://cucumber.io/docs/cucumber/)
