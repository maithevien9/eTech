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
      packageOnSale: 'Package On Sale',
      RigisterRecy: 'Rigister Recyclables',
      Home: 'Home',
      Cart: 'Cart',
      Nofity: 'Nofity',
      Contact: 'Contact',
      Update: 'Update',
      SeLectLanguage: 'Please Select Languege',
      SignIn: 'SIGN IN',
      SignUp: 'SIGN Up',
      UserName: 'UserName',
      PassWord: 'PassWord',
      ReEnterPass: 'Re-Enter Password',
      SelectRole: 'Select Role',
      Collectors: 'Collectors',
      Buyer: 'Buyer',
      packageSaled: 'Package Saled',
      ISell: 'I Sell',
      SelectRoleMenu: 'Seller interface',
      SelectRoleMenu2: 'Buyer interface',
    },
  },
  vn: {
    translation: {
      Hello: 'Xin Chào React',
      Plastic: 'Nhựa',
      Paper: 'Giấy',
      Metal: 'Kim Loại',
      LogOut: 'Đăng Xuất',
      packageOnSale: 'Gói hàng đang bán',
      RigisterRecy: 'Đợi duyệt gói hàng',
      Home: 'Trang Chủ',
      Cart: 'Giỏ Hàng',
      Nofity: 'Thông Báo',
      Contact: 'Thông tin',
      Update: 'Cập nhập',
      SeLectLanguage: 'Vui lòng chọn ngôn ngữ',
      SignIn: 'Đăng Nhập',
      SignUp: 'Đăng Ký',
      UserName: 'Tài Khoản',
      PassWord: 'Mật Khẩu',
      ReEnterPass: 'Vui lòng Nhập lại Mật khẩu',
      SelectRole: 'Lựa chọn vai trò',
      Collectors: 'Người Bán',
      Buyer: 'Người Mua',
      packageSaled: 'Gói Hàng đã bán',
      ISell: 'Tôi Bán',
      SelectRoleMenu: 'Giao diện người bán',
      SelectRoleMenu2: 'Giao diện người mua',
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
