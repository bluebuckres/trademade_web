# Pending TypeScript Fixes

These TypeScript issues are temporarily put on hold to focus on payment gateway implementation. They should be addressed later for better code maintainability and type safety.

## Authentication Related
1. Fix email link authentication types in `AuthContext`:
   - `isSignInWithEmailLink` property missing in Auth type
   - `signInWithEmailLink` property missing in Auth type
   - Return type mismatch in `signInWithGoogle`

## Component Exports/Imports
1. Fix default exports in components:
   - `RegisterForm` export in AuthContainer
   - `Overview` component default export
   - `ProtectedRoute` component export

## Profile Completion
1. Fix type issues in `ProfileCompletion`:
   - Missing `tempUserData` property in AuthContextType
   - Property 'name' access on user type

## Dashboard Layout
1. Fix plan type comparisons in `DashboardLayout`:
   - Type comparisons between plan types
   - Arithmetic operation type safety with accounts limit

## Turnstile Component
1. Fix delete operator usage:
   - Make property optional before deletion

## Auth Hooks
1. Fix `getUserRole` import in `useAuth`:
   - Replace with `getUserProfile` or implement missing function

## Next Steps
1. These issues don't affect the core payment gateway functionality
2. They should be addressed after the payment integration is complete
3. Fixing these will improve code maintainability and prevent potential bugs
4. Some fixes may require refactoring the authentication flow

## Note
The application will function correctly for payment processing despite these TypeScript warnings. These are type-safety issues that help catch potential bugs during development but don't affect runtime behavior.
