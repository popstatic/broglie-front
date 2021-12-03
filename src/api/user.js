import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUser = async () => {
  try {
    const value = await AsyncStorage.getItem('@user');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return null;
  }
};

export const setUser = async (user) => {
  try {
    await AsyncStorage.setItem('@user', JSON.stringify(user));
  } catch (e) {
    return null;
  }
};