import type {MenuSectionSlots, SlotsToClasses} from "@nextui-org/theme";

import {BaseSection, SectionProps} from "@nextui-org/aria-utils";
import {DividerProps} from "@nextui-org/divider";

import {MenuItemProps} from "../menu-item";

export interface MenuSectionBaseProps<T extends object = {}> extends SectionProps<"ul", T> {
  /**
   * The menu section classNames.
   */
  classNames?: SlotsToClasses<MenuSectionSlots>;
  /**
   * The menu items classNames.
   */
  itemClasses?: MenuItemProps["classNames"];
  /**
   * Shows a divider between sections
   * @default false
   */
  showDivider?: boolean;
  /**
   * The divider props
   */
  dividerProps?: DividerProps;
}

const MenuSectionBase = BaseSection as (props: MenuSectionBaseProps) => JSX.Element;

export default MenuSectionBase;
