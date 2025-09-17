name: Build and Test GitHub App

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install

      - name: Build the app
        run: npm run build

      - name: Run tests
        run: npm test

      # Optionally, package or publish the app if you have custom steps
      # - name: Package GitHub App
      #   run: npm run package
