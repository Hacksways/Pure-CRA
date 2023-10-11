import { baseApi } from "../base-api";
import { CreateDeckArgs, Deck, Decks, GetDecksParams } from "./decks.types";

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
    };
  },
});

export const { useGetDecksQuery, useCreateDeckMutation } = DecksService;
