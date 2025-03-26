# Name of the Docker image
IMAGE_NAME = fsm-mod-three

# Build the Docker image
build:
	docker build -t $(IMAGE_NAME) .

# Run tests using the Docker container (ts-jest will compile your TS tests)
test:
	docker run --rm $(IMAGE_NAME) npm test

# Run the mod-three example using the Docker container
run:
	docker run -it --rm $(IMAGE_NAME) npm start