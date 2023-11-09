import {
  Cards,
  CreateCardArgs,
  Deck,
  DecksResponse,
  DeleteDeck,
  DeleteDeckParams,
  GetCardsParams,
  GetDecksParams,
  LearnDeckParams,
  SaveGradeParams,
  UpdateDeckParamsType,
} from "./decks.types";

import { baseApi } from "services/base-api";
import { Card } from "services/cards/cards.types";

export const DecksService = baseApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getDecks: builder.query<DecksResponse, GetDecksParams | void>({
        query: (params) => ({
          url: "v1/decks",
          params: params ?? {},
        }),
        providesTags: ["Decks"],
      }),
      createDeck: builder.mutation<Deck, FormData>({
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
        query: (params) => {
          const { id, ...otherParams } = params;

          return {
            url: `v1/decks/${id}/cards`,
            params: otherParams,
          };
        },
        providesTags: ["Cards"],
      }),
      updateDeck: builder.mutation<Deck, UpdateDeckParamsType>({
        query: ({ id, body }) => ({
          url: `v1/decks/${id}`,
          method: "PATCH",
          body,
        }),
        invalidatesTags: ["Decks"],
      }),
      createCard: builder.mutation<Card, CreateCardArgs>({
        query: (params) => ({
          url: `v1/decks/${params.id}/cards`,
          method: "POST",
          body: params.body,
        }),
        invalidatesTags: ["Cards"],
      }),
      learnDeck: builder.query<Card, LearnDeckParams>({
        query: ({ id, previousCardId }) => ({
          url: `v1/decks/${id}/learn`,
          body: previousCardId,
        }),
        providesTags: ["Learn"],
      }),
      getDeck: builder.query<Deck, { id: string }>({
        query: ({ id }) => ({
          url: `v1/decks/${id}`,
        }),
      }),
      saveGrade: builder.mutation<void, SaveGradeParams>({
        query: ({ id, body }) => ({
          url: `/v1/decks/${id}/learn`,
          method: "POST",
          body,
        }),
        invalidatesTags: ["Learn"],
      }),
    };
  },
});

export const {
  useGetDecksQuery,
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetCardsQuery,
  useUpdateDeckMutation,
  useCreateCardMutation,
  useLearnDeckQuery,
  useGetDeckQuery,
  useSaveGradeMutation,
} = DecksService;
