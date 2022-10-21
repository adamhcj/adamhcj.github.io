console.log("skills.js load!");
const backendDomain = "https://ljps.herokuapp.com";

var course_name = "";
var this_holder = ""; //to hold "this" variable in axios, 
//basically a global variable so that the json object can be accessed outside of the axios function scope
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
      courseSkills: [], //this will contain the list of courses mapped to the current skill (aka courses that can help you obtain this skill)
      courses:[], //this will contain all the courses 
      selectionInput: "" //this will contain the user selecton input from the course drop down list 
    };
  },
  methods: {
    del(id) {
      //Confirmation prompt for deletion
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          //use axios to pass the data over
          url = `${backendDomain}/skill/` + id + "/softdelete";
          axios
            .get(url)
            .then((response) => {
              // process response.data object
              stat = response.data.code;
              if (stat) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Skill has been deleted.",
                  icon: "success",
                  allowOutsideClick: false,
                }).then((result) => {
                  if (result.isConfirmed) {
                    //refresh the page
                    location.reload();
                  }
                });
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Something went wrong!",
                });
              }
            })
            .catch((error) => {
              // process error object
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
            });
        }
      });
    },
    cancel() {
      this.skillDesc = "";
      this.skillName = "";
      this.courseSkills = [];
    },
    create() {
      this.disabled = true;

      //Axios post
      url = `${backendDomain}/skill`;
      //check if fields are not empty
      if (this.skillName.length == 0 || this.skillDesc.length == 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "All fields must be filled up!",
        });

        this.disabled = false;
      } else {
        axios
          .post(url, {
            skill_name: this.skillName,
            skill_desc: this.skillDesc,
          })
          .then((response) => {
            // process response.data
            console.log("create response:" + response.data.code);
            stat = response.data.code;
            if (stat) {
              Swal.fire({
                title: "Created!",
                text: "Skill has been created.",
                icon: "success",
                allowOutsideClick: false,
              }).then((result) => {
                if (result.isConfirmed) {
                  this.disabled = false;
                  //refresh the current page
                  location.reload();
                }
              });
            }
          })
          .catch((error) => {
            // process error object
            this.disabled = false;
            console.log(error.response.status);

            //When skill already exists
            if (error.response.status) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Skill already Exists!",
              });
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Oops Something Went Wrong!",
              });
            }
          });
      }
    },

    retrieve(id) {
      //We will try to obtain the current skill name , desc & if any course skill mapping exists
      url = `${backendDomain}/skill/` + id
      courseUrl = `${backendDomain}/course`

      //This is to get the current courseskills mapping
      axios
        .get(url)
        .then((response) => {
          // process response.data object
          console.log(response.data.data);
          this.skillName = response.data.data.skill_name;
          this.skillDesc = response.data.data.skill_desc;

          //Get all the courseskills mappping into a list
          let cs = response.data.data.courseskills;
          for (let index = 0; index < cs.length; index++) {
            this.courseSkills.push(
              cs[index].course_id + "-" + cs[index].course_name
            );
          }
        })
        .catch((error) => {
          // process error object
          console.log(error.status);
        });

      //This is to get the list of courses for our drop down list selection
      axios
        .get(courseUrl)
        .then((response) => {
          // process response.data object
          console.log(response.data.data.courses)
          this.courses = response.data.data.courses
        })
        .catch((error) => {
          // process error object
          console.log(response.data)
        });
    },

    remove(id) {
      // this is to remove the skills in our this.courseSkills based on the users input
      this.courseSkills.splice(id, 1);
    },
    add(){
      //this is to add to our current course selection list this.courseSkills
      this.courseSkills.push(this.selectionInput)
    },
    update() {//this will handle the submission of changes to the backend

    },
  },
  created() {
    url = `${backendDomain}/skill`;
    axios
      .get(url)
      .then((response) => {
        // process response.data object
        console.log(response.data.code);
        console.log(response.data.data.skills);
        console.log(response.data.data.skills[0].courseskills);
        if (response.data.code == 200) {
          this.skills = response.data.data.skills;
          this_holder = this;
          console.log(this_holder);
          for (let i = 0; i < this.skills.length; i++) {
            // iterate through courseskills
            for (let j = 0; j < this.skills[i].courseskills.length; j++) {
              // get course_id
              course_id = this.skills[i].courseskills[j].course_id;

              // get course name with course_id using axios get
              url = `${backendDomain}/course/` + course_id;
              axios
                .get(url)
                .then((response) => {
                  // process response.data object
                  console.log(response.data.code);
                  if (response.data.code == 200) {
                    course_name = response.data.data.course_name;
                    console.log(course_name);
                  }
                })
                .finally(() => {
                  console.log(course_name);
                  // add course_name to courseskills
                  console.log(this_holder);
                  this_holder.skills[i].courseskills[j].course_name =
                    course_name;
                  console.log(this_holder.skills[i].courseskills[j]);
                });
            }
          }
        }
        //When all skills are softdeleted
        else {
          this.message = "<p>There are no skills currently available</p>";
        }
      })
      .catch((error) => {
        // process error object
        console.log(error.response.status);
        //When skills database is empty
        if (error.response.status == 404) {
          this.message = "<p> There is currently no skills available </p>";
        }
      });
  },
});
// (2) Link (mount) Vue instance to DOM
const vm = app1.mount("#app");
