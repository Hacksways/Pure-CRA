import { baseApi } from "../base-api";
import {
  CreateDeckArgs,
  Deck,
  Decks,
  DeleteDeckParams,
  DeleteDeck,
  GetDecksParams,
  Cards,
  GetCardsParams,
} from "./decks.types";

export const DecksService = baseApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getDecks: builder.query<Decks, GetDecksParams | void>({
        query: (params) => ({
          url: "v1/decks",
          params: params ?? {},
        }),
        providesTags: ["Decks"],
      }),
      createDeck: builder.mutation<Deck, CreateDeckArgs>({
        query: (body) => ({
          url: "v1/decks",
          method: "POST",
          body,
        }),
        invalidatesTags: ["Decks"],
      }),
      deleteDeck: builder.mutation<DeleteDeck, DeleteDeckParams>({
        query: (params) => ({
          url: `v1/decks/${params.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Decks"],
      }),
      getCards: builder.query<Cards, GetCardsParams>({
        query: (params) => ({
          url: `v1/decks/${params.id}/cards`,
        }),
      }),
    };
  },
});

export const {
  useGetDecksQuery,
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetCardsQuery,
} = DecksService;
