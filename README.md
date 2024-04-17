# ContactsOrBruchim

This Angular application provides a contact management system where users can view, create, edit, and delete contacts.
It features an index page that lists all contacts and a detail page for viewing and editing individual contact details.
The application uses a JSON server as its backend.

## Features

- **Index Page:**
    - Displays a list of contacts with important fields and an image.
    - Clicking on a contact routes to the detailed page of the contact.
    - Top of the page includes actions for adding a new contact and generating 10 random contacts using the Random User Generator API.

- **Detail Page:**
    - Displays detailed information of a contact.
    - Allows editing and deleting a contact.
    - Form fields include: name, full address, email, phone, cell, registration date, age, and an image.
    - Validates email and phone fields.

- **Adding and Editing Contacts:**
- **Adding a New Contact:** Users can add a new contact by clicking the 'New Contact' button at the top of the index page.
- This opens a clean form where users can enter details such as name, email, phone, and address.
- Upon saving, the new contact is added to the list and the user is redirected back to the index page.
- **Editing an Existing Contact:** To edit a contact, users can navigate to the detail page by clicking on a contact in the index list. 
- Once on the detail page, clicking the 'Edit' button will switch the view to edit mode, enabling fields for modification. 
- After making changes, users can save to update the contact's details.

## Installation

To set up the project locally, follow these steps:

- **Clone the repository:** Run `git clone <repository-url>`

- **Navigate to the project directory:** Run `cd contacts-or-bruchim`

- **Install dependencies:** Run `npm install`

## Backend Setup

The application uses JSON Server for the backend. To initiate the server: Run `npx json-server db.json`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
