
import type { SocialRef, BestSkill} from "@/types/index";
import { ref } from "vue";

export const socialLinks: Ref<SocialRef[]> = ref([
    {
        icon:"entypo-social:linkedin",
        link: "https://www.linkedin.com/in/jes%C3%BAs-fernando-barajas-galindo-965149285/",
        ariaLabel : "Linkedin"
    },
    {
        icon:"ic:baseline-mail-outline",
        link: "mailto:me@fernandobg.com",
        ariaLabel : "Gmail",
    },
    {
        icon:"mingcute:plugin-line",
        link: "https://redplug.com.mx",
        ariaLabel : "Red Plug",
    }
]);

export const bestSkills: Ref<BestSkill[]> = ref([
    {
        name : "Laravel",
        icon:"flowbite:laravel-solid"
    },
    {
        name : "JS",
        icon:"lineicons:javascript"
    },
    {
        name: "PHP",
        icon:"lineicons:php"
    }
]);