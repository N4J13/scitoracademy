const featureBox = document.getElementById('featureBox')
const courseBox = document.getElementById('courseBox')
const features = [{
    image: './images/teacher.png',
    color: 'bg-blue-300/40',
    header: 'Practical classes from industrial experts.',
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda alias voluptate quibusdam ratione natus ad, ipsacorrupti maxime id quod.'
},
{
    image: './images/businessman.png',
    color: 'bg-yellow-300/40',
    header: 'Job oriented classes',
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda alias voluptate quibusdam ratione natus ad, ipsacorrupti maxime id quod.'
},
{
    image: './images/laptop.png',
    color: 'bg-purple-300/40',
    header: 'Better work culture experience',
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda alias voluptate quibusdam ratione natus ad, ipsacorrupti maxime id quod.'
},
{
    image: './images/handshake.png',
    color: 'bg-red-300/40',
    header: 'Job placement support',
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda alias voluptate quibusdam ratione natus ad, ipsacorrupti maxime id quod.'
},
]

const courses = [{
    id:1,
    courseName : 'Learn basics of web development - HTML CSS JS',
    image: 'https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?t=st=1656785041~exp=1656785641~hmac=211436a944281a040bf20ac875aea5a37afb98fdd8dded88c38a79600cf645d4&w=1060',
    month : 3,
    details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod modi amet tempora in fugit assumenda officia minima, nisi maiores nulla ',
    more: ''
},
{
    id:2,
    courseName : 'Learn basics of web development - HTML CSS JS React',
    image: 'https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?t=st=1656785041~exp=1656785641~hmac=211436a944281a040bf20ac875aea5a37afb98fdd8dded88c38a79600cf645d4&w=1060',
    month : 4,
    details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod modi amet tempora in fugit assumenda officia minima, nisi maiores nulla ',
    more: ''
},
{
    id:3,
    courseName : 'Learn basics of web development - HTML CSS JS',
    image: 'https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?t=st=1656785041~exp=1656785641~hmac=211436a944281a040bf20ac875aea5a37afb98fdd8dded88c38a79600cf645d4&w=1060',
    month : 3,
    details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod modi amet tempora in fugit assumenda officia minima, nisi maiores nulla ',
    more: ''
},

]

courses.forEach((course) => {
 courseBox.innerHTML+= `<div class="bg-white rounded-xl p-3">
 <img src="${course.image}" class="rounded-xl w-full object-cover h-[13rem]" alt="">
 <h5 class="mt-4 font-bold text-xl">${course.courseName}</h5> 
 <div class="flex mt-2 text-slate-500">
   <p class="text-sm pr-3 "><i class="uil uil-clock pr-1"></i>${course.month} Month</p>
   <p class="text-sm"><i class="uil uil-book-open pr-1"></i>Unlimited Resources</p>
 </div>   
 <p class="mt-3 text-slate-700">${course.details}</p>
 <p class="mt-4 font-bold"><a src="${course.more}" class="underline hover:text-teal-900" href="">See more details</a></p>
</div>`
} );


features.forEach(feature => {

    featureBox.innerHTML += `<div class=" p-5 rounded-lg" >
<div class="rounded-full grid place-items-center mb-8 sm:mb-10 ${feature.color} w-20 h-20">
  <img src="${feature.image}" class="w-10" alt="">
</div>
<h6 class="font-extrabold text-xl sm:min-h-[56px]">${feature.header}</h6>
<p class="text-base text-teal-900 mt-4">
  ${feature.details}
</p>
</div>`


}) 
