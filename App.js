/* eslint-disable no-console */
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import OneSignal from 'react-native-onesignal';
import AppNav from './src/navigation/AppNav';
import {AuthProvider} from './src/context/AuthContext';
// redux
import store from './src/redux/store';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();

    // OneSignal Initialization
    OneSignal.setAppId('3f63d4d4-87aa-427b-80cf-282971ad6d76');

    // promptForPushNotificationsWithUserResponse will show the native iOS or Android notification permission prompt.
    // We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 8)
    OneSignal.promptForPushNotificationsWithUserResponse();

    // Method for handling notifications received while app in foreground
    OneSignal.setNotificationWillShowInForegroundHandler(
      notificationReceivedEvent => {
        console.log(
          'OneSignal: notification will show in foreground:',
          notificationReceivedEvent,
        );
        // eslint-disable-next-line prefer-const
        let notification = notificationReceivedEvent.getNotification();
        console.log('notification: ', notification);
        const data = notification.additionalData;
        console.log('additionalData: ', data);
        // Complete with null means don't show a notification.
        notificationReceivedEvent.complete(notification);
      },
    );

    // Method for handling notifications opened
    OneSignal.setNotificationOpenedHandler(notification => {
      console.log('OneSignal: notification opened:', notification);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Provider store={store}>
      <AuthProvider>
        <AppNav />
      </AuthProvider>
    </Provider>
  );
};

export default App;
