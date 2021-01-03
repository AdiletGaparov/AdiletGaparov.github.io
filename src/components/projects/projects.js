import StreamlitProject from './streamlit_project/StreamlitProject.js';
import ReactProject from './react_project/ReactProject.js';
import FakeNewsDetector from './fake_news_project/FakeNewsProject.js';
import MusicRecommender from './music_recommender_project/MusicRecommenderProject.js';
//images
import streamlitCover from "../../assets/img/projects/streamlit-personal-website.jpg";
import reactCover from "../../assets/img/projects/react-personal-website.jpg";
import fakeNewsCover from "../../assets/img/projects/fake-news-cover.jpg";
import musicRecommenderCover from '../../assets/img/projects/music-recommender-cover.jpeg';

const projectList = [
    {
        title: 'How I built my website using Streamlit',
        component: StreamlitProject,
        id: 1,
        cover: streamlitCover,
    },
    {
        title: 'How I re-built my website using React',
        component: ReactProject,
        id: 2,
        cover: reactCover,
    },
    {
        title: 'Fake News Detection',
        component: FakeNewsDetector,
        id: 3,
        cover: fakeNewsCover,
    },
    {
        title: 'Sentiment-based Music Recommender',
        component: MusicRecommender,
        id: 4,
        cover: musicRecommenderCover,
    }
];

export default projectList;