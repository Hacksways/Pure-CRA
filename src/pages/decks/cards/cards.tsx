import { Button } from "components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "components/ui/table/table";
import { Typography } from "components/ui/typography";
import { useParams } from "react-router-dom";
import { useCreateCardMutation, useGetCardsQuery } from "services/decks";
import s from "./cards.module.scss";

export const Cards = () => {
  const { deckID } = useParams();

  const [createCard] = useCreateCardMutation();

  const { data } = useGetCardsQuery({
    id: deckID as string,
  });

  // console.log(data);

  const onClickCreateCard = () => {

    createCard({ id: deckID as string, question: "Laugh", answer: "Haha" });
  };

  return (
    <div className={s.cards}>
      <Button className={s.button} onClick={onClickCreateCard}>
        <Typography variant="subtitle2" as="span">
          Add New Card
        </Typography>
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Question</TableHeadCell>
            <TableHeadCell>Answer</TableHeadCell>
            <TableHeadCell>Last Updated</TableHeadCell>
            <TableHeadCell>Grade</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.items?.map((card) => (
            <TableRow key={card.id}>
              <TableCell>{card.question}</TableCell>
              <TableCell>{card.answer}</TableCell>
              <TableCell>
                {new Date(card.updated).toLocaleDateString()}
              </TableCell>
              <TableCell>{card.grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
