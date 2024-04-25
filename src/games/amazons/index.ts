// DO NOT MODIFY THIS FILE

import { IGameNamespace } from "../../joueur/interfaces";
import { AI } from "./ai";
import { Game } from "./game";

import { GameObject } from "./game-object";
import { Player } from "./player";

/**
 * This is a collection of all the classes that Amazons uses to work.
 * @hidden
 */
export const namespace: IGameNamespace = {
    AI,
    Game,
    GameObjectClasses: {
        GameObject,
        Player,
    },
    gameVersion: "1b2ac0db4655c0c135ffbf80607a97ab5434b880e1b76f1ade9fdaf44670ae23",
};
