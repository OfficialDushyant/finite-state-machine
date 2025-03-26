import { createInterface } from "readline";
import { modThree } from "./src/modThree";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a binary number: ", (answer) => {
    try {
        console.log(`The mod 3 of ${answer} is ${modThree(answer)}`);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
          } else {
            console.error("An unknown error occurred.");
          }
    }
    rl.close();
});