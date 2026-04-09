// config/env.ts

// account info and other env variables
export const ENV = {
  baseUrl: process.env.BASE_URL!,
  username: process.env.ADMIN_USERNAME!,
  password: process.env.ADMIN_PASSWORD!
};

export const VALID_USER = {
  email: process.env.VALID_USER!,
  password: process.env.VALID_PASSWORD!
};

export const INVALID_USER = {
  email: process.env.INVALID_USER!,
  password: process.env.INVALID_PASSWORD!
};

export const LOGIN_PAGE = {
  url: process.env.LOGIN_URL!,
  email: process.env.LOGIN_EMAIL_SELECTOR!,
  password: process.env.LOGIN_PASSWORD_SELECTOR!,
  button: process.env.LOGIN_BUTTON_SELECTOR!,
  rememberMe: process.env.LOGIN_REMEMBER_ME_SELECTOR!,
  eyeIcon: process.env.LOGIN_EYE_ICON_SELECTOR!,
  errorMsg: process.env.LOGIN_ERROR_MSG_SELECTOR!,
  errorMsgPass: process.env.LOGIN_ERROR_MSG_PASS_SELECTOR!,
  errorMsgUser: process.env.LOGIN_ERROR_MSG_USER_SELECTOR!
};

export const LOGOUT_PAGE = {
  userProfile: process.env.LOGOUT_USER_PROFILE_SELECTOR!,
  logoutButton: process.env.LOGOUT_BUTTON_SELECTOR!
};

export const ORDERS_LIST_PAGE = {
  url: process.env.ORDER_LIST_URL!,
  apiUrl: process.env.ORDER_LIST_API_URL!,
  importButton: process.env.ORDER_IMPORT_BUTTON_SELECTOR!,
  downloadTemplateImportButton: process.env.ORDER_DOWNLOAD_TEMPLATE_IMPORT_BUTTON_SELECTOR!,
  importFileInput: process.env.ORDER_IMPORT_FILE_INPUT_SELECTOR!,
  cancelImportButton: process.env.ORDER_CANCEL_IMPORT_BUTTON_SELECTOR!,
  confirmImportButton: process.env.ORDER_CONFIRM_IMPORT_BUTTON_SELECTOR!,
  importPhaseProgress: process.env.ORDER_IMPORT_PHASE_PROGRESS_SELECTOR!,
  importSuccessText: process.env.ORDER_SUCCESS_TEXT_SELECTOR!,
  importFailedText: process.env.ORDER_FAILED_TEXT_SELECTOR!,
  exportButton: process.env.ORDER_EXPORT_BUTTON_SELECTOR!,
  exportDateFromInput: process.env.ORDER_EXPORT_DATE_FROM_INPUT_SELECTOR!,
  exportDateToInput: process.env.ORDER_EXPORT_DATE_TO_INPUT_SELECTOR!,
  cancelExportButton: process.env.ORDER_CANCEL_EXPORT_BUTTON_SELECTOR!,
  confirmExportButton: process.env.ORDER_CONFIRM_EXPORT_BUTTON_SELECTOR!,
  importDoneButton: process.env.ORDER_IMPORT_DONE_BUTTON_SELECTOR!,
  searchInput: process.env.ORDER_SEARCH_INPUT_SELECTOR!,
  dateFromInput: process.env.ORDER_DATE_FROM_INPUT_SELECTOR!,
  dateToInput: process.env.ORDER_DATE_TO_INPUT_SELECTOR!,
  searchButton: process.env.ORDER_SEARCH_BUTTON_SELECTOR!
}

export const NEWS_LIST_PAGE = {
  url: process.env.NEWS_LIST_URL!,
  apiUrl: process.env.NEWS_LIST_API_URL!,
  createOrEditUrl: process.env.NEWS_LIST_CREATE_OR_EDIT_URL!,
  searchInput: process.env.NEWS_LIST_SEARCH_INPUT_SELECTOR!,
  roleTypeDropdown: process.env.NEWS_LIST_ROLE_TYPE_DROPDOWN_SELECTOR!,
  filterButton: process.env.NEWS_LIST_FILTER_BUTTON_SELECTOR!,
  clearFilterButton: process.env.NEWS_LIST_CLEAR_FILTER_BUTTON_SELECTOR!,
  createBtn: process.env.NEWS_LIST_CREATE_BUTTON_SELECTOR!,
  tableRows: process.env.NEWS_LIST_TABLE_ROWS_SELECTOR!,
  tableColumns: process.env.NEWS_LIST_TABLE_COLUMNS_SELECTOR!,
  tableColumnsHasSort: process.env.NEWS_LIST_TABLE_COLUMNS_HAS_SORT_SELECTOR!,
  tableRowsHasSort: process.env.NEWS_LIST_TABLE_ROWS_HAS_SORT_SELECTOR!,
  rowActions: process.env.NEWS_LIST_ROW_ACTIONS_SELECTOR!,
  firstPageButton: process.env.NEWS_LIST_FIRST_PAGE_BUTTON_SELECTOR!,
  prevPageButton: process.env.NEWS_LIST_PREV_PAGE_BUTTON_SELECTOR!,
  pageActive: process.env.NEWS_LIST_PAGE_ACTIVE_SELECTOR!,
  nextPageButton: process.env.NEWS_LIST_NEXT_PAGE_BUTTON_SELECTOR!,
  lastPageButton: process.env.NEWS_LIST_LAST_PAGE_BUTTON_SELECTOR!,
  pageSizeDropdown: process.env.NEWS_LIST_PAGE_SIZE_DROPDOWN_SELECTOR!,
  titleField: process.env.NEWS_LIST_TITLE_FIELD_SELECTOR!,
  seoTitleField: process.env.NEWS_LIST_SEO_TITLE_FIELD_SELECTOR!,
  slugField: process.env.NEWS_LIST_SLUG_FIELD_SELECTOR!,
  shortDescriptionField: process.env.NEWS_LIST_SHORT_DESCRIPTION_FIELD_SELECTOR!,
  contentField: process.env.NEWS_LIST_CONTENT_FIELD_SELECTOR!,
  backButton: process.env.NEWS_LIST_BACK_BUTTON_SELECTOR!,
  saveButton: process.env.NEWS_LIST_SAVE_BUTTON_SELECTOR!
};