

// ------------------------------------------- Navbar -------------------------------------------

let $navbar = $("nav.navbar"),
  navbarLinks = $("nav.navbar ul li a.nav-link");

navScrolled();

changeLinksActiveOfNavbar();

sectionsScroll();

$(window).on("scroll", function () {
  navScrolled();

  changeLinksActiveOfNavbar();
});

// ------------------------------------------- services section -------------------------------------------

let servicesData = null;

(async function () {
  let promise = await fetch("https://semicode.tech/api/v1/l10nhouse/services");
  servicesData = await promise.json();
  let i=0;
  for (let item of servicesData) {
    $("#Services .row").append(`
          <div class="col-md-6 mb-5 d-flex justify-content-center align-content-center  ">
            <div class="item text-center p-2 ">
                <div class="content">
                    <img src="./images/${item.icon}" class="img-fluid" alt="">
                    <h4 class="my-3">${item.title}</h4>
                    <p>${prepareText(item.description.slice(0, 150))}... <span class="firstColor read" onclick="showServicesData('${item.icon}')">Read More</span></p>
                </div> 
            </div>
          </div>
        `);
    i++;
  }
})();
