export default {
    template: `
    <div class="form-container" > 
        <form action="">
            <p>Sign up to our newsletters for exclusive deals and events to look forward to.</p>
            <input type="text" name="first-name" placeholder="first name" id="first-name">
            <input type="text" name="last-name" placeholder="last name" id="last-name">
            <input type="email" name="email" placeholder="email" id="email">
            <input type="text" name="country" placeholder="country" id="country">

            <button type="submit">Send Me News!</button>
        </form>
    </div>
    `,

    data() {
        return{

        }
    },

    methods: {
        // login() {
        //     console.log("trying to log in");

        //     // check against our live account creds
        //     if (this.input.username != "" && this.input.password != "") {

        //         // create some form data to do a POST request
        //         let formData = new FormData();

        //         formData.append("username", this.input.username);
        //         formData.append("password", this.input.password);

        //         // do a fetch here and check creds on the back end
        //         let url = `./admin/admin_login.php`;

        //         fetch(url, {
        //             method: 'POST', 
        //             body: formData
        //         })
        //             .then(res => res.json())
        //             .then(data => {
        //                 if (data == "Login Failed") {
        //                     // if the php file returns a failure, try again
        //                     console.log("authentication failed, try again");
        //                     return;
        //                 } else {
        //                     // if the back-end authentication works, then go to the users page
        //                     this.$emit("authenticated", true);
        //                     this.$router.replace({ name: "users" });
        //                 }
        //             })
        //         .catch(function(error) {
        //             console.error(error);
        //         });
        //     } else {
        //         console.log("username and password can't be blank");
        //     }
        // }
    },
}