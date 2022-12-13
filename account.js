"use strict";

/**
 * A Bank Account class
 * 
 * Provides the basic functionality that every account should have
 */
class Account {
 
    constructor(number) {
        this._number = number; // the account number
        this._balance = 0.0;
    }


    getNumber() {
        return this._number;
    }

 
    getBalance() {
        return this._balance;
    }

   
    deposit(amount) {
        if (amount <= 0) {
            throw new RangeError("Deposit amount has to be greater than zero");
        }
        this._balance += amount;
    }

 
    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }

  
    toString() {
        return "Account " + this._number + ": balance " + this._balance;
    }

    endOfMonth() {
        return ""; // does nothing
    }
}