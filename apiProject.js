console.log("apiProject.js connected")
const baseURL = 'https://ghibliapi.herokuapp.com/films'; 
// const key = 'RGAPI-844f25b3-6730-4264-81f5-fd093dbe34f3';

let url;

const searchTerm = document.querySelector('.searchBars')
const searchForm = document.querySelector('form');
const section = document.querySelector('section');

searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) {
 
    e.preventDefault();
    url = 'https://ghibliapi.herokuapp.com/films';
    console.log('URL:', url);
    

    fetch(url)
    .then(function(result) {
      console.log(result)
       return result.json();
    })
     .then(function(json) {
       console.log(json);
       displayResults(json);
 })
}

function displayResults(json){

    // while (section.firstChild) {
    //     section.removeChild(section.firstChild);
    //   }

    let movies = json;
    console.log('MOVIES =>', movies);

    // movies.forEach(m => {
      //     console.log(m)
      let x = Math.floor((Math.random() * 20) + 0);
      
        if(document.querySelector('form').value == ''){
            console.log('no results')
        }else{
        
          document.getElementById("info").classList.add("information");    
          let descriptions = movies[x].description;
          let titles = movies[x].title;

          if(titles == movies[0].title){
            function changeimg(){
              console.log('change the image!')
              document.getElementById('mainBody').style.backgroundImage = "url('assets/Castle in the Sky.jpg')";
            }
            changeimg();
          }else if(titles == movies[1].title){
            function changeimg(){
              console.log('change the image!')
              document.getElementById('mainBody').style.backgroundImage = "url('assets/grave of fireflies.jpg')";
            }
            changeimg();
          }else if(titles == movies[2].title){
            function changeimg(){
              console.log('change the image!')
              document.getElementById('mainBody').style.backgroundImage = "url('assets/My neighbor Totoro.jpg')";
            }
            changeimg();
          }else if(titles == movies[3].title){
            function changeimg(){
              console.log('change the image!')
              document.getElementById('mainBody').style.backgroundImage = "url('assets/Kiki.jpeg')";
            }
            changeimg();
          }else if(titles == movies[4].title){
            function changeimg(){
              console.log('change the image!')
              document.getElementById('mainBody').style.backgroundImage = "url('assets/Only Yesterday.jpg')";
            }
            changeimg();
          }else if(titles == movies[5].title){
            function changeimg(){
              console.log('change the image!')
              document.getElementById('mainBody').style.backgroundImage = "url('assets/Porko.jpg')";
            }
            changeimg();
          }else if(titles == movies[6].title){
            function changeimg(){
              console.log('change the image!')
              document.getElementById('mainBody').style.backgroundImage = "url('assets/Pokko.jpeg')";
            }
            changeimg();
          }else if(titles == movies[7].title){
            function changeimg(){
              console.log('change the image!')
              document.getElementById('mainBody').style.backgroundImage = "url('assets/Heart.jpg')";
            }
            changeimg();
          }else if(titles == movies[8].title){
            function changeimg(){
              console.log('change the image!')
              document.getElementById('mainBody').style.backgroundImage = "url('assets/mono.jpg')";
            }
            changeimg();
          }else if(titles == movies[9].title){
            function changeimg(){
              console.log('change the image!')
              document.getElementById('mainBody').style.backgroundImage = "url('assets/yama.jpg')";
            }
            changeimg();
          }else if(titles == movies[10].title){
            function changeimg(){
              console.log('change the image!')
              document.getElementById('mainBody').style.backgroundImage = "url('assets/spirit.jpg')";
            }
            changeimg();
          }else if(titles == movies[11].title){
            function changeimg(){
              console.log('change the image!')
              document.getElementById('mainBody').style.backgroundImage = "url('assets/Cat.jpg')";
            }
            changeimg();
          }else if(titles == movies[12].title){
            function changeimg(){
              console.log('change the image!')
              document.getElementById('mainBody').style.backgroundImage = "url('assets/Howl.jpg')";
            }
            changeimg();
          }else if(titles == movies[13].title){
            function changeimg(){
              console.log('change the image!')
              document.getElementById('mainBody').style.backgroundImage = "url('assets/earthsea.jpg')";
            }
            changeimg();
          }else if(titles == movies[14].title){
            function changeimg(){
              console.log('change the image!')
              document.getElementById('mainBody').style.backgroundImage = "url('assets/Ponyo.jpg')";
            }
            changeimg();
          }else if(titles == movies[15].title){
            function changeimg(){
              console.log('change the image!')
              document.getElementById('mainBody').style.backgroundImage = "url('assets/Ari.jpg')";
            }
            changeimg();
          }else if(titles == movies[16].title){
            function changeimg(){
              console.log('change the image!')
              document.getElementById('mainBody').style.backgroundImage = "url('assets/Poppy.png')";
            }
            changeimg();
          }else if(titles == movies[17].title){
            function changeimg(){
              console.log('change the image!')
              document.getElementById('mainBody').style.backgroundImage = "url('assets/Wind.jpg')";
            }
            changeimg();
          }else if(titles == movies[18].title){
            function changeimg(){
              console.log('change the image!')
              document.getElementById('mainBody').style.backgroundImage = "url('assets/Kaguya.jpg')";
            }
            changeimg();
          }else if(titles == movies[19].title){
            function changeimg(){
              console.log('change the image!')
              document.getElementById('mainBody').style.backgroundImage = "url('assets/Marnie.jpg')";
            }
            changeimg();
          }
          
          document.querySelector('.titles').innerHTML = titles;
          document.querySelector('.descriptions').innerHTML = descriptions;
          
}
}


