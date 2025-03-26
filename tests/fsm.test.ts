import { FiniteStateMachine } from "../src/fsm";

describe("FiniteStateMachine", () => {
    
    it("should be able process a valid inputs", () => {
        // Simple FSM that switches between two states [A | B]
        const transitionTable = {
            "A": { "set": "B" },
            "B": { "set": "A" }
          };
        const fsm = new FiniteStateMachine<string, string>("A", transitionTable);
        expect(fsm.getState()).toBe("A");
        fsm.process("set");
        expect(fsm.getState()).toBe("B");
        fsm.process("set");
        expect(fsm.getState()).toBe("A");

    });

    it("should throw an error for invalid input", () => {
        const transitionTable = {
            "A": { "set": "B" },
            "B": { "set": "A" }
          };
        const fsm = new FiniteStateMachine<string, string>("A", transitionTable);
        expect(() => fsm.process("get")).toThrow("Invalid transition from state A with input get"); 
    });

    it("should correctly run for multiple inputs", () => {
        //Simple FSM for binary inputs
        // Starting from "0": '1' -> "1", '1' -> "0", etc.
        const transitionTable = {
            "0": { "1": "1", "0": "0" },
            "1": { "1": "0", "0": "1" }
        };
        const fsm = new FiniteStateMachine<string, string>("0", transitionTable);
        const finalState = fsm.run(["1", "1", "0", "1"]);
        expect(finalState).toBe("1");
    });

});