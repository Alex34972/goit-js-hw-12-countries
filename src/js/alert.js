import { error } from "@pnotify/core";
  function prompt(){
    error({
    text: "Too many matches found. Please enter a more specific query!",
  });}

  export default  prompt ;