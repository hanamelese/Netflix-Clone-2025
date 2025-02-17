import React from 'react'
import Row from '../Row/Row';
import request from '../../../utils/request';

const RowList = () => {
  
  return (
    <>
      <Row title='NETFLIX ORIGINAL'
         fetchUrl={request.fetchNetflixOriginal}
         isLargeRow={true} />
      <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={request.fetchTopRateMovies}/>
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovie}/>
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovie}/>
      <Row title='Horror Movies' fetchUrl={request.fetchHorrorMovies}/>
      <Row title='Tv Shows' fetchUrl={request.fetchTvShow}/>
      <Row title='Animation Movies' fetchUrl={request.fetchAnimationMovies}/>
      <Row title='Documentaries' fetchUrl={request.fetchDocumentaries}/>
   
</>  )
}

export default RowList;
