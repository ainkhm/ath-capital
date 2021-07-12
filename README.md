# ath-capital



## Requirements

- node `^14.15.0`
- npm `^6.0.0`


## Getting Started

1. Install app dependencies: `yarn`

2. Start Development server: `yarn start`

## Application Structure


```
├── .github                      # All Github configuration
│   ├── workflows                # Github Actions CI Workflows
│   │  ├── deploy.yml            # Deploy workflow (deploys when pushing to specific branches)
│   │  └── verify.yml            # Paths for application routes
│   └── PULL_REQUEST_TEMPLATE.md # Main HTML page container for app
├── bin                          # Scripts used by npm scripts and CI config
├── config                       # Configuration files (loaded by node-config)
├── public                       # All build-related configuration
│   └── index.html               # Main HTML page container for app
├── src                          # Application source code
│   ├── components               # Global Reusable Presentational Components
│   ├── constants                # Project constants such as firebase paths and form names
│   │  ├── firebasePaths.js      # Paths within Firebase (i.e. Collections + Sub-Collections)
│   │  └── paths.js              # Paths for application routes
│   ├── containers               # Global Reusable Container Components
│   ├── layouts                  # Components that dictate major page structure
│   │   └── CoreLayout           # Global application layout in which routes are rendered
│   ├── routes                   # Main route definitions and async split points
│   │   ├── index.js             # Bootstrap main application routes
│   │   └── Home                 # Fractal route
│   │       ├── index.js         # Route definitions and async split points
│   │       ├── components       # Presentational React Components
│   │       └── routes/**        # Fractal sub-routes (** optional)
│   ├── store                    # Redux-specific pieces
│   │   ├── createStore.js       # Create and instrument redux store
│   │   └── reducers.js          # Reducer registry and injection
│   └── utils                    # General Utilities (used throughout application)
│       ├── components.js        # Utilities for building/implementing React components
│       ├── form.js              # Utilities for forms (validation)
│       └── router.js            # Utilities for routing such as those that redirect back to home if not logged in
├── .env                         # Local Environment settings (automatically loaded up by npm scripts)
├── .eslintignore                # ESLint ignore file
├── .eslintrc.js                 # ESLint configuration
├── .firebaserc                  # Firebase Project configuration settings (including ci settings)
├── database.rules.json          # Rules for Firebase Real Time Database
├── firebase.json                # Firebase Service settings (Hosting, Functions, etc)
├── firestore.indexes.json       # Indexes for Cloud Firestore
├── firestore.rules              # Rules for Cloud Firestore
└── storage.rules                # Rules for Cloud Storage For Firebase
```