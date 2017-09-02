import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCW_tbNkDahh2LIFlkYb2atwkYgZja8hKk';


// Create a new component. This component should produce
// some HTML
/*const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}*/

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            // this.setState({ videos: videos});
        });
    }




    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                videos={this.state.videos} />
            </div>
        );
    }
}
// Take this component's genarated HTML and put it 
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));