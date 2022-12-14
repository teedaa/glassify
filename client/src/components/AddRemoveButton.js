import React from "react";
import Auth from "../utils/auth";
import { SaveButton } from "./SaveButton";
import { RemoveButton } from "./RemoveButton";
import { USER } from "../utils/query";
import { useQuery } from "@apollo/client";
import { Center } from "@mantine/core";

export function AddRemoveButton({ cocktailId }) {
  let currentlySaved = false;

  const { loading: currentUserLoading, data: currentUserData } = useQuery(USER);
  if (Auth.loggedIn() && !currentUserLoading) {
    if (
      !currentUserData.user.savedCocktails.some((obj) => obj._id === cocktailId)
    ) {
      currentlySaved = true;
    }
  }
  return (
    <>
      {Auth.loggedIn() ? (
        <>
          {currentlySaved ? (
            <Center>
              <SaveButton cocktailId={cocktailId} />
            </Center>
          ) : (
            <Center>
              <RemoveButton cocktailId={cocktailId} />
            </Center>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
