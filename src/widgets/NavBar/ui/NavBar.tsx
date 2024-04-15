import React from 'react';
import cls from './Navbar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink";

interface NavbarProps {
  className?: string;
}

const NavBar = ({className}: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>Главная</AppLink>
        <AppLink theme={AppLinkTheme.RED} to="/about">О сайте</AppLink>
      </div>
    </div>
  );
};

export default NavBar;