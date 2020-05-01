import React from 'react';
import  { Grid } from '@material-ui/core';
import { SearchBar, VideoDetail } from './components';
import youtube from './api/youtube';


class App extends React.Component {
    state = { 
        video: [],
        selectedVideo: null,
    }
    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                    part: 'snippet',
                    maxResults: 5,
                    key: '' ,
    }
});
    this.setState({ videos: response.data.items, selectedVideo: response.data.items })
}
    render() {
        return (
            <Grid flex-star="justify" container spacing={10}>
 
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail />
                        </Grid>
                        <Grid item xs={4}>
                        </Grid>
                    </Grid>

                </Grid>

            </Grid>
        )
    }
}
export default App;