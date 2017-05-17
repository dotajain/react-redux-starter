const API = 'https://react.didierfranc.com';

import json from '../../../resources/data/AccountListConnection.json';
console.log(json);

export const ACCOUNTLIST = json;
export const LOGIN = `${API}/login`;
export const LOGIN_WITH_TOKEN = `${API}/token`;