import React from "react";
import postpic from "./../../Assets/Images/myProfile.jpg";
import logo from "./../../Assets/Images/Posidoonb.png";
import "./style.css";

const Menus = [
  {
    goto: "/home",
    icon: "pages",
    title: "Feed",
  },
  {
    goto: "/home",
    icon: "public",
    title: "Explore",
  },
  {
    goto: "/home",
    icon: "notifications",
    title: "Notifications",
  },
  {
    goto: "/home",
    icon: "send",
    title: "Messages",
  },
  {
    goto: "/profile",
    icon: "account_circle",
    title: "Profile",
  },
  {
    goto: "/home",
    icon: "logout",
    title: "Logout",
  },
];


function HomePost(props) {
  return (
    <div>
      {Sidebar()}
      {MainHome()}
    </div>
  );

    function Feed() {
      return <div>
        <div className="feed">
            <h1>Feed</h1>
            <div className="feed-text">
                <h2>Latest</h2>
                <span>Popular</span>
            </div>
        </div>
        {Posts()}
        </div>
    }

  function Posts() {
    const Posts = [{
      Image:postpic,
      ProfileImage:postpic,
      Username:'AbdallahZaher',
      likes:80,
      comments:80

    },{
      Image:postpic,
      ProfileImage:postpic,
      Username:'AbdallahZaher',
      likes:80,
      comments:80

    },{
      Image:postpic,
      ProfileImage:postpic,
      Username:'AbdallahZaher',
      likes:80,
      comments:80

    },{
      Image:postpic,
      ProfileImage:postpic,
      Username:'AbdallahZaher',
      likes:80,
      comments:80

    },{
      Image:postpic,
      ProfileImage:postpic,
      Username:'AbdallahZaher',
      likes:80,
      comments:80

    },{
      Image:postpic,
      ProfileImage:postpic,
      Username:'AbdallahZaher',
      likes:80,
      comments:80

    },{
      Image:postpic,
      ProfileImage:postpic,
      Username:'AbdallahZaher',
      likes:80,
      comments:80

    },{
      Image:postpic,
      ProfileImage:postpic,
      Username:'AbdallahZaher',
      likes:80,
      comments:80

    },{
      Image:postpic,
      ProfileImage:postpic,
      Username:'AbdallahZaher',
      likes:80,
      comments:80

    },{
      Image:postpic,
      ProfileImage:postpic,
      Username:'AbdallahZaher',
      likes:80,
      comments:80

    },{
      Image:postpic,
      ProfileImage:postpic,
      Username:'AbdallahZaher',
      likes:80,
      comments:80

    }]
    return <div className="main-posts">
      {
        Posts.map((post, id)=>{
          return<div className="post-box" key={id}>
          <img src={post.Image} alt=""  />
          <div className="post-info">
            <div className="post-profile">
              <div className="post-img">
                <img src={post.ProfileImage} alt="" />
              </div>
              <h3>{postpic.Username}</h3>
            </div>
            <div className="likes">
              <span className="material-icons icon">
              favorite_border
              </span>
              <span className="num">{post.likes}</span>
              <span className="material-icons icon">
                comment
              </span>
              <span className="num">{post.comments}</span>
            </div>
          </div>
        </div>
        })
      }
      
    </div>;
  }

  function Stories() {
    const Stories =[{
        profilepic:postpic
    },{
        profilepic:postpic
    },{
        profilepic:postpic
    },{
        profilepic:postpic
    },{
        profilepic:postpic
    },{
        profilepic:postpic
    },{
        profilepic:postpic
    },{
        profilepic:postpic
    },{
        profilepic:postpic
    },{
        profilepic:postpic
    },{
        profilepic:postpic
    },{
        profilepic:postpic
    },{
        profilepic:postpic
    },]
    return (
      <div>
        <div className="stories-title">
          <h1>Stories</h1>
          <a className="btn" href="/home">
            <span className="material-icons">add_circle_outline</span>
            <div className="text">Watch all</div>
          </a>
        </div>
        <div className="stories">
            <div className="stories-img">
                <img src={postpic} alt="" />
                <div className="add">+</div>
            </div>
            {
                Stories.map((story , id)=>{
                    return <div className="stories-img color"  key={id} >
                    <img src={story.profilepic} alt=""/>
                </div>
                })
            }
        </div>
        {Feed()}
      </div>
    );
  }

  function MainHome() {
    return (
      <div className="mainHome">
        <div className="header">
          <div className="search">
            <span className="material-icons">search</span>
            <input type="text" placeholder="Search" />
          </div>
          <div className="header-content">
            <span className="material-icons">notifications</span>
            <a href="/createPost" className="btn">
              <span className="material-icons">add_circle_outline</span>
              <div className="btn-text">Add Photo</div>
            </a>
          </div>
        </div>
        {Stories()}
      </div>
    );
  }

  function Sidebar() {
    return (
      <div className="sidebar">
        <a href="/" className="logo">
          <img src={logo} alt="" />
        </a>
        <div className="porfile">
          <div className="profile-img">
            <img src={postpic} alt="" />
          </div>
          <div className="name">
            <h1>Abdallah zaher</h1>
          </div>
          <span>@abdallahzaher</span>
        </div>
        <div className="about">
          <div className="box">
            <h3>50</h3>
            <span>Posts</span>
          </div>
          <div className="box">
            <h3>2K</h3>
            <span>Followers</span>
          </div>
          <div className="box">
            <h3>50</h3>
            <span>Following</span>
          </div>
        </div>
        <div className="menu mt-10">
          {Menus.map((tap,id) => {
            return (
              <a href={tap.goto} className="active" key={id}>
                <span className="material-icons icon" >{tap.icon}</span>
                {tap.title}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default HomePost;
