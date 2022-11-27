# OnlyScope
## Getting Started

The script works for hardhat test coverage. In the hardhat test coverage settings we have ability to skip given contract names from the coverage. Given names will not included to the coverage. However, there is no function that does the inverse of this function.  This script gets all the contract paths in the contracts folder. Excludes all contracts from coverage tests, except for the contract names given in the `scope.txt` file.  Writes all other paths to the `.solcover.js` 

## Usage

### Pre Requisites

Before using the script, paste the contract names to include coverage into the `scope.txt` file. As long as the contract names end with .sol, the syntax doesn't matter. You can even paste it as a path if you want. The script will find the contract name from the file ending with "sol".

Then, proceed with installing dependencies:

```sh
$ yarn install
```

### Run

Start the script:

```sh
$ node main.js
```

### Coverage

Run the coverage with Hardhat:

```sh
$ yarn hardhat coverage
```
