import { Button } from "components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "components/ui/table/table";
import { TextField } from "components/ui/text-field";
import { Typography } from "components/ui/typography";
import { ChangeEvent, useState } from "react";
import { useCreateDeckMutation, useGetDecksQuery } from "services/decks";
import s from "./decks.module.scss";

export const Decks = () => {
  const [name, setName] = useState<string>("");
  const [currentPage, setcurrentPage] = useState<number>(1);

  const { data } = useGetDecksQuery({ name, currentPage });
  const [createDeck] = useCreateDeckMutation();

  const onClickAddNewDeckButton = () => {
    createDeck({ name: "Temp test deck" });
  };

  const onChangeSearchTextField = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  return (
    <div className={s.pageDeck}>
      <TextField isSearch value={name} onChange={onChangeSearchTextField} />
      <Button className={s.button} onClick={onClickAddNewDeckButton}>
        <Typography variant="subtitle2" as="span">
          Add new Deck
        </Typography>
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Cards</TableHeadCell>
            <TableHeadCell> Last Updated</TableHeadCell>
            <TableHeadCell> Created by</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.items?.map((deck) => (
            <TableRow key={deck.id}>
              <TableCell>{deck.name}</TableCell>
              <TableCell>{deck.cardsCount}</TableCell>
              <TableCell>
                {new Date(deck.updated).toLocaleDateString()}
              </TableCell>
              <TableCell>{deck.author.name}</TableCell>
              <TableCell>icons...</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
