class CustomNavbar extends HTMLElement{
  connectedCallback() {
    this.render()
  }
  render() {
    this.innerHTML = `
    <style>
    :root {
      --mygreen: #23c483;
      --slate : #e2e8f0;
    }
    *{
      padding: 0;
      margin: 0;
      font-family: "Poppins", sans-serif;
    }
    body{
      height: 100vh;
      position: relative;
      width: 100%;
      background-color: var(--slate);
    }
    .header {
      height: 80px;
      position: relative;
      background-color: transparent; 
      padding: 0px 5rem 0px 5rem;
    }
    .header-div {
      display: flex;
      height: 100%;
      gap: 5rem;
      align-items: center;
    }
    .logo {
      font-weight: 900;
      font-size: 2.3rem;
      text-transform: capitalize;
      color: white;
    }
    .menu-navbar {
      display: flex;
      text-decoration: none;
      gap: 3rem;
      list-style: none;
    }
    .menu-navbar li a {
      text-decoration: none;
      color: white;
      transition: all ease-in-out 250ms;
    }
    .menu-navbar li a:hover {
      color: var(--slate);
    }
    .right-btn {
      margin-left: auto;
      display: flex;
      gap: 10px;
    }
    .right-btn button {
      background-color: transparent;
      border: none;
      color: white;
      cursor: pointer;
      transition: all ease-in-out 250ms;
    }
    .right-btn button:hover {
      color: var(--slate);
    }
    #profile-btn {
      padding: 1em 2em;
      text-decoration: none;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 2.5px;
      font-weight: 500;
      color: #000;
      background-color: #fff;
      border: none;
      border-radius: 45px;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease 0s;
      cursor: pointer;
      outline: none;
    }
    #profile-btn:hover {
      background-color: var(--slate);
      box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
      transform: translateY(-7px);
    }
    #profile-btn:active {
      transform: translateY(-1px);
    }
    .custom-shape-divider-top-1669598084 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;
    }
    
    .custom-shape-divider-top-1669598084 svg {
      position: relative;
      display: block;
      width: calc(119% + 1.3px);
      height: 499px;
      transform: rotateY(180deg);
    }
    
    .custom-shape-divider-top-1669598084 .shape-fill {
      fill: var(--mygreen);
    }
    .profile-card{
      display: none;
      flex-direction: column;
      align-items: center;
      position: fixed;
      top: 4.5rem;
      right: 5rem;
      height: 400px;
      width: 250px;
      z-index: 99;
      padding: 1em 2em;
      font-size: 12px;
      font-weight: 500;
      color: #000;
      background-color: var(--mygreen);
      border: none;
      border-radius: 20px;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease 0s;
    }
    .profile-card-active{
      display: flex;
    }
    .image-wrapper{
      border: 7px solid white;
      border-radius: 100%;
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      height: 200px;
    }
    .profile-card p{
      text-align: center;
      margin-top: 20px;
    }
    .profile-card button{
      margin-top: 2rem;
      padding: 1em 2em;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 2.5px;
      font-weight: 500;
      color: #000;
      background-color: #fff;
      border: none;
      border-radius: 45px;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease 0s;
      cursor: pointer;
      outline: none;
    }
    .profile-card button:hover{
      box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
      transform: translateY(-7px);
    }
    .profile-card button:active{
      transform: translateY(-1px);
    }
    </style> 
    <div class="custom-shape-divider-top-1669598084">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none">
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          class="shape-fill"></path>
      </svg>
    </div>
    <header class="header">
      <div class="header-div">
        <h1 class="logo">mapala</h1>
        <ul id="menu" class="menu-navbar">
          <li><a href="/index.html">Home</a></li>
          <li><a href="./admin.html">Admin</a></li>
          <li><a href="./news.html">News</a></li>
          <li><a href="./member.html">Member</a></li>
        </ul>
        <div class="right-btn">
          <button class="material-symbols-outlined">search</button>
          <button id="profile-btn">profile</button>
        </div>
      </div>
    </header>
    <div id="profile-card" class="profile-card">
      <div class="image-wrapper">
        <img src="../assets/man.png" alt="" />
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, fugit.
      </p>
      <button>Log out</button>
    </div>

    `
    this.querySelector("#profile-btn").addEventListener("click", () => {
      document.getElementById('profile-card').classList.toggle('profile-card-active')
    });
  }
}
customElements.define('custom-template',CustomNavbar)