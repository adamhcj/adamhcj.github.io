console.log("oneskill.js load!");
const backendDomain = "https://ljps.herokuapp.com";

// get skill_id from get parameter
const urlParams = new URLSearchParams(window.location.search);
const skill_id = urlParams.get("skill_id");

const app1 = Vue.createApp({
  data() {
    return {
      // name:value pairs here
      // cannot use variables in another variable as you are declaring here
      skillName: "",
      skillDesc: "",
      disabled: false,
      message: "",
      skills: "", // Placeholder for now it is to hold all the skills coming from the back end
      skill: "", //this will contain the skill object
      courseSkills: [], //this will contain the list of courses mapped to the current skill (aka courses that can help you obtain this skill)
      courses:[], //this will contain all the courses 
      selectionInput: "" //this will contain the user selecton input from the course drop down list 
    };
  },
    
  created() {
    console.log("created called");
    url = `${backendDomain}/skill/${skill_id}`;
    axios
      .get(url)
      .then((response) => {
        // process response.data object
        console.log(response.data.code);
        console.log(response.data.data);

        if (response.data.code == 200) {
          this.skill = response.data.data;
          console.log(this.skill);



        }
        //When all skills are softdeleted
        else {
          this.message = "<p>skill not found!</p>";
        }
      })
      .catch((error) => {
        // process error object
        console.log(error.response.status);
        //When skills database is empty
        if (error.response.status == 404) {
          this.message = "<p> There is currently no skills created </p>";
        }
      });
  },
});
// (2) Link (mount) Vue instance to DOM
const vm = app1.mount("#app");
