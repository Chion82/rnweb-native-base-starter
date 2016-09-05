import Color from 'color';

import { Platform } from 'react-native';

export default {
  brandPrimary : '#ff5917',
  brandInfo: '#ddd',
  brandSuccess: '#5cb85c',
  brandDanger: '#d9534f',
  brandWarning: '#f0ad4e',
  brandSidebar: '#252932',

  fontFamily: 'HelveticaNeue',
  btnFontFamily: 'HelveticaNeue',
  iconFamily: 'Ionicons',

  inverseTextColor: '#fff',
  textColor: '#000',

  subtitleColor: '#8e8e93',

  fontSizeBase: 15,
  titleFontSize: 17,
  subTitleFontSize: 12,

  inputFontSize: 15,
  inputLineHeight: 24,

  get fontSizeH1 () {
    return this.fontSizeBase*1.8;
  },
  get fontSizeH2 () {
    return this.fontSizeBase* 1.6;
  },
  get fontSizeH3 () {
    return this.fontSizeBase* 1.4;
  },
  get btnTextSize () {
    return this.fontSizeBase* 1.1;
  },
  get btnTextSizeLarge () {
    return this.fontSizeBase* 1.5;
  },
  get btnTextSizeSmall () {
    return this.fontSizeBase* .8;
  },
  get iconSizeLarge () {
    return this.iconFontSize* 1.5;
  },
  get iconSizeSmall () {
    return this.iconFontSize* .6;
  },

  buttonPadding: 6,

  borderRadiusBase: 5,

  get borderRadiusLarge () {
    return this.fontSizeBase* 3.8;
  },

  footerHeight: 55,
  toolbarHeight: (Platform.OS === 'ios' ) ? 64 : 56,
  toolbarDefaultBg: '#ff5917',
  toolbarInverseBg: '#222',

  iosToolbarBtnColor: '#fff',

  toolbarTextColor: '#fff',

  checkboxBgColor: '#039BE5',
  checkboxTickColor: '#fff',

  checkboxSize: 23,

  radioColor: '#7e7e7e',
  get radioSelectedColor() {
    return Color(this.radioColor).darken(0.2).hexString();
  },

  radioBtnSize: 25,

  tabBgColor: '#F8F8F8',
  tabFontSize: 15,
  tabTextColor: '#fff',

  btnDisabledBg: '#b5b5b5',
  btnDisabledClr: '#f1f1f1',

  cardDefaultBg: '#fff',

  get darkenHeader() {
    return Color(this.tabBgColor).darken(0.03).hexString();
  },
  get btnPrimaryBg () {
    return this.brandPrimary;
  },
  get btnPrimaryColor () {
    return this.inverseTextColor;
  },
  get btnSuccessBg () {
    return this.brandSuccess;
  },
  get btnSuccessColor () {
    return this.inverseTextColor;
  },
  get btnDangerBg () {
    return this.brandDanger;
  },
  get btnDangerColor () {
    return this.inverseTextColor;
  },
  get btnInfoBg () {
    return this.brandInfo;
  },
  get btnInfoColor () {
    return this.inverseTextColor;
  },
  get btnWarningBg () {
    return this.brandWarning;
  },
  get btnWarningColor () {
    return this.inverseTextColor;
  },

  borderWidth: 1,
  iconMargin: 7,

  get inputColor () {
    return this.textColor;
  },
  get inputColorPlaceholder () {
    return '#575757';
  },
  inputBorderColor: '#D9D5DC',
  inputSuccessBorderColor: '#2b8339',
  inputErrorBorderColor: '#ed2f2f',
  inputHeightBase: 40,
  inputGroupMarginBottom: 10,
  inputPaddingLeft: 5,
  get inputPaddingLeftIcon () {
    return this.inputPaddingLeft* 8;
  },

  btnLineHeight: 19,

  dropdownBg: '#000',
  dropdownLinkColor: '#414142',

  jumbotronPadding: 30,
  jumbotronBg: '#C9C9CE',

  contentPadding: 10,

  listBorderColor: '#ddd',
  listDividerBg: '#ddd',
  listItemPadding: 9,
  listNoteColor: '#808080',
  listNoteSize: 13,

  iconFontSize: 30,

  badgeColor: '#fff',
  badgeBg: '#ED1727',

  lineHeight: 20,
  iconLineHeight: 37,

  toolbarIconSize: 20,

  toolbarInputColor: '#CECDD2',

  defaultSpinnerColor: '#45D56E',
  inverseSpinnerColor: '#1A191B',

  defaultProgressColor: '#E4202D',
  inverseProgressColor: '#1A191B',

  grey : '#666'
};
