import type React from "react";
import { NavLink } from "react-router-dom";

import {
  Icon,
  Nav,
  NavItem,
  NavList,
  PageSidebar,
} from "@patternfly/react-core";
import ExternalLinkAltIcon from "@patternfly/react-icons/dist/esm/icons/external-link-alt-icon";
import { css } from "@patternfly/react-styles";

import { LayoutTheme } from "./layout-constants";

const LINK_CLASS = "pf-v5-c-nav__link";
const ACTIVE_LINK_CLASS = "pf-m-current";

export const SidebarApp: React.FC = () => {
  const renderPageNav = () => {
    return (
      <Nav id="nav-sidebar" aria-label="Nav" theme={LayoutTheme}>
        <NavList>
          <li className="pf-v5-c-nav__item">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return css(LINK_CLASS, isActive ? ACTIVE_LINK_CLASS : "");
              }}
            >
              Dashboard
            </NavLink>
          </li>
          <li className="pf-v5-c-nav__item">
            <NavLink
              to="/search"
              className={({ isActive }) => {
                return css(LINK_CLASS, isActive ? ACTIVE_LINK_CLASS : "");
              }}
            >
              Search
            </NavLink>
          </li>
          <li className="pf-v5-c-nav__item">
            <NavLink
              to="/sboms"
              className={({ isActive }) => {
                return css(LINK_CLASS, isActive ? ACTIVE_LINK_CLASS : "");
              }}
            >
              SBOMs
            </NavLink>
          </li>
          <li className="pf-v5-c-nav__item">
            <NavLink
              to="/vulnerabilities"
              className={({ isActive }) => {
                return css(LINK_CLASS, isActive ? ACTIVE_LINK_CLASS : "");
              }}
            >
              Vulnerabilities
            </NavLink>
          </li>
          <li className="pf-v5-c-nav__item">
            <NavLink
              to="/packages"
              className={({ isActive }) => {
                return css(LINK_CLASS, isActive ? ACTIVE_LINK_CLASS : "");
              }}
            >
              Packages
            </NavLink>
          </li>
          <li className="pf-v5-c-nav__item">
            <NavLink
              to="/advisories"
              className={({ isActive }) => {
                return css(LINK_CLASS, isActive ? ACTIVE_LINK_CLASS : "");
              }}
            >
              Advisories
            </NavLink>
          </li>
          <li className="pf-v5-c-nav__item">
            <NavLink
              to="/importers"
              className={({ isActive }) => {
                return css(LINK_CLASS, isActive ? ACTIVE_LINK_CLASS : "");
              }}
            >
              Importers
            </NavLink>
          </li>
          <li className="pf-v5-c-nav__item">
            <NavLink
              to="/upload"
              className={({ isActive }) => {
                return css(LINK_CLASS, isActive ? ACTIVE_LINK_CLASS : "");
              }}
            >
              Upload
            </NavLink>
          </li>
          <NavItem
            to={`${window.location.origin}/openapi`}
            target="_blank"
            rel="noopener noreferrer"
          >
            API&nbsp;
            <Icon isInline>
              <ExternalLinkAltIcon />
            </Icon>
          </NavItem>
        </NavList>
      </Nav>
    );
  };

  return <PageSidebar theme={LayoutTheme}>{renderPageNav()}</PageSidebar>;
};
