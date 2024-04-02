document.addEventListener('DOMContentLoaded', function() {
    const linksContainer = document.getElementById('links');
    const links = [
      {
        name: "Pong",
        url: "https://nafanj.github.io/pong/",
        icon: "fa-gamepad"
      },
      {
        name: "Snake",
        url: "https://nafanj.github.io/snake/",
        icon: "fa-staff-snake"
      },
      {
        name: "Library",
        url: "https://nafanj.github.io/library/",
        icon: "fa-book"
      },
      /*{
        name: "Todo List",
        url: "https://nafanj.github.io/todo-list/",
        icon: "fa-check"
      },
      {
        name: "Bouncy Ball",
        url: "https://nafanj.github.io/bouncing-ball/",
        icon: "fa-volleyball"
      },*/
      {
        name: "CV Builder",
        url: "https://main.d3v7pisq4kxjk5.amplifyapp.com/",
        icon: "fa-regular fa-file"
      },
      {
        name: "Etch-a-Sketch",
        url: "https://nafanj.github.io/etch-a-sketch/",
        icon: "fa-pen"
      },
      {
        name: "Company Orders",
        url: "https://nafanj.github.io/order-shipping/",
        icon: "fa-box"
      },
      {
        name: "AI Image Generator",
        url: "https://nafanj.github.io/ai-image-generator/",
        icon: "fa-image"
      },
      {
        name: "Github",
        url: "https://github.com/NafanJ",
        icon: "fab fa-github"
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nathanjoel",
        icon: "fab fa-linkedin"
      },
    ];
  
    links.forEach(project => {
      const link = document.createElement('a');
      link.href = project.url;
      link.target = "_blank";
      link.className = "link";
      link.innerHTML = `<i class="fa-solid ${project.icon}">&nbsp;</i>${project.name}`;
      linksContainer.appendChild(link);
    });
  });