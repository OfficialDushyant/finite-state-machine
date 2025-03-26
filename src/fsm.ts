/**
 * TransitionTableType defines the structure for the transition table.
 */
export type TransitionTableType<Q>  = {
  [state: string]: {
    [input: string]: Q;
  };
}; 

/**
 * FiniteStateMachine is a generic class that represents a finite state machine.
 */
export class FiniteStateMachine<Q, S> {
  private currentState: Q;
  private readonly transitionTable: TransitionTableType<Q>;

  constructor(initialState: Q, transitionTable: TransitionTableType<Q>) {
    this.currentState = initialState;
    this.transitionTable = transitionTable;
  }

  /**
   * process is a method that takes an input and transitions the state machine to the next state.
   * @param input - The input key
   */
  process(input: S): void {
    const stateKey = String(this.currentState);
    const inputKey = String(input);
    if (!(stateKey in this.transitionTable) || !(inputKey in this.transitionTable[stateKey])) {
      throw new Error(`Invalid transition from state ${this.currentState} with input ${input}`);
    }
    this.currentState = this.transitionTable[stateKey][inputKey];
  }

  /**
   * Returns the current state.
   * @returns The current state.
   */
  public getState(): Q {
    return this.currentState;
  }

  /**
   * run is a method that takes an array of inputs and transitions the state machine to the final state.
   * @param inputs - An array of inputs.
   * @returns The final state.
   */
  public run(inputs: S[]): Q {
    inputs.forEach(input => this.process(input));
    return this.currentState;
  }
}
