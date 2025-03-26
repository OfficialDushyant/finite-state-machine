import { FiniteStateMachine, TransitionTableType } from "./fsm";

enum State {
    S0 = 0,
    S1 = 1,
    S2 = 2
}

// Define the transition table for the mod‑3 FSM.
// S0: '0' -> S0, '1' -> S1  
// S1: '0' -> S2, '1' -> S0  
// S2: '0' -> S1, '1' -> S2
const transitionTable: TransitionTableType<State> = {
    [State.S0]: { "0": State.S0, "1": State.S1 },
    [State.S1]: { "0": State.S2, "1": State.S0 },
    [State.S2]: { "0": State.S1, "1": State.S2 }
}


/**
 * computes the mod 3 of a binary string
 * @param inputString - A binary string (unsigned integer)
 * @returns The remainder of the division of the binary string by 3 (0, 1, or 2)
 * @throws An error if the input is not a binary string
 */
export const modThree = (inputString: string): number => {
    // Guard clause for invalid input throw an error
    if(!/^[01]+$/.test(inputString)) {
        throw new Error("Input must be a binary string");
    }

    // Create a new FSM with the transition table and initial state S0
    const fsm = new FiniteStateMachine<State, string>(State.S0, transitionTable);
    const inputs = inputString.split("");
    fsm.run(inputs);
    return fsm.getState() as number;
};