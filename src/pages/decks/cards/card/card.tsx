import Button from "components/ui/button/button";
import { Card } from "components/ui/card";
import { Typography } from "components/ui/typography";
import { useParams } from "react-router-dom";
import { useGetDeckQuery, useLearnDeckQuery } from "services/decks";
import s from "./card.module.scss";

export const CardPage = () => {
  const { deckID } = useParams();
  const id = deckID as string;

  const { data: deck } = useGetDeckQuery({ id });
  const { data: card } = useLearnDeckQuery({ id });

  const classes = {
    question: `${s.textWrapper} ${s.question}`,
    attempts: `${s.textWrapper} ${s.attempts}`,
  };

  return (
    <Card className={s.card}>
      <Typography variant="large">Learn {deck?.name}</Typography>

      <div className={classes.question}>
        <Typography variant="subtitle1">Question:</Typography>

        <Typography variant="body1">
          {card?.questionImg && (
            <img
              className={s.image}
              src={card?.questionImg}
              alt="Question cover"
            />
          )}
          {card?.question}
        </Typography>
      </div>

      <div className={classes.attempts}>
        <Typography variant="body2">
          Количество попыток ответов на вопрос:
        </Typography>
        <Typography variant="subtitle2">{card?.shots}</Typography>
      </div>

      <div className={s.buttonWrapper}>
        <Button fullWidth>
          <Typography variant="subtitle2">Show Answer</Typography>
        </Button>
      </div>
    </Card>
  );
};
