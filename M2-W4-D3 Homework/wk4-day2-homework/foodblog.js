 Vue.component("post-item", {
        props: ['post'],
        template: "#post-template"
    });
     
    new Vue({
        el: '#container',
        components: {
            "nav-bar": {
                template:`
                <ul class="nav">
                    <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Recipes</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Lifestyles</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Videos</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">About</a></li>
                </ul>
                `
            }
            },

        data: {
            blogTitle: "Food Blog",
            sectionTitle: "Comments",
            foodImage: {
                src: "images/chili.jpg",
                alt: "White Chicken Chili",
                width: "180"
            },
            posts: [
                {
                    author: "Brianna",
                    date: "February 18, 2021 @ 3:30 pm",
                    reply: "REPLY",
                    text: "Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!",
                    img: "images/profile.png",
                    level: "Novice",
                    bio: "Food enthusiast. Love to cook and experiment. Into organic, fat-free, sugar-free stuff!"
                },
                {
                    author: "LINH",
                    date: "February 15, 2021 @ 9:45 am",
                    reply: "REPLY",
                    text: "I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good.  It’s a winner!  I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him.  Thank you Lisa!",
                    img: "images/profile.png",
                    level: "Novice",
                    bio: "Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time."
                },
                {
                    author: "CATHERINE LEONARDO",
                    date: "February 13, 2021 @ 12:50 am",
                    reply: "REPLY",
                    text: "I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.",
                    img: "images/profile.png",
                    level: "Novice",
                    bio: "I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!"
                },
                {
                    author: "KALI",
                    date: "February 13, 2021 @ 11:31 am",
                    reply: "REPLY",
                    text: "This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!",
                    img: "images/profile.png",
                    level: "Novice",
                    bio: "Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I'm a food whore! Invite me over for dinner and I'll be there!"
                }
            ],
            showModal: false,
            selectedAuthor: {
                name: "",
                level: "",
                bio: ""
            }
            },
            methods: {
                showAuthor(post) {
                    this.selectedAuthor.name = post.author;
                    this.selectedAuthor.level = post.level;
                    this.selectedAuthor.bio = post.bio;
                    this.showModal = true;
                },
                closeModal() {
                    this.showModal = false;
                }
            }
    });