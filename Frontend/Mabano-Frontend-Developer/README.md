# User Management System - Frontend  
**Group Project Activity: Full-Stack Application Development - FRONTEND (Angular.js)**

## Introduction  
This is a fully functional Angular boilerplate application featuring:  
- Email sign-up and verification  
- JWT authentication with refresh tokens  
- Role-based authorization  
- Profile management  
- Admin dashboard  
- Fake backend for development without a live backend  

## Installation  
Follow these steps to get the project running locally:

1. Clone the repository:  
   ```bash  
   git clone https://github.com/MarlouTadlip1/user-management-system-frontend  
   ```  
2. Install dependencies:  
   ```bash  
   npm install  
   ```  
3. Start the backend server:  
   ```bash  
   npm start  
   ```  
4. Start the Angular application:  
   ```bash  
   ng serve  
   ```

## Usage  

### User Features  
- Register a new account at `/account/register`  
- Verify your email via the link sent to your inbox  
- Log in at `/account/login`  
- View and update your profile at `/profile/update`  

### Admin Features  
- Log in with an admin account at `/account/login`  
- Access the admin dashboard at `/admin/accounts/list`  
- Manage user accounts (CRUD) at `/admin/accounts/add-edit`  

## Testing  

- **Functional Testing:** Validated core scenarios such as registration, login, role-based access, and password reset  
- **Security Testing:** Verified JWT handling, protected routes, and input validation  
- **Code Review:** Ensured code is well-structured, documented, and follows best practices   

## Contributing  

### Frontend Development  

#### Developer 3: Email Sign-Up, Verification, and Authentication  
- Clone the repository: `user-management-system-frontend`  
- Create a feature branch:  
  ```bash  
  git checkout -b Ravanes-frontend-signup-auth  
  git branch  
  ```  
- Implement the feature: Add sign-up, verification, and authentication functionality  
- Commit changes:  
  ```bash  
  git add .  
  git commit -m "Implement email sign-up, verification, and authentication"  
  ```  
- Push to remote:  
  ```bash  
  git push origin Ravanes-frontend-signup-auth  
  ```  
- Create a Pull Request and request a review for merging into `main`  

#### Developer 4: Profile Management, Admin Dashboard, and Fake Backend  
- Clone the repository: `user-management-system-frontend`  
- Create a feature branch:  
  ```bash  
  git checkout -b Gallego-frontend-profile-admin-fake-backend  
  git branch  
  ```  
- Implement features:  
  - Develop profile management and admin dashboard components  
  - Add a fake backend to simulate API responses  
- Commit changes:  
  ```bash  
  git add .  
  git commit -m "Implement profile management, admin dashboard, and fake backend"  
  ```  
- Push to remote:  
  ```bash  
  git push origin Gallego-frontend-profile-admin-fake-backend  
  ```  
- Create a Pull Request and request a review for merging into `main`  

## License  
This project is licensed under the MIT License.  
See the [LICENSE](./LICENSE) file for details.

