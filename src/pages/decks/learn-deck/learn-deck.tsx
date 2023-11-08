import { Modal } from "components/ui/modal";
import { ReactNode, useState } from "react";

type Props = {
  trigger: ReactNode;
};

export const LearnDeck = ({ trigger }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Modal
      trigger={trigger}
      open={open}
      onClose={setOpen}
      title="Learn “Pack Name”"
    ></Modal>
  );
};
