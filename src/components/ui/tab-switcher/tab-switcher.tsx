import * as TabsRadix from "@radix-ui/react-tabs";
import { ReactNode } from "react";
import { Typography } from "../typography";
import s from "./tab-switcher.module.scss";

type Tab = {
  title: string;
  value: string;
  disabled?: boolean;
};

type Props = {
  tabs: Tab[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children?: ReactNode;
};

export const TabSwitcher = ({
  tabs,
  defaultValue,
  value,
  onValueChange,
  children,
}: Props) => {
  return (
    <div>
      <TabsRadix.Root
        defaultValue={defaultValue}
        value={value}
        onValueChange={onValueChange}
      >
        <TabsRadix.List className={s.list}>
          {tabs.map((t) => {
            return (
              <TabsRadix.Trigger
                className={`${s.default}`}
                autoFocus={defaultValue === t.value ? true : false}
                value={t.value}
                disabled={t.disabled}
              >
                <Typography variant="body1">{t.title}</Typography>
              </TabsRadix.Trigger>
            );
          })}
        </TabsRadix.List>
        {children}
      </TabsRadix.Root>
    </div>
  );
};

type TabSwitcherContent = {
  value: string;
  children?: ReactNode;
};

export const TabSwitcherContent = ({ value, children }: TabSwitcherContent) => {
  return (
    <TabsRadix.Content className={s.content} value={value}>
      {children}
    </TabsRadix.Content>
  );
};
