
// Variable for the BankBranch single instance
let bankBranchInstance = null

// Class for managing bank information
class BankBranch  {
    constructor(branchInfo) {
        if(bankBranchInstance === null) {
            this.branchInfo = branchInfo
            bankBranchInstance = this 
    } else {
        return bankBranchInstance
    }
  }
  getBranchInfo() {
    return this.branchInfo
  }
}

// First branch instance
const branchA = new BankBranch("First Bank Branch")
console.log(branchA.getBranchInfo()) // Output: First Bank Branch

// Second branch instance
const branchB = new BankBranch("Second Bank Branch")
console.log(branchB.getBranchInfo()) // Output: First Bank Branch

console.log(branchA === branchB)  // Output: true 




// NOTES:
// This example demonstrates the Singleton pattern by creating a single instance of the `BankBranch` class.
// Even if we attempt to create another instance of the branch, we receive the original instance,
// ensuring that there is only one set of branch information throughout the application.

// - We define a `BankBranch` class that represents bank branch information.
// - We use the Singleton pattern to ensure that there is only one instance of the `BankBranch` class.
// - The `bankBranchInstance` variable is used to hold the single instance of the class.
// - When a new `BankBranch` instance is created, it checks if `bankBranchInstance` already exists.
//   If it does, it returns the existing instance; otherwise, it creates a new one.
// - The `getBranchInfo` method allows us to retrieve the branch information from the singleton instance.
// - We demonstrate the Singleton pattern by creating two instances (`branchA` and `branchB`) and show that they both point to the same instance,
//   ensuring that there is only one set of branch information throughout the application.
