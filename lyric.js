class Lyrics {
    constructor() {
       // this.album = ''
        this.artist = ''
        this. song = ''
}
   // getAlbum(album){
     // this.song = song
  // }

   getAlbum(artist){
    this.artistName = artist
   }

   getSong(song){
    this.songName = song
   }

   async getLyrics() {
       const resData = await fetch(`https://api.lyrics.ovh/v1/${value.artist}/${value.song}`);
      const data = (resData.json())
      return data
      
   }

}