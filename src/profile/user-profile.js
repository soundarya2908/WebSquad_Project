import React from 'react';
import './index.css';

const  UserProfilePage = (
    {
      user = { 
        "profilephoto": "https://bootdey.com/img/Content/avatar/avatar5.png", 
        "occupation":"user occupation",
        "about": "user profile description", 
        "website":"user website",  
        "location":"user location",  
        "companyname":"user compay name",
        "position":"user work position",
        "followers": 3,     
        "following": 2,    
        "liked": true ,    
        "likes":  5 ,    
        "posts": "reviews on past orders if any",   
        "phone":"user's phone number",    
        "firstname":"user's first name",   
        "lastname":"user's last name",    
        "email":"user's email",   
        "dateofbirth":"user's date of birth", 
        "dateofjoining":"user date of joining",   
        "previousorders": "number of previous orders",    
        "favorites": "favorite food places marked by the user",   
        "previousorderslist": "", 
        "favoriteslist": "array" 
      } 
    }
) => {
 return (
     <>
     <head>
     <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>
<div class="container">
<div class="row">
      <div class="col-xs-12 col-sm-9">      
        <div class="panel panel-default">
          <div class="panel-heading">
          <h4 class="panel-title">User profile</h4>
          </div>
          <div class="panel-body">
            <div class="profile__avatar">
              <img src={user.profilephoto} alt="..."/>
            </div>
            <div class="profile__header">
              <h4>{user.firstname} {user.lastname}<small>{user.occupation}</small></h4>
              <p class="text-muted">
                {user.about}
              </p>
              <p>
                <a href="#">{user.website}</a>
              </p>
            </div>
            <div class="profile__header">
            &nbsp;&nbsp; <span><i class="bi bi-chat">&nbsp;{user.followers}   </i> &nbsp;Followers</span> &nbsp;&nbsp;&nbsp;&nbsp;
                <span><i class="bi bi-repeat">&nbsp;{user.following}  </i>&nbsp; Following </span> &nbsp;&nbsp;&nbsp;&nbsp;
                <span><i class="bi bi-hand-thumbs-up">&nbsp;{user.likes} </i>&nbsp; Likes</span>

            </div>
          </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-heading">
          <h4 class="panel-title">User information</h4>
          </div>
          <div class="panel-body">
            <table class="table profile__table">
              <tbody>
                <tr>
                  <th><strong>Location</strong></th>
                  <td>{user.location}</td>
                </tr>
                <tr>
                  <th><strong>Company name</strong></th>
                  <td>{user.companyname}</td>
                </tr>
                <tr>
                  <th><strong>Position</strong></th>
                  <td>{user.position}</td>
                </tr>
                <tr>
                  <th><strong>Date of Birth</strong></th>
                  <td>{user.dateofbirth}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-heading">
          <h4 class="panel-title">Orders History</h4>
          </div>
          <div class="panel-body">
            <table class="table profile__table">
              <tbody>
                <tr>
                  <th><strong>Comments</strong></th>
                  <td>58584</td>
                </tr>
                <tr>
                  <th><strong>Member since</strong></th>
                  <td>{user.dateofjoining}</td>
                </tr>
                <tr>
                  <th><strong><a href="#">Previous Food Orders</a></strong></th>
                  <td>{user.previousorders}</td> 
                </tr>
                <tr>
                  <th><strong><a href="#">Favorites</a></strong></th>
                  <td>{user.favorites}</td> 
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-heading">
          <h4 class="panel-title">Latest posts</h4>
          </div>
          <div class="panel-body">
            <div class="profile__comments">
              <div class="profile-comments__item">
                <div class="profile-comments__controls">
                  <a href="#"><i class="bi bi-share-square-o"></i></a>
                  <a href="#"><i class="bi bi-edit"></i></a>
                  <a href="#"><i class="bi bi-trash-o"></i></a>
                </div>
                <div class="profile-comments__avatar">
                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="..."/>
                </div>
                <div class="profile-comments__body">
                  <h5 class="profile-comments__sender">
                    Richard Roe <small>2 hours ago</small>
                  </h5>
                  <div class="profile-comments__content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, corporis. Voluptatibus odio perspiciatis non quisquam provident, quasi eaque officia.
                  </div>
                </div>
              </div>
              <div class="profile-comments__item">
                <div class="profile-comments__controls">
                  <a href="#"><i class="bi bi-share-square-o"></i></a>
                  <a href="#"><i class="bi bi-edit"></i></a>
                  <a href="#"><i class="bi bi-trash-o"></i></a>
                </div>
                <div class="profile-comments__avatar">
                  <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="..."/>
                </div>
                <div class="profile-comments__body">
                  <h5 class="profile-comments__sender">
                    Richard Roe <small>5 hours ago</small>
                  </h5>
                  <div class="profile-comments__content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero itaque dolor laboriosam dolores magnam mollitia, voluptatibus inventore accusamus illo.
                  </div>
                </div>
              </div>
              <div class="profile-comments__item">
                <div class="profile-comments__controls">
                  <a href="#"><i class="bi bi-share-square-o"></i></a>
                  <a href="#"><i class="bi bi-edit"></i></a>
                  <a href="#"><i class="bi bi-trash-o"></i></a>
                </div>
                <div class="profile-comments__avatar">
                  <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="..."/>
                </div>
                <div class="profile-comments__body">
                  <h5 class="profile-comments__sender">
                    Richard Roe <small>1 day ago</small>
                  </h5>
                  <div class="profile-comments__content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, esse, magni aliquam quisquam modi delectus veritatis est ut culpa minus repellendus.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="col-xs-12 col-sm-3">
        <p>
          <a href="#" class="profile__contact-btn btn btn-lg btn-block btn-info" data-toggle="modal" data-target="#profile__contact-form">
            Follow
          </a>
          <a href="#" class="profile__contact-btn btn btn-lg btn-block btn-danger" data-toggle="modal" data-target="#profile__contact-form">
            Like
          </a>
          <a href="#" class="profile__contact-btn btn btn-lg btn-block btn-warning" data-toggle="modal" data-target="#profile__contact-form">
            Edit Profile
          </a>
        </p>

        <hr class="profile__contact-hr"/>
        
        <div class="profile__contact-info">
          <div class="profile__contact-info-item">
            <div class="profile__contact-info-icon">
            <i class="bi bi-telephone-fill"></i>
            </div>
            <div class="profile__contact-info-body">
              <h5 class="profile__contact-info-heading">Work number</h5>
              (000)987-65-43
            </div>
          </div>
          <div class="profile__contact-info-item">
            <div class="profile__contact-info-icon">
            <i class="bi bi-telephone-fill"></i>
            </div>
            <div class="profile__contact-info-body">
              <h5 class="profile__contact-info-heading">Mobile number</h5>
              (000)987-65-43
            </div>
          </div>
          <div class="profile__contact-info-item">
            <div class="profile__contact-info-icon">
            <i class="bi bi-envelope"></i>
            </div>
            <div class="profile__contact-info-body">
              <h5 class="profile__contact-info-heading">E-mail address</h5>
              <a href="mailto:admin@domain.com">admin@domain.com</a>
            </div>
          </div>
          <div class="profile__contact-info-item">
            <div class="profile__contact-info-icon">
            <i class="bi bi-building"></i>
            </div>
            <div class="profile__contact-info-body">
              <h5 class="profile__contact-info-heading">Work address</h5>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
          </div>
        </div>

      </div>
    </div>
</div>
     </>
 )
}

export default UserProfilePage;