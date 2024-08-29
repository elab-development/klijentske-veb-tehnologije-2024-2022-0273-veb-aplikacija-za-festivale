import { Festival } from "../types/festivals";

export const festival: Festival[] = [
    {
        id: 1,
        title: "EXIT",
        start: "10.07",
        end: "14.07",
        type: "Multi-genre",
        poster: "/src/assets/img/exitposter.jpg",
        location: "Novi Sad, Serbia",
        completed: false, 
        image1: "/src/assets/img/exitimg1.jpg",
        image2: "/src/assets/img/exitimg2.jpg",
        text: ""
    },
    {
        id: 2,
        title: "Tomorrowland",
        start: "19.07",
        end: "28.07",
        type: "Electronic",
        poster: "/src/assets/img/tomorrowlandposter.jpeg",
        location: "Boom, Belgium",
        completed: true,
        image1: "/src/assets/img/tomorrowlandimg1.jpeg",
        image2: "/src/assets/img/tomorrowlandimg2.jpeg",
        text: ""
    },
    {
        id: 3,
        title: "Primavera Sound",
        start: "05.06",
        end: "09.06",
        type: "Indie",
        poster: "/src/assets/img/primaveraposter.jpg",
        location: "Barcelona, Spain",
        completed: true,
        image1: "/src/assets/img/primaveraimg1.jpeg",
        image2: "/src/assets/img/primaveraimg2.jpeg",
        text: ""
    },
    {
        id: 4,
        title: "Beach, Please!",
        start: "11.07",
        end: "14.07",
        type: "Rap",
        poster: "/src/assets/img/beachpleaseposter.jpg",
        location: "Costinesti, Romania",
        completed: true,
        image1: "/src/assets/img/beachpleaseimg1.jpg",
        image2: "/src/assets/img/beachpleaseimg2.jpg",
        text: ""
    },
]