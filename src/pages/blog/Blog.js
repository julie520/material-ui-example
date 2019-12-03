import React, { Fragment } from "react";
import { useStyles } from "./blog.styles";
import { Container, Grid } from "@material-ui/core";
import HeaderBlog from "../../components/header/HeaderBlog";
import MainFeaturedPost from "../../components/post/MainFeaturedPost";
import FeaturedPost from "../../components/post/FeaturedPost";
import Main from "./Main";
import Sidebar from "../../components/sidebar/Sidebar";
import post1 from "./blog-post.1.md";
import post2 from "./blog-post.2.md";
import post3 from "./blog-post.3.md";

const sections = [
  { title: "Home", url: "/" },
  { title: "Album", url: "/album" },
  { title: "Pricing", url: "/pricing" },
  { title: "Checkout", url: "/checkout" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" }
];

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading..."
};

const featuredPosts = [
  {
    title: "Featured post",
    post: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text"
  },
  {
    title: "Post title",
    post: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text"
  }
];

const posts = [post1, post2, post3];

const sidebar = {
  title: "About",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum ratione adipisci porro quia alias commodi velit, officiis incidunt sapiente quae itaque in atque dignissimos! Ex inventore eius vero eos vitae!",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 2019", url: "#" },
    { title: "October 2019", url: "#" },
    { title: "September 2019", url: "#" },
    { title: "August 2019", url: "#" },
    { title: "July 2019", url: "#" },
    { title: "June 2019", url: "#" },
    { title: "May 2019", url: "#" },
    { title: "April 2019", url: "#" }
  ],
  social: [
    { name: "GitHub", icon: "GitHubIcon" },
    { name: "Twitter", icon: "TwitterIcon" },
    { name: "Facebook", icon: "FacebookIcon" }
  ]
};

const Blog = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Container maxWidth="lg">
        <HeaderBlog title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
    </Fragment>
  );
};

export default Blog;
