import ReactPlayer from 'react-player';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

import { useData } from '../context/DataContext';

const StyledPaper = styled(Paper)({
    padding: '1rem',
    margin: '1rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'start',
    backgroundColor: '#171515',
    color: 'white',
    overflow: 'hidden',
    overflowX: 'scroll',
});

const StyledDiv = styled('div')({
    position: 'relative',
    margin: '0',
    maxHeight: '525px',
    boxSizing: 'content-box',
});




export default function VideoItem() {
    const { videos } = useData();

    return (
        <StyledPaper>
                <StyledDiv >
                    <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${videos}`}
                            height='100%'
                            width='max-content'
                            controls={true}
                            playing={true}
                            loop={true}
                            volume={0.5}
                            aria-label='video'
                        />
                </StyledDiv>
        </StyledPaper>
    );
}