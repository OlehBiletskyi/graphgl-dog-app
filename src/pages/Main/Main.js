import { useState } from 'react';
import { useGetAllDogs } from '../../graphql';
import { Dog, About, StartButton, SelectDog } from '../../components';
import styles from './Main.module.css'

export function Main() {
  const [dogBreed, setDogBreed] = useState('akita');
  const [getDog, {loading, error, data}] = useGetAllDogs();
  const selectDog = (e) => setDogBreed(e.target.value);

  if (loading) return <div className='waiting'>Waiting Dogs...</div>
  if (error) return <div>Some Error with dogs(:</div>

  return (
    <div className={styles.container}>
      { !data &&
        <>
          <About
            title={'Dog App'}
            subTitle={'You can learn about different breeds of dogs, and also see their photos.'}
            description={'This app demonstrates the work of the GraphQL.'}
          />
          <StartButton label={'Let`s go'} startFunc={getDog} />
        </>
      }
      {data &&
        <>
          <SelectDog name={'dog'} data={data} dogBreed={dogBreed} setDogBreed={setDogBreed} />
          <Dog dogBreed={dogBreed} />
        </>
      }
    </div>
  );
}