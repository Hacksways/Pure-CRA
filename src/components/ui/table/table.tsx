import { ComponentPropsWithoutRef } from "react";
import s from "./table.module.scss";

type Data = {
  title: string;
  cardsCount: number;
  updated: string;
  createdBy: string;
};

type Props = {
  data: Data[];
} & ComponentPropsWithoutRef<"table">;

export const Table = ({ ...rest }: ComponentPropsWithoutRef<"table">) => {
  return <table {...rest} className={s.table}></table>;
};

export const TableHead = ({ ...rest }: ComponentPropsWithoutRef<"thead">) => {
  return <thead {...rest} className={s.thead}></thead>;
};

export const TableHeadCell = ({ ...rest }: ComponentPropsWithoutRef<"th">) => {
  return <th {...rest} className={s.th}></th>;
};

export const TableBody = ({ ...rest }: ComponentPropsWithoutRef<"tbody">) => {
  return <tbody {...rest}></tbody>;
};

export const TableRow = ({ ...rest }: ComponentPropsWithoutRef<"tr">) => {
  return <tr {...rest} className={s.row}></tr>;
};

export const TableCell = ({ ...rest }: ComponentPropsWithoutRef<"td">) => {
  return <td {...rest} className={s.td}></td>;
};
