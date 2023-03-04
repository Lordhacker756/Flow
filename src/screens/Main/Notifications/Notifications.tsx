import {View, Text, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {notifications} from '../../../data';

const Notifications = () => {
  return (
    <View style={styles.pageContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={notifications}
        renderItem={({item}) => (
          <View style={styles.dayNotificationContainer}>
            <Text style={styles.dayNotificationTitle}>{item.title}</Text>
            {item.notifications.map(notification => (
              <View style={styles.dayNotification} key={notification.id}>
                <Text style={styles.dayNotificationHeading}>
                  {notification.title}
                </Text>
                <Text style={styles.dayNotificationText}>
                  {notification.text}
                </Text>
              </View>
            ))}
          </View>
        )}
      />
    </View>
  );
};

export default Notifications;
