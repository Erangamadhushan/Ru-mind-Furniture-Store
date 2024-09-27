window.addEventListener('DOMContentloaded',()=>{
    document.querySelector('.loading').style.display = 'none';
})

const observer = new IntersectionObserver((entries,observer) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting) {
            entry.target.classList.add('animate__fadeInUp');
        }
    })
},
{
    root:null,
    rootMargin:'0px',
    threshold:0.4
})

let animate_images = document.querySelectorAll('.anime__animated');
animate_images.forEach((animate_image)=>{
    observer.observe(animate_image);
})