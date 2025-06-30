const app = Vue.createApp({
    data() {
        return {
            buttons: [
                {
                    text: "0",
                    subtitle: "",
                },
                {
                    text: "1",
                    subtitle: "abc",
                },
                {
                    text: "2",
                    subtitle: "def",
                },
            ],
        }
    },
    methods: {

    }
});
app.component("tnine-button","./components/TnineBUtton.js");

app.mount("#app");