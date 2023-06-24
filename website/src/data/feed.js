import paul from "../assets/group/paul.png";
import sheila from "../assets/group/sheila.png";
import image1 from "../assets/feed/image1.png";
import image2 from "../assets/feed/image2.png";
import image3 from "../assets/feed/image3.png";


export default [
    {
        id: 1,
        profile_picture: paul,
        username: "John Clark",
        lastposted: "20h",
        visibility: "Public",
        caption: "Who saved the day Thanos or Spider Man?",
        media1: image1,
        media2: image2,
        media3: null,
        comment_count: 68,
        share_count: 50,
    },
    {
        id: 2,
        profile_picture: sheila,
        username: "Sheila Camrog",
        lastposted: "2h",
        visibility: "Public",
        caption: "Who's up for a game of PUBG? 😏",
        media1: image3,
        media2: null,
        media3: image2,
        comment_count: 100,
        share_count: 20,
    },
]