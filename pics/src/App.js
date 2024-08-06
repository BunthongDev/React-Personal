import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import SearchImage from './api';

export default function App() {
  const handleSubmit = async (term) =>{
    const result = await SearchImage(term); 

    console.log(result)
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList />
    </div>
  )
};
