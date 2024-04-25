// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify it.
// Instead, you should only be reading its variables and calling its functions.

/* tslint:disable */
// This is code written by a computer, it might be funky.
// (though we will try to make it readable to humans)

import { BaseGame } from "../../joueur/base-game";
import { GameObject } from "./game-object";
import { Player } from "./player";

// <<-- Creer-Merge: imports -->>
// any additional imports you want can be placed here safely between creer runs
// <<-- /Creer-Merge: imports -->>

/**
 * The traditional 6x7 board with pieces.
 */
export class Game extends BaseGame {

    /**
     * The number of tiles on the board along the y (vertical) axis.
     */
    public readonly cols!: number;

    /**
     * A mapping of every game object's ID to the actual game object. Primarily
     * used by the server and client to easily refer to the game objects via ID.
     */
    public readonly gameObjects!: { [id: string]: GameObject | undefined };

    /**
     * List of all the players in the game.
     */
    public readonly players!: Player[];

    /**
     * A string describing all of the information necessary to fully represent
     * the game's state.
     */
    public readonly repString!: string;

    /**
     * The number of cells on the board along the x (horizontal) axis.
     */
    public readonly rows!: number;

    /**
     * A unique identifier for the game instance that is being played.
     */
    public readonly session!: string;

    // <<-- Creer-Merge: functions -->>
    // any additional functions you want to add to this class can be preserved here
    // <<-- /Creer-Merge: functions -->>
}
