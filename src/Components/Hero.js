import "./Hero.css"

const Hero = ({def, title, content, image, imgDesc, color}) => {
    return (
        <>
            {def ? <div className={color ? 'hero_bg' : 'light-bg'}>
                    <div className="container py-4">
                        <div className="row justify-content-around d-flex align-content-center py-5">
                            <div className="col">
                                <h4>{title}</h4>
                                <p>{content}</p>
                            </div>
                            <div className="col">
                                <img src={image} alt={imgDesc} className='img_size'/>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className={color ? 'hero_bg' : 'light-bg'}>
                    <div className="container py-4">
                        <div className="row justify-content-around d-flex align-content-center py-5">
                            <div className="col">
                                <img src={image} alt={imgDesc} className='img_size'/>
                            </div>
                            <div className="col">
                                <h4>{title}</h4>
                                <p>{content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
export default Hero;
