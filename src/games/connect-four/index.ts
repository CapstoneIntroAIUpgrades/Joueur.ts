// DO NOT MODIFY THIS FILE

import { IGameNamespace } from "../../joueur/interfaces";
import { AI } from "./ai";
import { Game } from "./game";

import { GameObject } from "./game-object";
import { Player } from "./player";

/**
 * This is a collection of all the classes that ConnectFour uses to work.
 * @hidden
 */
export const namespace: IGameNamespace = {
    AI,
    Game,
    GameObjectClasses: {
        GameObject,
        Player,
    },
    gameVersion: "ff3da34375459be10b77fd8f82b24d9880f0a100e48e2202812118bfcfd42e1e",
};
