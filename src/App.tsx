import { CheckEMail } from "components/auth/check-email/check-email";
import { SignIn } from "components/auth/login-form/sign-in";
import { RecoveryPassword } from "components/auth/recovery-password/recovery-password";
import { Header } from "components/ui/header/header";
import { SelectBox } from "components/ui/select-box/select-box";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "components/ui/table/table";
import { useState } from "react";
import { Router } from "router";

type Sort = {
  key: string;
  direction: "asc" | "desc";
} | null;

function App() {
  const [sort, setSort] = useState<Sort>(null);

  const handleSort = (key: string) => {
    if (sort && sort.key === key) {
      setSort({
        key,
        direction: sort.direction === "asc" ? "desc" : "asc",
      });
    } else {
      setSort({
        key,
        direction: "asc",
      });
    }
  };
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
