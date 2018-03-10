// DO NOT MODIFY THIS FILE

import { IGameNamespace } from "../../joueur/interfaces";
import { AI } from "./AI";
import { Game } from "./game";

import { Checker } from "./checker";
import { GameObject } from "./game-object";
import { Player } from "./player";

/**
 * This is a collection of all the classes that Checkers uses to work.
 */
export const namespace: IGameNamespace = {
    AI,
    Game,
    GameObjectClasses: {
      Checker,
      GameObject,
      Player,
    },
};
