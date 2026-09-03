# Greenfield School ERP Makefile
.PHONY: all install build dev start test clean

all: install build

install:
	npm install
	cd backend && npm install
	cd frontend && npm install

build:
	cd backend && npm run build
	cd frontend && npm run build

dev:
	npx concurrently "cd backend && npm run start:dev" "cd frontend && npm run dev"

start:
	npx concurrently "cd backend && node dist/main.js" "cd frontend && npm run start"

test:
	cd backend && npm test

clean:
	rm -rf backend/dist frontend/.next
