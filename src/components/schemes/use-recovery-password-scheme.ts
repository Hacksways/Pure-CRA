import { z } from "zod";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email(),
});

export type RecoveryPasswordForm = z.infer<typeof schema>;

export const useRecoveryPasswordScheme = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RecoveryPasswordForm>({ resolver: zodResolver(schema) });

  return { handleSubmit, control };
};
