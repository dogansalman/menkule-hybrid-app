# menkule-hybrid-app
GET SHA-1 KEY
keytool -v -list -keystore ~/.android/debug.keystore

CREATE KEYSTORE
keytool -genkey -v -keystore YourApp.keystore -alias YourApp -keyalg RSA -keysize 2048 -validity 10000

RUN RELEASE CONFİG
ionic run android --prod --release --buildConfig=build.json
