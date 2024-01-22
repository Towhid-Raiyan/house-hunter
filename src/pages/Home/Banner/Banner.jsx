import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const Banner = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <AutoplaySlider
            play={true}
            cancelOnInteraction={false} 
            interval={4000}
            className='h-[500px] mb-20'
        >
            <figure className="relative">
                <img
                    src="https://i.ibb.co/r6CJPWx/pexels-andrei-tanase-1271619.jpg"
                    alt=""
                    className="w-full z-0"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                    <h1 className="text-white  dark:text-slate-400">
                        <span className='text-xl md:text-3xl font-semibold'>Welcome to Traverse Travel</span> <br /> <span className='text-2xl md:text-5xl font-bold'>Enjoy Your New Adventure</span>
                    </h1>
                </div>
            </figure>
            <figure className="relative">
                <img
                    src="https://i.ibb.co/vJ7T7kg/i-Stock-1353245759.jpg"
                    alt=""
                    className="w-full z-0"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                    <h1 className="text-white  dark:text-slate-400">
                        <span className='text-xl md:text-3xl font-semibold'>Enjoy Your Holidays</span> <br /> <span className='text-2xl md:text-5xl font-bold'>Explore The World</span>
                    </h1>
                </div>
            </figure>
        </AutoplaySlider>
    );
};

export default Banner;