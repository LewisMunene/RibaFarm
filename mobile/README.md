## Pre-requisites
- Node.js
- npm
- Expo CLI
- Android Studio (if you plan to test using the Android Emulator)

## Running the mobile Application
To run the app, it is simpler to use the Expo Go App to run it on your Android or iOS device. 
1. Navigate to the RibaFarms folder
```
cd \mobile\RibaFarms
```
2. Install dependencies
```
npm i
```
3. Navigate to the project folder and run
```
npm start
```
4. To test the application directly on your mobile phone, install the Expo Go app from Play Store or App Store
5. From the Expo Go app, scan the QR code and the application loads on your mobile phone
If you plan on testing using the Android emulator, 
1. From Android Studio, locate the path to your Android SDK.
2. Set ANDROID_HOME:
- Open System Properties > Environment Variables.
- Under "User variables" or "System variables", click "New" and add:
- Variable name: ANDROID_HOME
- Variable value: pathtoyourandroidsdk:\AndroidSDK
3. Add platform-tools to PATH:
In the same Environment Variables window, find the "Path" variable and click "Edit".
- Add: pathtoyourandroidsdk:\AndroidSDK\platform-tools
4. Restart your terminal or computer for changes to take effect.
5. Start the application, then in the terminal, press a to load the application in the emulator.
