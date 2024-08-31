# User Table with Filters

This is a React application that displays a list of users in a table format with dynamic filtering capabilities. The app integrates with Redux for state management and uses RTK Query to fetch user data from an external API. The application is styled using SCSS.

## Features

- **Dynamic Filtering:** Users can filter the table data based on name, username, email, and phone fields.
- **API Integration:** Fetches user data from the JSONPlaceholder API using RTK Query.
- **Responsive Design:** The table layout adapts to different screen sizes, providing horizontal scrolling on smaller devices.
- **Modular Architecture:** The app is structured with reusable components, Redux slices, and well-organized styling.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: A predictable state container for JavaScript apps.
- **RTK Query**: A powerful data-fetching and caching tool built on top of Redux Toolkit.
- **SCSS**: A CSS preprocessor that allows the use of variables, nested rules, and more.
- **TypeScript**: A typed superset of JavaScript that enhances code quality and development experience.

## Getting Started

### Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/user-table-filters.git
    cd user-table-filters
    ```

2. **Install the dependencies:**

   If you're using npm:

    ```bash
    npm install
    ```

   Or if you're using yarn:

    ```bash
    yarn install
    ```

### Running the Application

To start the development server, use the following command:

```bash
npm start
