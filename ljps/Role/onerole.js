console.log("onerole.js load!");
// get skill_id from get parameter

const backendDomain = "https://ljps.herokuapp.com";

const urlParams = new URLSearchParams(window.location.search);
const jobrole_id = urlParams.get("jobrole_id");


const app1 = Vue.createApp({
  data() {
    return {
      // name:value pairs here
      // cannot use variables in another variable as you are declaring here
      jobrole: "",
      jobrole_name: "",
      jobrole_desc: "",
      disabled: false,
      message: "",
      jobroles: "", // Placeholder for now it is to hold all the roles coming from the back end
    };
  },
  created() {
    url = `${backendDomain}/jobrole/${jobrole_id}`;
    axios
      .get(url)
      .then((response) => {
        // process response.data object
        console.log(response.data.code);
        if (response.data.code == 200) {
          this.jobrole = response.data.data
          console.log(this.jobrole);
            
            
            
        }
        //When all jobroles are softdeleted
        else {
          this.message = "<p>There are no jobroles currently available</p>";
        }
      })
      .catch((error) => {
        // process error object
        console.log(error.response.status);
        //When jobroles database is empty
        if (error.response.status == 404) {
          this.message = "<p> There is currently no jobroles created </p>";
        }
      });
  },
});
// (2) Link (mount) Vue instance to DOM
const vm = app1.mount("#app");
