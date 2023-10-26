import * as Select from "@radix-ui/react-select";
import { useState } from "react";
import s from "./select-box.module.scss";
import { ArrowDown } from "assets/icons/arrow-down";
import { ArrowUp } from "assets/icons/arrow-up";
import { Typography } from "../typography";

type Props = {
  disabled?: boolean;
};

const countries: any = { france: "🇫🇷", "united-kingdom": "🇬🇧", spain: "🇪🇸" };

export const SelectBox = ({ disabled }: Props) => {
  const [value, setValue] = useState("france");

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
      }}
    >
      <Select.Root
        disabled={disabled}
        onValueChange={setValue}
        open={open}
        onOpenChange={setOpen}
      >
        <Select.Trigger className={`${s.default} ${s.SelectTrigger}`}>
          <Select.Value
            placeholder={
              <Typography variant="body1">Pick an option</Typography>
            }
          >
            <Typography variant="body1">{countries[value]}</Typography>
          </Select.Value>
          <Select.Icon asChild>
            {open ? <ArrowUp /> : <ArrowDown disabled={disabled} />}
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            className={s.content}
            position="popper"
            collisionPadding={0}
            sideOffset={-1}
          >
            <Select.Viewport>
              <Select.Item className={s.item} value="france">
                <Select.ItemText>France</Select.ItemText>
              </Select.Item>
              <Select.Item className={s.item} value="united-kingdom">
                <Select.ItemText>United Kingdom</Select.ItemText>
              </Select.Item>
              <Select.Item className={s.item} value="spain">
                <Select.ItemText>Spain</Select.ItemText>
              </Select.Item>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};
