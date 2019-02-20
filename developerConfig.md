##Generate apk

sudo keytool -genkey -v -keystore school.keystore -alias school -keyalg RSA -keysize 2048 -validity 10000<br>

### android/gradle.properties

MYAPP_RELEASE_STORE_FILE=mymoney.keystore
MYAPP_RELEASE_KEY_ALIAS=mymoney
MYAPP_RELEASE_STORE_PASSWORD=developer
MYAPP_RELEASE_KEY_PASSWORD=develoepr

### android/app/build.gradle

...
android {
...
defaultConfig { ... }

signingConfigs {
release {
storeFile file("mymoeny.keystore")  
 storePassword "developer"
keyAlias "mymoney"  
 keyPassword "developer"  
 }  
 }

===========> OR <<===============

signingConfigs {
release {
if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
storeFile file(MYAPP_RELEASE_STORE_FILE)
storePassword MYAPP_RELEASE_STORE_PASSWORD
keyAlias MYAPP_RELEASE_KEY_ALIAS
keyPassword MYAPP_RELEASE_KEY_PASSWORD
}
}
}
buildTypes {
release {
aaptOptions.cruncherEnabled=false // here
minifyEnabled enableProguardInReleaseBuilds
proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
signingConfig signingConfigs.release
}
}
}
...

###

==> mkdir -p android/app/src/main/assets
===> react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

Custom node_modules/react-native/react.gradle to solve the Duplicate file error perfectly. Add following code into currentBundleTask's creation block (after doFirst block)

          doLast {
    def moveFunc = { resSuffix ->
        File originalDir = file("${resourcesDir}/drawable-${resSuffix}")
        if (originalDir.exists()) {
            File destDir = file("${resourcesDir}/drawable-${resSuffix}-v4")
            ant.move(file: originalDir, tofile: destDir)
        }
    }
    moveFunc.curry("ldpi").call()
    moveFunc.curry("mdpi").call()
    moveFunc.curry("hdpi").call()
    moveFunc.curry("xhdpi").call()
    moveFunc.curry("xxhdpi").call()
    moveFunc.curry("xxxhdpi").call()
}   

cd android
./gradlew assembleRelease


#===============> Swipe on drawer does not work in Android <==================

### MainActivity.java in

import com.facebook.react.ReactActivity;

- import com.facebook.react.ReactActivityDelegate;
- import com.facebook.react.ReactRootView;
- import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

@Override
protected String getMainComponentName() {
return "Example";
}

- @Override
- protected ReactActivityDelegate createReactActivityDelegate() {
- return new ReactActivityDelegate(this, getMainComponentName()) {
-      @Override
-      protected ReactRootView createRootView() {
-       return new RNGestureHandlerEnabledRootView(MainActivity.this);
-      }
- };  
- }
  }





