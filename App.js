import React, { useMemo, useState } from 'react';
import {StyleSheet, StatusBar, LogBox} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Provider as PaperProvide, DarkTheme as DarkThemePaper, DefaultTheme as DefaultThemePaper } from 'react-native-paper';
import { NavigationContainer, DarkTheme as DarkThemeNavigation, DefaultTheme as DefaultThemeNavigation } from '@react-navigation/native';

import { Provider as ProviderRedux } from "react-redux";
import StoreFn from "./src/redux/store";

import Navigation from "./src/navigation/Navigation";
import PreferencesContext from "./src/context/PreferencesContext";

LogBox.ignoreAllLogs();

export default function App() {
  const [theme, setTheme] = useState('dark');
  const store = StoreFn();
  DefaultThemePaper.colors.primary = "#1ae1f2";
  DarkThemePaper.colors.primary = "#1ae1f2";
  DarkThemePaper.colors.accent = "#1ae1f2"

  DarkThemeNavigation.colors.background = "#192734";
  DarkThemeNavigation.colors.card = "#15212b";

  const toggleTheme = () => {//setState theme
    setTheme(theme === "dark" ? "light" : "dark");
  }
  console.log(store);
  const preference = useMemo(
    () => ({
      theme,
      toggleTheme,      
    }),
    [theme],
  );

  return (   
    <ProviderRedux store={store}>
      <PreferencesContext.Provider  value={preference}>
        <PaperProvide theme={theme === "dark" ? DarkThemePaper : DefaultThemePaper}>
            <StatusBar barStyle={theme === "dark" ? 'light-content' : "dark-content"} />
            <NavigationContainer theme={theme === "dark" ? DarkThemeNavigation : DefaultThemeNavigation}>       
              <Navigation />
            </NavigationContainer>        
        </PaperProvide>
        </PreferencesContext.Provider>
    </ProviderRedux>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 100,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
