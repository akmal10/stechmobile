# StechLocal - Setup Instructions

This is a vanilla React Native application converted from the original Expo-based DevinMobile app. All TypeScript files have been converted to JavaScript, and all Expo dependencies have been replaced with standard React Native equivalents.

## Project Location
```
/home/ubuntu/repos/DevinMobileVanilla
```

## What Was Converted

### Files Converted (14 total)
1. **Entry Points**
   - `index.js` (from `index.ts`)
   - `App.js` (from `App.tsx`)

2. **Constants**
   - `src/constants/Typography.js` (from `Typography.ts`)

3. **Contexts**
   - `src/contexts/LocationContext.js` (from `LocationContext.tsx`)
   - `src/contexts/DateContext.js` (from `DateContext.tsx`)

4. **Components**
   - `src/components/CommonHeader.js` (from `CommonHeader.tsx`)
   - `src/components/DateFilter.js` (from `DateFilter.tsx`)

5. **Navigation**
   - `src/navigation/TabNavigator.js` (from `TabNavigator.tsx`)

6. **Screens**
   - `src/screens/HomeScreen.js` (from `HomeScreen.tsx`)
   - `src/screens/ReviewsScreen.js` (from `ReviewsScreen.tsx`)
   - `src/screens/AuditScreen.js` (from `AuditScreen.tsx`)
   - `src/screens/GridScreen.js` (from `GridScreen.tsx`)
   - `src/screens/AllReviewsScreen.js` (from `AllReviewsScreen.tsx`)
   - `src/screens/SettingsScreen.js` (from `SettingsScreen.tsx`)

### Key Changes Made

#### Removed Expo Dependencies
- ❌ `expo`
- ❌ `expo-status-bar`
- ❌ `@expo/vector-icons`
- ❌ `expo-font`
- ❌ `@expo/metro-runtime`
- ❌ `registerRootComponent`

#### Added Vanilla React Native Dependencies
- ✅ `react-native-vector-icons` (replaces `@expo/vector-icons`)
- ✅ `@react-navigation/native`
- ✅ `@react-navigation/bottom-tabs`
- ✅ `react-native-screens`
- ✅ `react-native-safe-area-context`
- ✅ `react-native-calendars`
- ✅ `react-native-svg`
- ✅ `prop-types` (for runtime type checking)

#### Font System Updates
- Downloaded Inter font files to `assets/fonts/`:
  - `Inter-Regular.ttf`
  - `Inter-Medium.ttf`
  - `Inter-SemiBold.ttf`
  - `Inter-Bold.ttf`
- Created `react-native.config.js` for font asset linking
- Updated font family names throughout the codebase:
  - `Inter_400Regular` → `Inter-Regular`
  - `Inter_500Medium` → `Inter-Medium`
  - `Inter_600SemiBold` → `Inter-SemiBold`
  - `Inter_700Bold` → `Inter-Bold`
- Ran `npx react-native-asset` to link fonts to iOS and Android projects

#### Import Changes
All files that used Expo-specific imports were updated:
- `import { Ionicons } from '@expo/vector-icons'` → `import Ionicons from 'react-native-vector-icons/Ionicons'`
- `import { StatusBar } from 'expo-status-bar'` → `import { StatusBar } from 'react-native'`
- Removed `registerRootComponent` and replaced with standard `AppRegistry.registerComponent`

## Prerequisites

### For All Platforms
- Node.js >= 20 (already installed via nvm)
- npm or yarn package manager

### For Android Development
- Android Studio
- Android SDK (API level 31 or higher)
- Java Development Kit (JDK 17)
- Android emulator or physical device

### For iOS Development (macOS only)
- Xcode 14 or higher
- CocoaPods
- iOS Simulator or physical device
- Apple Developer account (for device testing)

## Installation & Setup

### 1. Navigate to Project Directory
```bash
cd /home/ubuntu/repos/DevinMobileVanilla
```

Note: The project directory is still named `DevinMobileVanilla` but the app itself is named `StechLocal`.

### 2. Install Dependencies (Already Done)
```bash
npm install
```

### 3. Install iOS Dependencies (macOS only)
```bash
cd ios
pod install
cd ..
```

## Running the Application

### Start Metro Bundler
In one terminal:
```bash
npx react-native start
```

### Run on Android
In another terminal:
```bash
npx react-native run-android
```

**Prerequisites:**
- Android Studio installed and configured
- Android SDK installed
- Android emulator running OR Android device connected via USB with USB debugging enabled

### Run on iOS (macOS only)
In another terminal:
```bash
npx react-native run-ios
```

**Prerequisites:**
- Xcode installed
- iOS Simulator available OR physical iOS device connected

### Run on Specific Device/Simulator
```bash
# iOS - specific simulator
npx react-native run-ios --simulator="iPhone 15 Pro"

# Android - specific emulator
npx react-native run-android --deviceId=emulator-5554
```

## Project Structure

```
StechLocal/
├── android/                  # Android native project
├── ios/                      # iOS native project
├── assets/
│   └── fonts/               # Inter font files (.ttf)
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── CommonHeader.js
│   │   └── DateFilter.js
│   ├── constants/           # App-wide constants
│   │   └── Typography.js
│   ├── contexts/            # React Context providers
│   │   ├── DateContext.js
│   │   └── LocationContext.js
│   ├── navigation/          # Navigation configuration
│   │   └── TabNavigator.js
│   └── screens/             # Screen components
│       ├── AllReviewsScreen.js
│       ├── AuditScreen.js
│       ├── GridScreen.js
│       ├── HomeScreen.js
│       ├── ReviewsScreen.js
│       └── SettingsScreen.js
├── App.js                   # Root component
├── index.js                 # Entry point
├── react-native.config.js   # Font asset configuration
└── package.json             # Dependencies

```

## Troubleshooting

### Metro Bundler Issues
If you encounter caching issues:
```bash
npx react-native start --reset-cache
```

### Android Build Issues
```bash
cd android
./gradlew clean
cd ..
npx react-native run-android
```

### iOS Build Issues
```bash
cd ios
pod deintegrate
pod install
cd ..
npx react-native run-ios
```

### Font Not Loading
The fonts should already be linked, but if you see font issues:
```bash
npx react-native-asset
```

Then rebuild the app:
```bash
# For iOS
cd ios && pod install && cd ..
npx react-native run-ios

# For Android
npx react-native run-android
```

### Vector Icons Not Showing
For Android, the icons should auto-link, but if they don't appear:
1. Check that `react-native-vector-icons` is listed in `package.json`
2. Rebuild the app completely

For iOS:
```bash
cd ios
pod install
cd ..
npx react-native run-ios
```

## Development Notes

### Code Style
- All code is in JavaScript (no TypeScript)
- Uses functional components with React Hooks
- Context API for state management
- React Navigation for routing

### Key Libraries
- **Navigation**: `@react-navigation/native` with bottom tabs
- **Icons**: `react-native-vector-icons/Ionicons`
- **Calendar**: `react-native-calendars`
- **SVG**: `react-native-svg` (for circular progress indicators)
- **Type Checking**: `prop-types` for runtime validation

### Font System
The app uses the Inter font family with 4 weights:
- Regular (400)
- Medium (500)
- SemiBold (600)
- Bold (700)

Font names in code: `Inter-Regular`, `Inter-Medium`, `Inter-SemiBold`, `Inter-Bold`

## Differences from Expo Version

| Feature | Expo | Vanilla React Native |
|---------|------|---------------------|
| Entry Point | `registerRootComponent` | `AppRegistry.registerComponent` |
| StatusBar | `expo-status-bar` | `react-native` StatusBar |
| Icons | `@expo/vector-icons` | `react-native-vector-icons` |
| Fonts | `expo-font` with `useFonts` hook | Asset linking via `react-native-asset` |
| Build | `expo build` | `npx react-native run-android/ios` |
| Web Support | Built-in | Requires `react-native-web` setup |
| Updates | Expo OTA updates | Requires CodePush or similar |

## Next Steps

1. **Test on Emulator/Simulator**: Run the app on an emulator/simulator to verify functionality
2. **Test on Physical Device**: Deploy to a physical device for real-world testing
3. **Configure App Icons**: Add custom app icons in `android/app/src/main/res` and `ios/StechLocal/Images.xcassets`
4. **Configure Splash Screen**: Set up native splash screens for both platforms
5. **Set Up Deployment**: Configure signing and release builds for app store deployment

## Original Expo Project

The original Expo-based project is still available at:
```
/home/ubuntu/repos/devinmobile
```

Branch: `devin/1723622916-homepage-widgets`

## Support

For React Native documentation and support:
- Official Docs: https://reactnative.dev/
- React Navigation: https://reactnavigation.org/
- Vector Icons: https://github.com/oblador/react-native-vector-icons

---

**Project created by**: Devin AI
**Requested by**: @akmal10
**Date**: October 8, 2025
