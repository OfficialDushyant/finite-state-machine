# Finite State Machine: mod-3 Calculator

This project demonstrates a simple finite state machine (FSM) implementation in TypeScript to compute the mod‑3 remainder of a binary number. The project includes:

- A generic FSM abstraction with a dedicated `TransitionTableType`.
- A mod‑3 FSM example.
- Unit tests using Jest (configured with ts‑jest).
- An interactive command-line interface that accepts user input.
- A Docker setup for containerized builds and testing.

## Dependencies
***If Node isn’t installed locally, you can use Docker to run this project.***
- **Docker:** For containerized usage

***Alternatively, run the project without Docker.*** 
- **Node.js:** Version 22 (or later recommended)
- **npm:** Installed with Node.js
- **TypeScript:** Installed via npm (as a dev dependency)
- **Jest:** For running unit tests (configured with ts‑jest)

## Project Structure

```plaintext
project-root/
├── index.ts                # Entry point (located at the project root) for interactive mode.
├── src/
│   ├── fsm.ts              # Generic FSM abstraction and TransitionTable type.
│   └── modThree.ts         # mod‑3 FSM implementation.
├── tests/
│   ├── fsm.test.ts         # Unit tests for the FSM abstraction.
│   └── modThree.test.ts    # Unit tests for the mod‑3 example.
├── package.json            # npm configuration, scripts, and dependencies.
├── tsconfig.json           # TypeScript configuration.
├── jest.config.js          # Jest configuration.
├── Dockerfile              # Docker container configuration.
└── Makefile                # Convenience targets for build, test, and run.
```
## Getting Started
**Clone the Repository**
```
git clone https://github.com/OfficialDushyant/finite-state-machine.git
cd finite-state-machine
```
### Without Docker

1. **Install Dependencies**
```
npm install
```
2. **Build the Project** 
Compiles the Typescript files to Javascript:

```
npm run build
```
This will compile your code into the dist/ directory.

3. Run Unit Tests
Run the unit tests using Jest:
```
npm run test
```
4. Run the Application
The application accepts a binary number from the user and outputs its mod‑3 value.
```
npm start
```
Type a valid binary string (e.g., 110) and press Enter. The output will display the mod‑3 result (e.g., 110 -> 0).

### With Docker
1. Ensure Docker is Installed
Verify your Docker installation by running:
```
docker --version
```
2. Build the Docker Image
Use the provided Makefile target:
```
make build
```
This builds the Docker image using Node 22 Alpine as specified in the Dockerfile.

3. Run Unit Tests in Docker
To run the tests inside a Docker container, execute:
```
make test
```

4. Run the Application in Docker
```
make run
```
The Makefile target uses the -it flags so that Docker allocates a TTY and keeps STDIN open. This allows the container to wait for user input.

## Additional Information

- **TypeScript Configuration:**
The tsconfig.json is set up to compile both index.ts (located at the root) and the files under src/ into the dist/ directory.

- **Jest Configuration:**
The jest.config.js file is configured to use ts‑jest for compiling TypeScript tests on the fly.

- **Make File:**
The Makefile provides simple commands:
    - `make build` builds the Docker image.
    - `make test` runs tests in the Docker container.
    - `make run` runs the interactive application in Docker.

> **Thank you for taking the time to review my work; I truly appreciate it**
