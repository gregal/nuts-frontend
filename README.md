# nuts-frontend

## Projects

This repository currently holds 2 different projects:

- [Nuts UI](/nuts-ui/)
- [Photowall](/Photowall/)

## Nuts

Nuts UI is a frontend application, an experiment to learn and exercise with React, TypeScript, GitHub Workflows and other technologies, while also aiming to support a UX project from my wife (a platform/application that generates culinary recipes to the user based on their preferences and restrictions).

This app is currently minimalist, actually just featuring the beginning of what should be a welcome wizard.

## Photowall

Photowall is an example project instructed in an online React course I took recently. The application allows the user to view, add and delete images ("photos") from a photowall, which is a grid in the page.

For that, the course goes through class components, function components, state management, React concepts in general, routing with React routing, CSS and others.

During the course, I chose to do some things slightly different from the author, either because I thought mine would be a better practice, or because the course was recorded before React 18 and some things might have evolved (such as React Router).

## Deploy

This repository also features a GitHub Workflow, implemented in [.github/workflows/](.github/workflows/azure-static-web-apps-white-water-042353a0f.yml).
It automatically builds and deploys the [Nuts UI](/nuts-ui/) application, specifically, to an Azure Static Web App that I have created under a personal subscription.

That can be accessed on:
https://white-water-042353a0f.2.azurestaticapps.net/