import { useGetDogByBreed } from '../../graphql';

export function Dog({ dogBreed }) {
  const  {loading, error, data, refetch, networkStatus } = useGetDogByBreed(
{
          variables: {breed: dogBreed},
          notifyOnNetworkStatusChange: true,
          // pollInterval: 60000,
          errorPolicy: 'none',
          fetchPolicy: "cache-first",
        },
    )
  if (networkStatus === 4) return <p>Changing photo...</p>;
  if (loading) return <div className='download'>Download...</div>;
  if (error) return <div>Error with dog</div>;
  return (
    <div className="dog-container">
      <div className='breed'>{dogBreed}</div>
      <button onClick={()=>refetch()} className='button-refetch'>Other photo</button>
      <img src={data?.dog?.displayImage} alt={'Dog`s photo'} className='dog-image'/>
    </div>
  )
}
