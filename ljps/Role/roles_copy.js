console.log("roles_copy.js load!");
var skill_name = "";
var this_holder = "";//to hold "this" variable in axios, 
//basically a global variable so that the json object can be accessed outside of the axios function scope
const backendDomain = "https://ljps.herokuapp.com";

const app1 = Vue.createApp({
  data() {
    return {
      // name:value pairs here
      // cannot use variables in another variable as you are declaring here
      jobrole_name: "",
      jobrole_desc: "",
      disabled: false,
      message: "",
      jobroles: "", // Placeholder for now it is to hold all the roles coming from the back end
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
          url = `${backendDomain}/jobrole/` + id + "/softdelete";
          axios
            .get(url)
            .then((response) => {
              // process response.data object
              stat = response.data.code;
              if (stat) {
                Swal.fire({
                  title: "Deleted!",
                  text: "JobRole has been deleted.",
                  icon: "success",
                  allowOutsideClick: false,
                }).then((result) => {
                  if (result.isConfirmed) {
                    //refresh the current page
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
      this.jobrole_name = "";
      this.jobrole_desc = "";
    },
    create() {
      this.disabled = true;

      //Axios post
      url = `${backendDomain}/jobrole`;
      //check if fields are not empty
      if (this.jobrole_name.length == 0 || this.jobrole_desc.length == 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "All fields must be filled up!",
        });

        this.disabled = false;
      } else {
        axios
          .post(url, {
            jobrole_name: this.jobrole_name,
            jobrole_desc: this.jobrole_desc,
          })
          .then((response) => {
            // process response.data
            console.log("create response:" + response.data.code);
            stat = response.data.code;
            if (stat) {
              Swal.fire({
                title: "Created!",
                text: "New Job Role has been created.",
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

            //When jobrole already exists
            if (error.response.status) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Jobrole already Exists!",
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
  },
  created() {
    url = `${backendDomain}/jobrole`;
    axios
      .get(url)
      .then((response) => {
        // process response.data object
        console.log(response.data.code);
        if (response.data.code == 200) {
          this.jobroles = response.data.data.jobroles;
          this_holder = this;
          console.log(this);
          console.log(this_holder);
          for (let i = 0; i < this.jobroles.length; i++) {
            // iterate through roleskills
            for (let j = 0; j < this.jobroles[i].roleskills.length; j++) {
              // get skill id
              skill_id = this.jobroles[i].roleskills[j].skill_id;
              
              // get skill name with skill_id using axios get
              url = `${backendDomain}/skill/` + skill_id;
              axios
                .get(url)
                .then((response) => {
                  // process response.data object
                  console.log(response.data.code);
                  if (response.data.code == 200) {
                    skill_name = response.data.data.skill_name;
                    console.log(i);
                    console.log(j);
                    console.log(skill_name);
                  }
                })
                .finally(() => {
                  console.log(skill_name);
                  // add skill_name to roleskills
                  console.log(this_holder);
                  this_holder.jobroles[i].roleskills[j].skill_name = skill_name;
                });
  
            }
            
            }
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
