### RBAC based Applicatioon
Baisc application which handles RBAC with authentication.This Apllication will not allow Admin to visit Dashboard unless he/she is loggedin.


###Auth
   - Username: admin
   - password : 12345678

### Folder Structure
- We used index based naming convention so folder holding components are in Pascal rest are in camel case.

1. Components
   - components which are used in pages.
2. Layout
   - To segregate UI on the basis of role.
3. Pages
   - Multiple Views which will be used in a Layout. (Pages are also known as Screens) 
4. Redux
   - A central store (used slices).
5. Routes
   - Navigation of the application also enabled with protection.
6. Utils
   - Utility functions and constants.

### `npm install`

Installs all app dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.
