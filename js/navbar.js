$(function() {
    console.log( "NAV ready!" );
    let nav = [
        {
            "url": "home.html",
            "title": "Home"
        },
        {
            "url": "menu.html",
            "title": "Menu"
        },
        {
            "url": "about.html",
            "title": "About"
        },
        {
            "url": "contact.html",
            "title": "Contact"
        },
      ]

    $.each(nav, function(key, link) {
        console.log(link.title)
        $('#navigation').append(`<li class="nav-item">
          <a class="nav-link" href="${link.url}">${link.title}</a>
        </li>`);
          });
});
