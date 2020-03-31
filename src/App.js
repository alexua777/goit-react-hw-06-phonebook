import React, { Component } from "react";
import PhoneBook from "./components/PhoneBook";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import Layout from "./components/Layout";
import ThemeContext from "./context/ThemeContext";
import { themeConfig } from "./context/ThemeContext";

export default class App extends Component {
  state = {
    theme: "light"
  };

  changeTheme = () => {
    this.setState(state => ({
      theme: state.theme === "light" ? "dark" : "light"
    }));
  };

  
  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          config: themeConfig[this.state.theme],
          onThemeChange: this.changeTheme
        }}
      >
        <Layout>
          <PhoneBook />
          <Filter />

          <ContactList />
        </Layout>
      </ThemeContext.Provider>
    );
  }
}
