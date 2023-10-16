import { Edit, PersonOutline } from "assets/icons";
import { HeaderLogo } from "assets/icons/header-logo";
import Logout from "assets/icons/logout";
import PlayArrow from "assets/icons/play-arrow";
import Trash from "assets/icons/trash";
import { Avatar } from "../avatar";
import { Button } from "../button";
import { Dropdown } from "../dropdown";
import { DropdownItem } from "../dropdown/dropdownItem";
import { DropdownItemWithIcon } from "../dropdown/dropdownItem/dropdownItemWithIcon";
import { TestAva } from "../textava/testava";
import { Typography } from "../typography";
import s from "./header.module.scss";

type Props = {
  variant?: "with button" | "with avatar";
};

export const Header = ({ variant = "with button" }: Props) => {
  return (
    <header className={s.header}>
      <HeaderLogo />
      {variant === "with avatar" ? (
        <div className={s.userBlock}>
          <Typography variant="subtitle1" as="span" className={s.userName}>
            User name
          </Typography>

          <Dropdown
            trigger={
              <div className={s.wrapperAvatar}>
                <Avatar
                  src={
                    "https://fikiwiki.com/uploads/posts/2022-02/1644918620_17-fikiwiki-com-p-krasivie-kartinki-visokogo-razresheniya-19.jpg"
                  }
                  size={36}
                  name="User"
                />
              </div>
            }
          >
            <DropdownItem>
              <Avatar
                src={
                  "https://fikiwiki.com/uploads/posts/2022-02/1644918620_17-fikiwiki-com-p-krasivie-kartinki-visokogo-razresheniya-19.jpg"
                }
                size={36}
                name="User"
              />
              <div>
                <Typography variant="subtitle2">User name</Typography>
                <Typography
                  variant="caption"
                  style={{ color: "var(--color-dark-100)" }}
                >
                  example@email.com
                </Typography>
              </div>
            </DropdownItem>
            <DropdownItemWithIcon
              icon={<PersonOutline />}
              text="My Profile"
              onSelect={() => {}}
            />
            <DropdownItemWithIcon
              icon={<Logout />}
              text="Sign Out"
              onSelect={() => {}}
            />
          </Dropdown>
        </div>
      ) : (
        <Button>
          <Typography variant="subtitle2" as="span">
            Sign In
          </Typography>
        </Button>
      )}
    </header>
  );
};
