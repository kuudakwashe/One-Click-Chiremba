# Copilot Instructions for One-Click-Chiremba

## Project Overview
This is a full-stack application with a `backend` (Node.js/Express) and a `frontend` (React Native, TypeScript). The app enables users to book, review, and interact with doctors, including authentication and OTP flows.

## Architecture & Key Components
- **backend/**: Node.js Express server
  - `server.js`: Main entry point, sets up Express app
  - `controllers/`: Business logic (e.g., `authController.js` for authentication)
  - `models/`: Mongoose models (`User.js`, `Otp.js`)
  - `routes/`: Route definitions (`authRoutes.js`)
- **frontend/**: React Native app
  - `App.js`, `index.ts`: Entry points
  - `screens/`: UI screens (e.g., `ReviewScreen.jsx`, `LoginScreen.jsx`)
  - `navigation/`: Navigation logic (`AppNavigator.jsx`)
  - `utils/`: Shared utilities (`auth.js`, `mailer.js`)
  - `firebaseConfig.js`: Firebase integration

## Developer Workflows
- **Backend**
  - Start server: `node server.js` (from `backend/`)
  - Models use Mongoose; update schemas in `models/`
  - Controllers handle business logic; keep routes thin
- **Frontend**
  - Start app: Use Expo (`npx expo start` from `frontend/`)
  - Screens are functional components; navigation via React Navigation
  - Use TypeScript for new code in `frontend/`

## Patterns & Conventions
- **React Native**: Use functional components and hooks (`useState`, `useNavigation`).
- **Navigation**: All navigation logic is centralized in `navigation/AppNavigator.jsx`.
- **Styling**: Use `StyleSheet.create` for styles; keep styles at the bottom of each component file.
- **Review/Rating**: See `ReviewScreen.jsx` for star rating and comment pattern.
- **Backend**: Controllers should not access DB directly; use models for DB operations.
- **Error Handling**: Return JSON error responses from backend controllers.

## Integration Points
- **Frontend/Backend**: Communicate via REST API (URLs not hardcoded; check `auth.js` for patterns).
- **Firebase**: Used for authentication/storage; config in `firebaseConfig.js`.
- **OTP**: Managed in backend (`Otp.js`, `authController.js`).

## Examples
- **Submit Review**: See `ReviewScreen.jsx` for UI/validation pattern.
- **Auth Flow**: See `authController.js` (backend) and `auth.js` (frontend utils).

## Tips for AI Agents
- Always check for existing patterns in `screens/` and `controllers/` before introducing new ones.
- Keep business logic out of routes and UI components; use controllers and utils.
- Use TypeScript for new frontend code.
- Reference `README.md` if present for additional setup steps.

---
_If any section is unclear or missing, please ask for clarification or provide feedback to improve these instructions._
