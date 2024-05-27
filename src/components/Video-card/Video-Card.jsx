import React from 'react';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const VideoCard = ({video}) => {
    return (
        <video className="object-cover w-full h-full" autoPlay loop muted>
            <source
                className="w-full"
                src={video}
                type="video/mp4"
            />
        </video>
    );
};

export default VideoCard;