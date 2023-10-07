import * as CheckboxRadix from "@radix-ui/react-checkbox";
import { CheckMark } from "assets/icons/check-mark";
import { Typography } from "../typography";

import s from "./checkbox.module.scss";

export type CheckboxProps = {
  className?: string;
  label?: string;
  checked?: boolean;
  onValueChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
};

export const Checkbox = ({
  className = "",
  label,
  checked,
  onValueChange,
  disabled,
  required,
}: CheckboxProps) => {
  return (
    <Typography
      className={`${s.label} ${disabled ? s.labelDisabled : ""}`}
      as={"label"}
      variant={"body2"}
    >
      <CheckboxRadix.Root
        className={`${s.default} ${!checked ? s.uncheck : ""} ${className}`}
        checked={checked}
        onCheckedChange={onValueChange}
        disabled={disabled}
        required={required}
      >
        <CheckboxRadix.Indicator>
          {checked && <CheckMark disabled={disabled} />}
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
      {label}
    </Typography>
  );
};
