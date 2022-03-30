
export function SelectDog({ name, data, dogBreed, setDogBreed }) {

  const selectDog = (e) => setDogBreed(e.target.value);

  return (
    <div>
      <select className='select' name={name} onChange={selectDog} value={dogBreed}>
        {data.dogs.map((item) =>
          <option key={item.id}>{item.breed}</option>
        )}
      </select>
    </div>
  );
}