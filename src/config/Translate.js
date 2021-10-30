import React from 'react';
import * as RNLocalize from "react-native-localize";
import { config } from "../config/Configuration";//multilanguage function is imported

export default function Lang(param) {
    const currentLocale = RNLocalize.getLocales()[0].languageCode;
    const { lang } = config;
    const traduce = lang[currentLocale];
    const result = traduce[param];
    return (result);
}