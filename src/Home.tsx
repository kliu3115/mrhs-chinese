import {Fade} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import image1 from './assets/Copy of IMG_0613.png'
import image2 from './assets/Copy of IMG_0653.png'
import image3 from './assets/Copy of IMG_0679.png'
import image4 from './assets/Copy of IMG_0689.png'
import image5 from './assets/Copy of IMG_5397.png'
import image6 from './assets/Copy of IMG_5587.png'

const Home = () => {
    const slideImages = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
    ]
    return (
        <div className = "home">
            <h1> Welcome to the MRHS Chinese Language Department! </h1>
            <br />
            <div className="slide-container"><Fade >
                {
                    slideImages.map((each, index) => <img key={index} style={{width: '100%'}} src={each} />)
                }
            </Fade></div>
            <table>
                <tr>
                    <td> <h3> Join Chinese Club! </h3></td>
                    <td> <h3> Join Chinese Honor Society! </h3></td>
                </tr>
                <tr>
                    <td> The MRHS Chinese Club aims to spread Chinese culture and traditions throughout the MRHS community so that the student body may acquire a more diverse cultural perspective. </td>
                    <td> The MRHS Chinese Honor Society aims to allows members gain a better understanding of Chinese culture through service and hands-on experiences. </td>
                </tr>
                <tr>
                    <td><a href='/chinese-club'><button className="projectButton">Learn more!</button></a></td>
                    <td><a href='/chinese-honor-society'><button className="projectButton">Learn more!</button></a></td>
                </tr>
            </table>
        </div>    
    )
}

export default Home;