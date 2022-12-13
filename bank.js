class Bank{
    constructor(){
        this.accounts = [];
    }

    static nextNumber = 1234;

    addAcount(){
        let an = ++Bank.nextNumber;
        let ac = new Account(an);
        accounts.push(ac);
        return an;
    }

    addSavingsAccount(interest){
        let an = ++Bank.nextNumber;
        let sa = new SavingAccount(an, interest);
        accounts.push(sa);
        return an;
    }

    addCheckingAccount(overdraftLimit){
        let an = ++Bank.nextNumber;
        let ca = new CheckingAccount(an, overdraftLimit);
        accounts.push(ca);
        return an;
    }

    closeAccount(number){
        const index = this.accountList.findIndex(acc => acc._number === number);

        if(index > -1)
            this.accountList.splice(index, 1);
    }

    accountReport(){
        return this.accountList.reduce((accum, acc) => (accum !== "" ? accum + "\n" : "" ) + acc.toString(), '');
    }

    endOfMonth(){
        return this.accountList.reduce((accum, acc) => (accum !== "" ? accum + "\n" : "" ) + acc.endOfMonth(), '');
    }
}