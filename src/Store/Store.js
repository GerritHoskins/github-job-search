import React from 'react';
import { observable, action, computed, runInAction, makeAutoObservable } from "mobx";
import {jobAPI, jobByIdAPI} from './../Services/Jobs';
class Store {
  @observable lists = [];
  @observable currentData = [];
  @observable job = [];
  @observable currentPage = 1;
  @observable offset = 0;
  @observable pageLimit = 5;
  @observable status = true;
  @observable filter = "";

  @observable description = "";  
  @observable location = "";
  @observable type = true;

  constructor() {
    makeAutoObservable(this)
  }

  @action
  setList(list) {
      this.lists = list;
  }

  @action
  setJob(job) {
      this.job = job;
  }

  @action
  setFilter(filter) {
      this.filter = filter;
  }

  @action
  setDescription(description) {
      this.description = description;
  }

  @action
  setLocation(location) {
      this.location = location;
  }

  @action
  setType(type) {
      this.type = type;
  }

  @action
  setCurrentPage(currentPage) {
      this.currentPage = currentPage;
  }

  @action
  setCurrentData(currentData) {
      this.currentData = currentData;
  }

  @action
  setPageLimit(pageLimit) {
      this.pageLimit = pageLimit;
  }

  @action setLoadStatus = (status) => {
    this.status = status;
  }

  @action getStatus() {
    return this.status;
  }

  @action getDescription() {
    return this.description || "react";
  }

  @action getType() {
    return this.type;
  }

  @action getLocation() {
    return this.location;
  }

  @action getOffset() {
    return this.offset ;
  }
  
  @action getCurrentData() {
    return this.currentData ;
  }

  @action async fetchList() {
    try {         
      const response = await jobAPI();  
      this.setLoadStatus(true);
      runInAction(() => {        
        this.addToList(response);                     
        this.splitCurrentData();   
        this.setLoadStatus(false);                  
      });
    }catch(error) {
      console.log(error);
    }
  };

  @action async fetchJobById() {
    try {         
      const response = await jobByIdAPI();  
      this.setLoadStatus(true);
      runInAction(() => {        
        this.job =response;     
        this.setLoadStatus(false);                  
      });
    }catch(error) {
      console.log(error);
    }
  };

  @action splitCurrentData = () => {
    const offset = (this.currentPage - 1) * this.pageLimit;     
    this.setCurrentData(this.lists.slice(offset, offset + this.pageLimit));  
  }
  
  @action addToList = (response) => {
    this.lists = response;
  }

  @computed dataSize = () => {
      return this.currentData.length || this.lists.length;
  }

  @action deleteList = (list) => {
    this.lists = this.lists.filter(t => t !== list)
  }

  @computed get filteredLists() {
   //const matchCase = new RegExp(this.filter, "i")
    this.setLoadStatus(true);
    const filteredJob = this.lists.filter(list => list.id === this.filter);
    this.setJob(filteredJob);
    this.setLoadStatus(false);
  }
}

/* Store helpers */
const StoreContext = React.createContext();

export const StoreProvider = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

/* Hook to use store in any functional component */
export const useStore = () => React.useContext(StoreContext);

/* HOC to inject store to any functional or class component */
export const withStore = (Component) => (props) => {
  return <Component {...props} store={useStore()} />;
};

//export default ListStore = new ListStore();
const stores = new Store();
export default stores;