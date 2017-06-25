//Add imports here
import {observable, computed, action, useStrict} from "mobx";

class PersonFactory {

    @observable
    _persons = [];

    constructor() {
        this.getData();
    }

    @computed
    get persons() {
        return this._persons;
    }

    @action
    getData = () => {
        //kan ikke sætte data ind i arrayet og opdatere siden
  //  setInterval(function(){
            var me = this;
            fetch("http://localhost:4567/api/persons_changing/")
                .then(function (res) {
                    return res.json();
                })
                .then(function (data) {
            //this is how we did it in a normal array
            //me._persons = data;
            me.persons.replace(data); //this how we MUST do it on a mobx array
        })
        console.log(me);
        console.log("fetching");
   //}, 3000);
    }

}


export default new PersonFactory();