# AppStack: Fully-featured Dashboard Template based on React & Bootstrap

## Documentation

### Introduction

Hello, hope you find this template useful. AppStack React has been crafted on top of Bootstrap 5 and React. It's documentation does not replace the official Bootstrap 5 documentation but rather supplements it by providing a comprehensive view of all extended styles and new components that this template provides on top of Bootstrap 5. It covers various aspects like incoming about the template organization, necessary changes in the source code, and how to compile and extend it the way you want.

## Table of Contents

- Getting started
- Environment Variables
- Routing
- Auth0 Authentication
- Firebase Authentication
- JWT Authentication
- Guards
- Deployment
- API Calls
- Redux
- Internationalization
- ESLint & Prettier
- Migrating to Next.js

---

## Getting Started

### Installation

This repo is using Vite so please install Node.js before using Appstack React.

### Clone the Repository

As a first step, you need to clone the repository to your local machine. You can do this with the following command:

```bash
git clone https://github.com/flurryunicorn/AppStack-React
```

After Node.js is installed, run `npm install` to get all the dependencies of Appstack React. All of them will be downloaded to the node_modules directory.

```bash
npm install
```

Once ready, you can start modifying source files and see changes at http://localhost:3000. AppStack uses webpack and webpack-serve to automatically detect file changes and start a local webserver.

```bash
npm start
```

### Build tools

Starting a local webserver at http://localhost:3000 and autodetect file changes:

```bash
npm start
```

To compile, optimize, minify and uglify all source files into the `build/` directory:

```bash
npm run build
```

### Contents

Once you have cloned the project, you will find directories and files as listed below. The package includes both the compiled and minified 'distribution' files, as well as the source files.

```markdown
theme/
  ├── .eslintrc
  ├── .gitignore
  ├── .prettierrc
  ├── package.json
  ├── package-lock.json
  ├── README.md
  ├── build/
  ├── public/
  │   ├── favicon.ico
  │   └── index.html
  └── src/
      ├── assets/
      │   ├── img/
      │   └── scss/
      ├── components/
      ├── contexts/
      ├── helpers/
      ├── hooks/
      ├── layouts/
      ├── pages/
      ├── App.js
      ├── constants.js
      ├── routes.js
      └── index.js
```


## Environment Variables

### Introduction

Your project can consume variables declared in your environment as if they were declared locally in your JS files. By default, you will have `NODE_ENV` defined for you, and any other environment variables starting with `VITE_`.

### Adding Environment Variables

To define permanent environment variables, create a file called `.env` in the root of your project:

```bash
VITE_NOT_SECRET_CODE=abcdef
```

**Note:** You need to restart the development server after changing `.env` files.

### Accessing Environment Variables

Environment variables will be defined for you on `process.env`. For example, having an environment variable named `VITE_NOT_SECRET_CODE` will be exposed in your JS as `process.env.VITE_NOT_SECRET_CODE`.

```javascript
if (process.env.NODE_ENV !== 'production') {
  // do something
}
```

```jsx
<title>{process.env.VITE_WEBSITE_NAME}</title>
```

**Note:** You need to restart the development server after changing `.env` files.

### Learn More

To learn more about environment variables, click [here](<https://vitejs.dev/guide/env-and-mode.html>).


## Routing

### Introduction
The package includes an implementation of React Router DOM, using the programmatic routing model.

### How to Add Routes

To add a new route, open `/src/routes.js` and add your new route to the `routes` variable. The example below will create a route `http://localhost:3000/pages/new` that renders the `<NewPage />` component:

```javascript
import DashboardLayout from "./layouts/Dashboard";
import NewPage from "./pages/NewPage";

const routes = [
  {
    path: "pages",
    element: <DashboardLayout />,
    children: [
      {
        path: "new",
        element: <NewPage />,
      },
    ],
  },
];

export default routes;
```

### How to Add a Link

Follow these steps to add a link to a component:

```jsx
import { Link } from "react-router-dom";

function ExampleComponent() {
  return (
    <Link to="pages/new">
      New page
    </Link>
  );
}

export default ExampleComponent;
```

### How to Navigate Programmatically

Below is the example showing how you can navigate programmatically using the `useNavigate` hook:

```jsx
import { useNavigate } from "react-router-dom";

function ExampleComponent() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/pages/new");
  };

  return (
    <form onSubmit={handleSubmit}>
      ...
    </form>
  );
}

export default ExampleComponent;
```

## Auth0

### Introduction

Auth0 is an easy to implement, adaptable authentication and authorization platform. It allows you to rapidly integrate authentication and authorization for web, mobile, and legacy applications so you can focus on your core business.

### Quick Start

Follow these steps if you want to enable Auth0 authentication in your application.

1. **Enable AuthProvider**

    Enable Auth0's `AuthProvider` in `/src/App.js`.

    ```jsx
    import { AuthProvider } from "./contexts/Auth0Context";
            
    function App() {
      return (
        <AuthProvider>
          {content}
        </AuthProvider>
      )
    }
    ```
2. **Enable useAuth hook**

    Enable Auth0's `useAuth` hook in `/src/hooks/useAuth.js`.

    ```jsx
    import { AuthContext } from "../contexts/Auth0Context";
            
    const useAuth = () => {
      return useContext(AuthContext);
    };
    ```

### How to Use

Learn how to use Auth0 authentication. There are multiple examples included, including sign in, sign up and sign out.

To retrieve user info:

```jsx
import useAuth from '../hooks/useAuth';

const App = () => {
  const { displayName } = useAuth();

  return (
    <span>
      {user.displayName}
    </span>
  );
};
```

To execute actions (like sign in):

```jsx
import useAuth from '../hooks/useAuth';

const App = () => {
  const { signIn } = useAuth();

  return (
    <button onClick={() => signIn()}>
      Sign in
    </button>
  );
};
```

## Firebase

### Introduction

Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

### Quick Start

Here are steps to enable Firebase authentication in your application.

1. **Enable AuthProvider**

    Enable Firebase's `AuthProvider` in `/src/App.js`.

    ```jsx
    import { AuthProvider } from "./contexts/FirebaseContext";
            
    function App() {
      return (
        <AuthProvider>
          {content}
        </AuthProvider>
      )
    }
    ```

2. **Enable useAuth hook**

    Enable Firebase's `useAuth` hook in `/src/hooks/useAuth.js`.

    ```jsx
    import { AuthContext } from "../contexts/FirebaseContext";
            
    const useAuth = () => {
      return useContext(AuthContext);
    };
    ```

### How to Use

Learn how to use Firebase authentication. Examples included below cover operations such as sign in, sign up and sign out.

To retrieve user info:

```jsx
import useAuth from '../hooks/useAuth';

const App = () => {
  const { displayName } = useAuth();

  return (
    <span>
      {user.displayName}
    </span>
  );
};
```

To execute sign in actions:

```jsx
import useAuth from '../hooks/useAuth';

const App = () => {
  const { signIn, signInWithGoogle } = useAuth();

  return (
    <React.Fragment>
      <button onClick={() => signIn()}>
        Regular Sign in
      </button>
      <button onClick={() => signInWithGoogle()}>
        Sign in with Google
      </button>
    </React.Fragment>
  );
};
```

## JSON Web Token (JWT)

### Introduction

JSON Web Token (JWT) is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.

### Quick Start

If you want to enable JWT authentication in your application, below are the steps:

1. **Enable AuthProvider**

    Enable JWT's `AuthProvider` in `/src/App.js`.

    ```jsx
    import { AuthProvider } from "./contexts/JWTContext";
            
    function App() {
      return (
        <AuthProvider>
          {content}
        </AuthProvider>
      )
    }
    ```

2. **Enable useAuth hook**

    Enable JWT's `useAuth` hook in `/src/hooks/useAuth.js`.

    ```jsx
    import { AuthContext } from "../contexts/JWTContext";
            
    const useAuth = () => {
      return useContext(AuthContext);
    };
    ```

### How to Use

Learn how to use JWT authentication. Here are examples for operations such as sign in, sign up and sign out.

To retrieve user info:

```jsx
import useAuth from '../hooks/useAuth';

const App = () => {
  const { displayName } = useAuth();

  return (
    <span>
      {user.displayName}
    </span>
  );
};
```

To execute actions (like sign in):

```jsx
import useAuth from '../hooks/useAuth';

const App = () => {
  const { signIn } = useAuth();

  return (
    <button onClick={() => signIn()}>
      Sign in
    </button>
  );
};
```

## Guards

### Introduction

Guards can be used to protect certain routes based on the role of current user. 

### Auth Guard

The `AuthGuard` component can be used to prevent unauthenticated users from accessing private routes.

```jsx
import AuthGuard from "../components/guards/AuthGuard";
        
function Component() {
  return (
    <AuthGuard>
      <PrivateExampleComponent />
    </AuthGuard>
  )
}
```

### Guest Guard

The `GuestGuard` component can be used to prevent authenticated users from accessing certain routes.

```jsx
import GuestGuard from "../components/guards/GuestGuard";
        
function Component() {
  return (
    <GuestGuard>
      <PublicExampleComponent />
    </GuestGuard>
  )
}
```

## Deployment

### Introduction

The command `npm run build` creates a `build` directory with a production build of your app. You should set up your preferred HTTP server, so that a visitor to your site is served `index.html`, and requests to static paths such as `/static/js/main.<hash>.js` are served with the contents of the `/static/js/main.<hash>.js` file.

### Static Server

For Node environments, the easiest way to handle this is installing `serve`:

```bash
npm install -g serve
serve -s build
```

The last command will serve your static site on port `5000`. You can adjust the port using the `-l` or `--listen` flags:

```bash
serve -s build -l 4000
```

To get a full list of available options:

```bash
serve -h
```

### Other Solutions

You don’t necessarily need a static server to run a Create React App project in production. It works well when integrated into an existing server-side app.

### Express

Express is a fast, unopinionated, minimalist web framework for Node.js. See the programmatic example:

```javascript
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);
```

### Netlify

Netlify deploys modern static websites. With Netlify, you gain access to a CDN, continuous deployment, one-click HTTPS, and more services.

To manually deploy to Netlify’s CDN:

```bash
npm install netlify-cli -g
netlify deploy
```

Then choose `build` as the path to deploy.

To set up continuous delivery:
- Start a new Netlify project
- Pick your Git hosting service and select your repository
- Click "Build your site"

## API Calls

### Introduction

A standard use case for code actions is to engage with external services via API calls. AppStack uses the Axios library for making XMLHttpRequests from the browser. Axios Mock Adapter is also integrated which allows to mock these requests. 

### Axios 

#### Make a GET request

```javascript
axios.get('/api/user?id=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
```

#### Perform a POST request

```javascript
axios.post('/api/user', {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
});
```

### Axios Mock Adapter

Axios adapter allows to easily mock requests.

#### Mock a GET request

```javascript
mock.onGet("/api/user").reply((config) => {
  return [
    200,
    {
      users: [{ id: 12345, firstName: "Fred", lastName: "Flintstone" }],
    },
  ];
});
```

#### Mock a POST request

```javascript
mock.onPost("/api/user").reply((config) => {
  const { firstName, lastName } = JSON.parse(config.data);

  if (firstName && lastName) {
    return [200, {
      id: "12345",
      firstName: "Fred",
      lastName: "Flintstone",
    }];
  }

  return [400, { message: "Looks like you didn't provide the required data." }];
});
```

## Redux

### Introduction

Redux aids in writing applications that behave consistently, run in different environments (client, server, native), and are easy to test. AppStack leverages Redux Toolkit to minimize the boilerplate code and complexity.

### Usage

AppStack has specific directories/files to store Redux logic:

- `src/redux/store.js`: Where reducers are combined and the store is initialized.
- `src/redux/slices/`: Where reducers are implemented.

#### 1. Creating a new slice

To create a new slice, simply add a file to the `src/redux/slices/` directory:

```javascript
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: []
};

const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, payload) {
      state.products = [
        {
          id: '1',
          slug: 'my-first-product',
          title: 'My first product'
        }
      ];
    }
  }
});

export const { reducer } = slice;

export default slice;

export function getProducts() {
  return async dispatch => {
    const response = await axios.get('/api/products');
    dispatch(slice.actions.setProducts(response.data.products));
  };
}
``` 

#### 2. Add slice to root reducer

Open the file `src/redux/store.js` and add your new slice:

```javascript
import productsReducer from "./slices/products";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
```
#### 3. Using the slice

```jsx
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/slices/products';

function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <div>{product.title}</div>
        </div>
      ))}
    </div>
  );
}
```

### Redux DevTools

[Redux DevTools](https://github.com/reduxjs/redux-devtools) offers developer tools to power-up Redux development workflow or any other architecture which handles the state. It can be used as a browser extension (for Chrome, Firefox and Edge), or as a standalone app or as a React component integrated in the client app.


## Internationalization

### Introduction

react-i18next is a powerful internationalization framework for React based on i18next. It provides several components to ensure needed translations get loaded and your content gets rendered when the language changes.

Translations can be configured in the `/src/i18n.js` file:

```javascript
const resources = {
  en: {
    translation: {
      "Welcome back": "Welcome back",
    },
  },
  fr: {
    translation: {
      "Welcome back": "Bon retour",
    },
  },
  de: {
    translation: {
      "Welcome back": "Willkommen zurück",
    },
  },
};
```

### Usage with hooks

You can utilize hooks in functional components. Here's an example:

```jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  return <h1>{t('Welcome back')}</h1>
}
```

### Usage with HOC

Alternatively, you can also use Higher Order Components (HOC) to extend existing components by passing additional props:

```jsx
import React from 'react';
import { withTranslation } from 'react-i18next';

function MyComponent({ t }) {
  return <h1>{t('Welcome back')}</h1>
}

export default withTranslation()(MyComponent);
```

### Learn More

To learn more about react-i18next, click [here](<https://react.i18next.com/>)

## ESLint & Prettier
### Introduction
To format code automatically, we've included a basic ESLint & Prettier configuration. ESLint statically analyzes your code to quickly find problems. Prettier is used to automatically format the code you write to ensure a consistent code style withing your projects.

Included ESLint configuration:
```json
{
  "extends": ["react-app", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```
### Usage
Format all source files in the `/src` folder:

```bash
npm run lint
```

### VSCode integration
To use ESLint & Prettier in combination with VSCode, we suggest installing the VSCode ESLint extension. After installing the extension, the code will automatically be formatted. The following configuration is included, which can be enabled/disabled or adjusted to your needs.

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnType": true,
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Migrating to Next.js
### Introduction
AppStack React is built using Vite. Follow the steps below to migrate to Next.js. Migrating to Next.js allows you to use SSR, API Routes and more.

### Official Guide
The official guide on how to migrate from Create React App to Next.js can be found [here](<https://nextjs.org/docs/migrating/from-create-react-app>). While we're using Vite instead of Create React App, the process and steps are very similar.

### Update dependencies
The first step towards migrating to Next.js is to update package.json and dependencies.

Remove the `vite`, `@vitejs/plugin-react` and `react-router-dom` dependencies.

```bash
npm uninstall vite @vitejs/plugin-react vite-plugin-ejs vite-plugin-node-polyfills vite-plugin-svgr react-router-dom
```

Install the `next.js` dependency.
```bash
npm install next --save
```
Open the `package.json` file and replace the scripts with:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}
```

### Update entry file
Vite uses the root directory for the entry HTML file (`/index.html`), whereas Next.js uses a custom file (`/src/pages/_document.js`).

All code in the `<head>` section of the `/index.html` file should be moved to the `/src/pages/_document.js` file. Learn more [here](<https://nextjs.org/docs/advanced-features/custom-document>).

### Update shared layout
Vite uses the `/src/index.js` file as an entry point, whereas Next.js requires a custom `/src/_app.js` file. You may want to move logic to the new _app.js file. Learn more [here](<https://nextjs.org/docs/advanced-features/custom-app>).

### Update routes
With Vite, you're likely using React Router. Instead of using a third-party library, Next.js includes its own file-system based routing.

- Convert all Route components to new files in the `src/pages` directory. It is recommended to rename the files using dash-case.
- Remove useRoutes from the `/src/App.js file`.
- Replace the Link component from `react-router-dom` with the Link component from `next/link`.
For more information, see [Migrating from React Router](<https://nextjs.org/docs/migrating/from-react-router>).


