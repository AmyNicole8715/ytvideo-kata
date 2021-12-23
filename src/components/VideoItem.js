import ReactPlayer from 'react-player';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

import { useData } from '../context/DataContext';

const StyledPaper = styled(Paper)({
    padding: '1rem',
    margin: '1rem',
    backgroundColor: '#171515',
    color: 'white',
    overflow: 'hidden',
    width: 'max-content',
});

const Wrapper = styled('div')({
    position: 'relative',
    margin: '0',
    maxHeight: '525px',
    boxSizing: 'content-box',
});

const Title = styled('div')({
    position: 'relative',
    width: 'max-content',
    fontFamily: 'Bebas Neue',
    fontSize: '1.5rem',
});



export default function VideoItem() {
    const { videos, searchTerm } = useData();

    return (
        <StyledPaper>
                <Wrapper>
                    <Title>
                        {searchTerm}
                    </Title>
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
                </Wrapper>
        </StyledPaper>
    );
}