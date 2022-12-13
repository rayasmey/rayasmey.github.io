"use strict";

class SavingsAccount extends Account {
    constructor(number, interest){
        super(number);
        this._interest = interest;
    }

    getInterest(){
        return this._interest;
    }

    setInterest(interest){
        this._interest = interest;
    }

    addInterest(){
        const amount = this._balance * this._interest / 100;
        super.deposit(amount);
    }

    toString(){
        return "Account " + this._number + ": balance " + this._balance + ": interest " + this._interest + "%";
    }

    endOfMonth() {
        const amount = this._balance * this._interest / 100;
        this.addInterest();
        return `Interest added ${this.constructor.name} ${this._number}: balance: ${this._balance} interest: ${amount}`;
    }
}
