# HR Application for practicing React

## Week2

### Step 1: Create the employees data array

1. Create a new array containing data for ten employees.
2. Include additional fields you may have added in previous steps (like `location` or `department`) to enrich the data.

### Example array format

```javascript
const employees = [
  {
    id: 1,
    name: "Elina Virtanen",
    role: "Frontend Development teacher",
    department: "Web Development",
    startDate: "2018-08-01",
    location: "Pasila"
  },
  // Add additional employees here...
];
```

## Step 2: Display employees list and add login functionality

1. Import the employee array into your `EmployeesList` component.
2. Map over the array to display each employee’s details in the `EmployeesList` component.
3. Ensure that the list displays correctly with no errors or warnings in the console.
4. Implement a fake “Log In” functionality:
   - By default, show a "Log In" button and a message to log in to see the list.
   - After logging in, display the list of employees.
   - Toggle the button text between "Log In" and "Log Out" based on login state.

## Step 3: Add "Team Lead" promotion functionality

1. Modify the "Team Lead" functionality in each `EmployeeCard`.
2. Display a star icon (⭐) on the employee’s card only if the employee is promoted to "Team Lead."
3. Use conditional rendering for the promotion button:
   - Display "Promote to Team Lead" if the employee is not a Team Lead.
   - Display "Demote from Team Lead" if the employee is already a Team Lead.

## Step 4: Display years worked and add reminders

1. In `EmployeeCard`, calculate and display years worked based on each employee's `startDate`.
2. Add reminders based on the years worked:
   - **Anniversary Reminder**: If `yearsWorked` is exactly 5, 10, 15, etc., display a celebration icon and a subtle message, "Schedule recognition meeting."
   - **Probation Reminder**: If `yearsWorked` is less than 0.5 (6 months), display a notification icon and a message, "Schedule probation review."
3. Make sure your data includes:
   - Employee with 5, 10, or 15 years of service for testing the recognition reminder.
   - Employee with less than 6 months of service for testing the probation review reminder.

