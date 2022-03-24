import React, { useState } from 'react';
import { useGetAllDogs } from '../../graphql';
import Dog from './Dog';

function Dogs() {
  const [dogBreed, setDogBreed] = useState('akita');
  const [getDog, {loading, error, data}] = useGetAllDogs();
  const selectDog = (e) => setDogBreed(e.target.value);

  if (loading) return <div className='waiting'>Waiting Dogs...</div>
  if (error) return <div>Some Error with dogs(:</div>
  return (
    <div className='container'>
      <div className='title'>Dogs</div>
      { !data && <button onClick={getDog} className=''>Start</button>}
      {data &&
        <>
          <select className='select' name='dog' onChange={selectDog} value={dogBreed}>
            {data.dogs.map((item) =>
              <option key={item.id}>{item.breed}</option>
            )}
          </select>
          <Dog dogBreed={dogBreed}/>
        </>
      }

    </div>
  )
}
export default Dogs;