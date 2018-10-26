const value = {
   // album : '',
    artist : '',
    song : ''
}
// search inputs
//const album = document.getElementById('searchAlbum');
const artist = document.getElementById('searchName');
const song = document.getElementById('searchSong');

// search input eventListener
//album.addEventListener('change',(e) => {
  //  const albumName = e.target.value;
    //value.album = albumName;
//});

artist.addEventListener('change',(e) =>{
    const artistName = e.target.value;
    value.artist = artistName;
});

song.addEventListener('change',(e) =>{
    const songName = e.target.value;
    value.song = songName;
});


 const res = document.querySelector('.btn')
 res.addEventListener('click', getRes)

 function getRes(e) {
     e.preventDefault()
     console.log(value)

     fetch(`https://api.lyrics.ovh/v1/${value.artist}/${value.song}`)
       .then(function(res){
           return res.json()
           
       })
                      
       .then(function(data){
          const holder = document.querySelector('.lyricsV1')
           holder.innerHTML = `${data.lyrics}`
       })
    }



