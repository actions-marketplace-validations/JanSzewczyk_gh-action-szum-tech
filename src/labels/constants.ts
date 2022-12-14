import { Configuration } from "./types";

export const supportedConfigurationFilesExtensions: string[] = ["yml", "yaml"];

export const defaultConfiguration: Configuration = {
  labels: [
    {
      name: "small",
      color: "4CAF50",
      description: "Small size of pull request, up to 32 lines",
      validation: {
        ignoreFiles: ["yarn.lock", "package-lock.json"],
        changes: {
          less: 32
        }
      }
    },
    {
      name: "medium",
      color: "FFEB3B",
      description: "Medium size of pull request, from 32 to 128 lines",
      validation: {
        ignoreFiles: ["yarn.lock", "package-lock.json"],
        changes: {
          greaterOrEqual: 32,
          less: 128
        }
      }
    },
    {
      name: "large",
      color: "FFC107",
      description: "Large size of pull request, from 128 to 512 lines",
      validation: {
        ignoreFiles: ["yarn.lock", "package-lock.json"],
        changes: {
          greaterOrEqual: 128,
          less: 512
        }
      }
    },
    {
      name: "x_large",
      color: "FF5722",
      description: "X_Large size of pull request, from 512 to 1024 lines",
      validation: {
        ignoreFiles: ["yarn.lock", "package-lock.json"],
        changes: {
          greaterOrEqual: 512,
          less: 1024
        }
      }
    },
    {
      name: "megalodon",
      color: "F44336",
      description: "Pull request in MEGALODON size, over 1024 lines",
      validation: {
        ignoreFiles: ["yarn.lock", "package-lock.json"],
        changes: {
          greaterOrEqual: 1024
        }
      }
    },
    {
      name: "tests",
      color: "16c214",
      description: "Pull requests that update or add tests",
      validation: {
        any: ["**/*.{test,spec}.{js,ts,jsx,tsx}"]
      }
    },
    {
      name: "github_actions",
      color: "000000",
      description: "Pull requests that update GitHub Actions code",
      validation: {
        any: [".github/{*,**/*}"]
      }
    },
    {
      name: "dependencies",
      color: "0366d6",
      description: "Pull requests that update a dependency file",
      validation: {
        any: ["package.json", "yarn.lock", "package-lock.json"]
      }
    },
    {
      name: "documentation",
      color: "0075ca",
      description: "Improvements or additions to documentation",
      validation: {
        any: ["README.md", "LICENCE", "{*,**/*}.{md,mdx}"]
      }
    },
    {
      name: "javascript",
      color: "f0d91c",
      description: "Pull requests that update a javascript code",
      validation: {
        any: ["{*,**/*}.{js,jsx}"]
      }
    },
    {
      name: "typescript",
      color: "3178c6",
      description: "Pull requests that update a typescript code",
      validation: {
        any: ["{*,**/*}.{ts,tsx}"]
      }
    }
  ]
};
