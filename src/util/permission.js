import { PermissionsAndroid } from 'react-native';

const hasPermission = async (permission) => {
  try {
    return await PermissionsAndroid.check(permission);
  } catch (err) {
    console.warn(err, 'PERMISSION CHECK');
  }
};

const checkPermission = async (permission) => {
  console.log(permission);
  if (await hasPermission(permission)) {
    return await true;
  } else {
    try {
      const granted = await PermissionsAndroid.request(
        permission,
        {
          title: 'Yes, we Scan',
          message: 'Please give us your Camera Permissions',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('permission enabled');
        return await true;
      } else {
        console.log('permission denied');
        return await false;
      }
    } catch (err) {
      console.warn(err);
    }
  }
};

export default checkPermission;
