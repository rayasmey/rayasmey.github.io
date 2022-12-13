"use strict";

describe("Account", function () {

    describe("check the account info after create", function (){
        const account = new Account(5600000010);

        it("check the account number", function () {
            assert.equal("5600000010", account.getNumber());
        });
    
        it("check the account balance", function () {
            assert.equal("0", account.getBalance());
        });
    });

    describe("check the account info after deposit 5000.50", function (){
        const account = new Account(5600000010);
        account.deposit(5000.50);

        it("check the account balance", function () {
            assert.equal("5000.50", account.getBalance());
        });
    });

    describe("check the account info after withdraw 2500.50", function (){
        const account = new Account(5600000010);
        account.deposit(5000.50);
        account.withdraw(2500.50);

        it("check the account balance", function () {
            assert.equal("2500", account.getBalance());
        });

        it("test toString method", function () {
            assert.equal("Account 5600000010: balance 2500", account.toString());
        });
    });

});

describe("SavingsAccount", function () {

    describe("check the account info after interest is deposited", function (){
        const account = new SavingsAccount(5600000020, 10);
        
        account.deposit(1000);
        account.addInterest();

        it("check the account balance", function () {
            assert.equal("1100", account.getBalance());
        });

        it("test toString method", function () {
            assert.equal("Account 5600000020: balance 1100: interest 10%", account.toString());
        });
    });

});

describe("CheckingAccount", function () {

    describe("check the account info for negative balance", function (){
        const account = new CheckingAccount(5600000030, 200);
        
        account.deposit(2500);
        account.withdraw(2600);

        it("check the account balance", function () {
            assert.equal("-100", account.getBalance());
        });

        it("test toString method", function () {
            assert.equal("Account 5600000030: balance -100: overdraft limit 200", account.toString());
        });
    });

});

describe("Bank", function () {

    describe("Add all types of bank and check the account report", function (){
        const bank = new Bank();

        const acnr = bank.addAccount();
        const savingAcnr = bank.addSavingsAccount(10);
        const checkingAcnr = bank.addCheckingAccount(2000);

        it("check account info for all accounts", function () {
            assert.equal("Account 2001: balance 5000\nAccount 2002: balance 7000: interest 10%\nAccount 2003: balance -150: overdraft limit 2000", bank.accountReport());
        });

    });

    describe("Add all types of bank and remove the saving account", function (){
        const bank = new Bank();

        const acnr = bank.addAccount();
        const savingAcnr = bank.addSavingsAccount(10);
        const checkingAcnr = bank.addCheckingAccount(2000);

        bank.closeAccount(savingAcnr);

        it("check account info for all accounts", function () {
            assert.equal("Account 2004: balance 5000\nAccount 2006: balance -150: overdraft limit 2000", bank.accountReport());
        });

    });

    describe("Add all types of bank and check end of month report", function (){
        const bank = new Bank();

        const acnr = bank.addAccount();
        const savingAcnr = bank.addSavingsAccount(10);
        const checkingAcnr = bank.addCheckingAccount(2000);

        it("check end of month report", function () {
            assert.equal("Interest added SavingsAccount 2008: balance: 7700 interest: 700\nWarning, low balance CheckingAccount 2009: balance: -150 overdraft limit: 2000", bank.endOfMonth());
        });

    });

});