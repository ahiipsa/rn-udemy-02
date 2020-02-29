import * as Font from 'expo-font';
import {DB} from './db';

export async function bootstrap() {
  await DB.init();
  await Font.loadAsync({
    'opensans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
    'opensans-regular': require('../assets/fonts/OpenSans-Regular.ttf')
  });
}
