import { Button } from "components/ui/button";
import { Modal } from "components/ui/modal/modal";
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
import { NavLink } from "react-router-dom";
import {
  Deck,
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
} from "services/decks";
import s from "./decks.module.scss";

type CurrentDeck = Pick<Deck, "id" | "name">;

export const Decks = () => {
  const [name, setName] = useState<string>("");
  const [currentPage, setcurrentPage] = useState<number>(1);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [currentDeck, setСurrentDeck] = useState<CurrentDeck>(
    {} as CurrentDeck,
  );

  const { data } = useGetDecksQuery({ name, currentPage });
  const [createDeck] = useCreateDeckMutation();
  const [deleteDeck] = useDeleteDeckMutation();

  const onClickAddNewDeckButton = () => {
    createDeck({ name: "Temp test deck" });
  };

  const onClickDeleteDeckIcon = (id: string, name: string) => {
    setСurrentDeck({ id, name });
    setOpenModal(true);
  };

  const onClickDeleteDeckButton = () => {
    deleteDeck({ id: currentDeck.id });
    setOpenModal(false);
  };

  const onClickCloseButton = () => {
    setOpenModal(false);
  };

  const onChangeSearchTextField = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  return (
    <div className={s.pageDeck}>
      <Modal
        title={"Delete Deck"}
        open={openModal}
        onClose={onClickCloseButton}
      >
        <Typography className={s.textModal} variant="body2" as="span">
          Do you really want to remove <b>Deck {currentDeck.name}?</b>
          {"\n"}
          All cards will be deleted.
        </Typography>
        <div className={s.blockButton}>
          <Button variant="secondary" onClick={onClickCloseButton}>
            <Typography variant="subtitle2" as="span">
              Cancel
            </Typography>
          </Button>
          <Button onClick={onClickDeleteDeckButton}>
            <Typography variant="subtitle2" as="span">
              Delete Pack
            </Typography>
          </Button>
        </div>
      </Modal>

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
              <NavLink className={s.deckName} to={`/cards/${deck.id}`}>
                <TableCell>{deck.name}</TableCell>
              </NavLink>
              <TableCell>{deck.cardsCount}</TableCell>
              <TableCell>
                {new Date(deck.updated).toLocaleDateString()}
              </TableCell>
              <TableCell>{deck.author.name}</TableCell>
              <TableCell>
                <button
                  className={s.tempButton}
                  onClick={() => onClickDeleteDeckIcon(deck.id, deck.name)}
                >
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
