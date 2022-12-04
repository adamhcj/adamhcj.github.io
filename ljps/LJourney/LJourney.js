console.log("LJourney.js load!");
const backendDomain = "https://ljps.herokuapp.com";
var staff_id = 1;
// get staff_id from url param
try {
  const urlParams = new URLSearchParams(window.location.search);
  staff_id = urlParams.get("staff_id");
  if (staff_id == null) {
    window.location.href = window.location.href + "?staff_id=" + 1;
  }
} catch (error) {
  console.log(error);
}





const app1 = Vue.createApp({
  data() {
    return {
      // name:value pairs here
      // cannot use variables in another variable as you are declaring here
      lj_name: "",
      lj_id: "",
      current_staff_id: "",
      learningjourneys: "",
      staffs: "",
      disabled: false,
      staff_id: "",
      jobrole_id: "", // Placeholder for now it is to hold all the roles coming from the back end
      ljc_id: "",
      course_id: "",
      course_names: []
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
          url = `${backendDomain}/staff/learningjourney/` + id;
          axios
            .delete(url)
            .then((response) => {
              // process response.data object
              stat = response.data.code;
              if (stat) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Learning Journey has been deleted.",
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
    this.current_staff_id = staff_id;
    // lets get all the staffs! for the selecting staff_id dropdown :)
    axios.get(`${backendDomain}/staff`).then((response) => {
      this.staffs = response.data.data.staffs;
      console.log(this.staffs);
    });

    url = `${backendDomain}/staff/learningjourney/${staff_id}`;
    
    
    axios
      .get(url)
      .then((response) => {
        // process response.data object
        console.log(response.data);
        if (response.data.code == 200) {
          this.learningjourneys = response.data.data.learningjourneys;
          console.log(this.learningjourneys)
          this.lj_name = response.data.data.lj_name;
          this.lj_id = response.data.data.lj_id;

        }
      })
      .catch((error) => {
        // process error object
        console.log(error.response.status);
        //When jobroles database is empty
        if (error.response.status == 404) {
          this.message = "<p> There is currently no learning journey created </p>";
        }
      });
  },
});
// (2) Link (mount) Vue instance to DOM
const vm = app1.mount("#app");
