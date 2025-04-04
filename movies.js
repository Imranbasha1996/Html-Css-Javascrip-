async function fectingdata(){
     let res= await fetch('./data.json')
     

     let data =await res.json()
     console.log(data)

displaycards(data);

}
fectingdata()

function displaycards(m){
    for(let i of m){
        let imgsrc=i.movieimg
        let moviename=i.Moviename
        let MovieDesc=i.MovieDesc
        let Year=i.Year
        
        let image=document.createElement('img')
        image.src=imgsrc


        cardscontainer.appendChild(image)

        let elemMoviename=document.createElement('h2')
        elemMoviename.innerText=i.Moviename
        cardscontainer.appendChild(elemMoviename)

//         let elemMovieDesc=document.createElement('p2')
//         elemMovieDesc.innerText=i.MovieDesc
//         cardscontainer.appendChild(elemMovieDesc)



// let elemYear=document.createElement('Y')
//         elemYear.innerText=i.Year
//         cardscontainer.appendChild(elemYear)


    }
}
