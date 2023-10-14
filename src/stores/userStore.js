import { reactive } from "vue";
import router from "../router";
const userDetails = reactive({
  name: "Md. Himel Ali",
  designation: "FrontEnd Developer",
  profileImage: "/avatar.png",
  birthDate: "1997-12-25",
  phone: "815152-85265",
  address: "Nobinbag, Gopalganj Sadar, Dhaka",
  email: "himel.phy@bsmrstu.edu.bd",
  description:
    "Hi, I'm Md. Himel Ali, a front-end developer with over 1 year of experience in the industry. I'm passionate about creating beautiful, user-friendly websites and web applications. I have a strong understanding of HTML, CSS, and JavaScript, and I'm proficient in a variety of front-end frameworks, including Vue.js, Bootstrap, Tailwindcss, and Sass. I'm also experienced in using design tools like Figma and Sketch. I'm always looking for new challenges and opportunities to grow my skills and knowledge.",
  update() {
    router.push({ path: "/" });
  },
});

export { userDetails };
