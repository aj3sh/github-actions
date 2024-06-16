# Github Actions (Exploring)

## Running Self-Hosted Runner

### Build Runner image

```shell
docker build -t gha-runner -f Dockerfile.runner.linux.amd64 .
```

### Run Runner container

```shell
docker run -it --name gha gha-runner /bin/bash
```

Inside docker container
```shell
cd actions-runner
```

Follow the instructions given by Github:
```shell
./config.sh ...
```

Note: actions that uses docker in dockerized self-hosted runner will not work.