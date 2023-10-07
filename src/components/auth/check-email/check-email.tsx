import { Button } from "../../ui/button";
import { Card } from "components/ui/card";

import s from "./check-email.module.scss";
import { Typography } from "components/ui/typography";
import { Email } from "assets/icons/email";

export const CheckEMail = () => {
  return (
    <Card className={s.card}>
      <Typography variant="large" className={s.title}>
        Check Email
      </Typography>
      <Email className={s.emailIcon} />
      <Typography variant="body2" className={s.description}>
        We’ve sent an Email with instructions to example@mail.com
      </Typography>
      <Button type="submit" fullWidth className={s.button}>
        Back to Sign In
      </Button>
    </Card>
  );
};
