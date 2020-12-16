import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      Hello: 'Welcome to React and react-i18next',
      Plastic: 'Plastic',
      Paper: 'Paper',
      Metal: 'Metal',
      LogOut: 'Log Out',
      DetailRecy: 'Detail Recyclables',
      RigisterRecy: 'Rigister Recyclables',
      Home: 'Home',
      Cart: 'Cart',
      Nofity: 'Nofity',
      Contact: 'Contact',
    },
  },
  vn: {
    translation: {
      Hello: 'Xin Chào React',
      Plastic: 'Nhựa',
      Paper: 'Giấy',
      Metal: 'Kim Loại',
      LogOut: 'Đăng Xuất',
      DetailRecy: 'Chi tiết gói hàng',
      RigisterRecy: 'Đợi duyệt gói hàng',
      Home: 'Trang Chủ',
      Cart: 'Giỏ Hàng',
      Nofity: 'Thông Báo',
      Contact: 'Thông tin',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'vn',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
