import styled from 'styled-components';
import Image1 from '../../../assets/images/mobile/image-gallery-milkbottles.jpg';
import Image2 from '../../../assets/images/mobile/image-gallery-orange.jpg';
import Image3 from '../../../assets/images/mobile/image-gallery-cone.jpg';
import Image4 from '../../../assets/images/mobile/image-gallery-sugar-cubes.jpg';

const images = [Image1, Image2, Image3, Image4];


const GalleryStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Image = styled.img`
  width: 50%;
  @media (min-width:  75em) {
      width: 25%;
  }
`

const Gallery = () => {
    return(
        <GalleryStyles>
            {images.map((image, index) => {
                Image.defaultProps = {
                    src: image
                }
                return <Image key={index}/>;
            })}
        </GalleryStyles>
    );
}

export default Gallery;