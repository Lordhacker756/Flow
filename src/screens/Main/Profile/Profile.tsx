import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../../constants/colors';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {settings} from '../../../data';

const Profile = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.profilePicContainer}>
        <Image
          style={styles.profilePic}
          source={require('../../../assets/profile.jpg')}
        />
        <TouchableOpacity style={styles.editIcon}>
          <Feather name="edit" size={25} color={colors.theme_red} />
        </TouchableOpacity>
      </View>
      <View style={styles.moreDetails}>
        <Text style={styles.name}>Utkarsh Mishra</Text>
        <Text style={styles.email}>utkarshmishra2001@gmail.com</Text>
      </View>
      <View style={styles.options}>
        {settings.map((item, index) => (
          <TouchableOpacity style={styles.option} key={index}>
            {item.family === 'FontAwesome5' ? (
              <FontAwesome5
                name={item.icon}
                size={25}
                color={colors.theme_red}
              />
            ) : item.family === 'AntDesign' ? (
              <AntDesign name={item.icon} size={25} color={colors.theme_red} />
            ) : item.family === 'MaterialIcons' ? (
              <MaterialIcons
                name={item.icon}
                size={25}
                color={colors.theme_red}
              />
            ) : null}

            <Text style={styles.optionText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Profile;
