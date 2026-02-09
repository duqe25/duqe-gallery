const artworks = [

    {
    title:"Composition I",
    medium:"Oil on Canvas",
    image:"https://customer-assets.emergentagent.com/job_creative-gallery-109/artifacts/4tz5au2f_IMG_0080.png"
    },
    
    {
    title:"Composition II",
    medium:"Gouache",
    image:"https://customer-assets.emergentagent.com/job_creative-gallery-109/artifacts/ezz1hsj2_IMG_0102.png"
    },
    
    {
    title:"Composition III",
    medium:"Oil on Canvas",
    image:"https://customer-assets.emergentagent.com/job_creative-gallery-109/artifacts/q3ft03xj_IMG_0090.png"
    },
    
    {
    title:"Composition IV",
    medium:"Gouache",
    image:"https://customer-assets.emergentagent.com/job_creative-gallery-109/artifacts/2av4z864_IMG_0086.png"
    },
    
    {
    title:"Composition V",
    medium:"Oil on Canvas",
    image:"https://customer-assets.emergentagent.com/job_creative-gallery-109/artifacts/zxbpq4r5_IMG_0099.png"
    }
    
    ];
    
    let currentImage=0;
    
    const gallery=document.getElementById("galleryGrid");
    
    artworks.forEach((art,index)=>{
    
    const div=document.createElement("div");
    
    div.className="gallery-item";
    
    const img=document.createElement("img");
    
    img.src=art.image;
    
    img.onclick=()=>openLightbox(index);
    
    div.appendChild(img);
    
    gallery.appendChild(div);
    
    });
    
    function openLightbox(index){
    
    currentImage=index;
    
    document.getElementById("lightbox").style.display="block";
    
    updateLightbox();
    
    }
    
    function closeLightbox(){
    
    document.getElementById("lightbox").style.display="none";
    
    }
    
    function nextImage(){
    
    currentImage=(currentImage+1)%artworks.length;
    
    updateLightbox();
    
    }
    
    function prevImage(){
    
    currentImage=(currentImage-1+artworks.length)%artworks.length;
    
    updateLightbox();
    
    }
    
    function updateLightbox(){
    
    document.getElementById("lightboxImage").src=artworks[currentImage].image;
    
    document.getElementById("lightboxInfo").innerHTML=
    
    artworks[currentImage].title+"<br>"+artworks[currentImage].medium;
    
    }
    
    document.addEventListener("keydown",function(e){
    
    if(document.getElementById("lightbox").style.display==="block"){
    
    if(e.key==="Escape")closeLightbox();
    
    if(e.key==="ArrowRight")nextImage();
    
    if(e.key==="ArrowLeft")prevImage();
    
    }
    
    });
    