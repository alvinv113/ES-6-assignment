class localstorage {
    constructor() {
        this.map = new Map();
    }
    // setting items in  local storage
    setitem(key, value) {
        if (value !== 'string') {
            this.map.set(key, JSON.stringify(value));
        }
        else {
            this.map.set(key, value);
        }

    }
    //getting item in local storage
    getitem(key) {
        if (this.map.has(key)) {
            console.log(this.map.get(key));

        }
        else {
            console.log("THE KEY IS NOT DEFINED");
        }

    }
    // removing item in local storage
    removeitem(key) {
        if (this.map.has(key)) {
            this.map.delete(key);
            console.log("THE KEY IS DELETED");
        }
        else {
            console.log("The item is not available in local-storage");
        }
    }
    // for clearing data in js
    allclear() {

        this.map.clear();

    }
    // Total length of local storage
    length() {
        console.log("TOTAL LENGTH OF LS : " + this.map.size);
    }
}


let a = new localstorage();
a.setitem('alvin', 2);
a.getitem('alvin')
a.setitem('kaif', { 'name': 2 })

a.getitem('kaif');
a.removeitem('alvin');
a.allclear();
a.length();




