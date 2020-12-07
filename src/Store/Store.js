/*** src/Store.js ***/

import { observable, action, computed } from "mobx";
import { v4 } from "uuid";

export class List {
  @observable value
  @observable done

  constructor(value) {
    this.value = []
  }
}

export class ListStore {
  @observable lists = []
  @observable filter = ""
  @action addList = (value) => {
    value.data.forEach(v => {
      this.lists.push(...lists, v)
    });
  }

  @action deleteList = (list) => {
    this.lists = this.lists.filter(t => t !== list)
  }
  @computed get filteredLists() {
    const matchCase = new RegExp(this.filter, "i")
    return this.lists.filter(list => !this.filter || matchCase.test(list.value))
  }
}