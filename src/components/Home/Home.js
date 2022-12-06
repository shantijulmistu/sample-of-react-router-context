import { useLoaderData } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const photos = useLoaderData().slice(0, 30);
    return (
        <div className="photos">
            {
                photos.map(photo => <div className="photo">
                    <img src={photo.thumbnailUrl} alt="" />
                    <h3>{photo.title}</h3>
                </div>)
            }
        </div>
    );
};

export default Home;