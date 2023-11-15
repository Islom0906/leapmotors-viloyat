import Image from 'next/image'


const AboutTeam = ({team}) => {

    return (
        <div className="w-full lg:aspect-[1/1.1] lg:h-auto h-[400px]  relative group flex flex-col items-center overflow-hidden ">
            <Image src={team.image} alt="Person" className="w-full h-full object-cover scale-100 hover:scale-110 duration-1000 cursor-pointer" fill/>
                <div className="absolute bottom-0 z-20 text-white flex flex-col items-center w-full" style={{backgroundImage:'linear-gradient(transparent 1%,#000)'}}>
                    <h1 className="mb-3 text-[27px] leading-[25px] font-arial-thin">{team.name}</h1>
                    <p className="mb-8 text-xl leading-[22px] font-arial-semibold">{team.level}</p>
                </div>
        </div>
    );
};

export default AboutTeam;