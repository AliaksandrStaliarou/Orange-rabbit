/**
 * Created by user on 15.12.2017.
 */

var home = document.querySelector('.menu .home_');
function homeMove() {
    var homePic = document.querySelector('.menu .home');
    if (event.type == 'mousemove') {
        homePic.classList.add('home2');
    }
    if (event.type == 'mouseout') {
        homePic.classList.remove('home2');
    }
}
home.addEventListener('mousemove', homeMove);
home.addEventListener('mouseout', homeMove);


var about = document.querySelector('.menu .about_');
function aboutMove() {
    var aboutPic = document.querySelector('.menu .about');
    if (event.type == 'mousemove') {
        aboutPic.classList.add('about2');
    }
    if (event.type == 'mouseout') {
        aboutPic.classList.remove('about2');
    }
}
about.addEventListener('mousemove', aboutMove);
about.addEventListener('mouseout', aboutMove);


var work = document.querySelector('.menu .work_');
function workMove() {
    var workPic = document.querySelector('.menu .work');
    if (event.type == 'mousemove') {
        workPic.classList.add('work2');
    }
    if (event.type == 'mouseout') {
        workPic.classList.remove('work2');
    }
}
work.addEventListener('mousemove', workMove);
work.addEventListener('mouseout', workMove);


var blog = document.querySelector('.menu .blog_');
function blogMove() {
    var blogPic = document.querySelector('.menu .blog');
    if (event.type == 'mousemove') {
        blogPic.classList.add('blog2');
    }
    if (event.type == 'mouseout') {
        blogPic.classList.remove('blog2');
    }
}
blog.addEventListener('mousemove', blogMove);
blog.addEventListener('mouseout', blogMove);


var contact = document.querySelector('.menu .contact_');
function contactMove() {
    var contactPic = document.querySelector('.menu .contact');
    if (event.type == 'mousemove') {
        contactPic.classList.add('contact2');
    }
    if (event.type == 'mouseout') {
        contactPic.classList.remove('contact2');
    }
}
contact.addEventListener('mousemove', contactMove);
contact.addEventListener('mouseout', contactMove);



var menu = document.querySelector('.menu');
function handlerMove(event) {
    var target = event.target;
    target.nextElementSibling.firstElementChild.style.color = '#fb9c06';
}

function handlerOut(event) {
    var target = event.target;
    target.nextElementSibling.firstElementChild.style.color = '';
}

menu.addEventListener('mouseover', handlerMove);
menu.addEventListener('mouseout', handlerOut);

