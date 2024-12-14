# Unhandled Exception in Express.js Route Handler

This repository demonstrates a common error in Express.js applications: unhandled exceptions in route handlers. The application attempts to fetch data from a database. If the database connection fails, an unhandled exception causes the application to crash.

## Bug

The `bug.js` file contains the buggy code. The `getSomethingFromDatabase` function randomly throws an error, simulating a database connection failure.  Because this error is not handled, the Express application crashes.

## Solution

The `bugSolution.js` file provides a solution that uses a try...catch block to gracefully handle the potential error, preventing the application from crashing.  Appropriate error handling is crucial for building robust and reliable applications.