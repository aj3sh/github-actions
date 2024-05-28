# Github Actions (Exploring)

## Running Self-Hosted Runner

### Build Runner image

```shell
docker build -t gha-runner -f Dockerfile.linux.amd64 .
```

### Run Runner container

```shell
docker run -it --name gha gha-runner /bin/bash
```
