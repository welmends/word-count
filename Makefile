.PHONY: run
run:
	docker-compose up -d --build

up:
	docker-compose up

build:
	docker-compose build --no-cache

bash:
	docker exec -it $(shell docker ps -aq --filter ancestor=word-count-next) bash

docker-prune:
	-@docker stop $(shell docker ps -aq)
	-@docker rm $(shell docker ps -aq)
	-@docker rmi $(shell docker images -q)
	-@docker volume rm $(shell docker volume ls -q)
	-@docker network prune -f
	-@docker system prune -a --volumes -f