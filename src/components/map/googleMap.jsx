import React, { useState} from 'react';
import {GoogleMap, InfoWindowF, MarkerF, useLoadScript} from "@react-google-maps/api";

import {RiMapPinLine, RiPhoneLine, RiTimeLine} from "react-icons/ri";

const GoogleMaps = ({mapData}) => {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: 'AIzaSyCgyx5fAyg8xJ__lQ28TwFGpnSStYHIYog',
    });
    const [mapRef, setMapRef] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [infoWindowData, setInfoWindowData] = useState();
    const onLoad = (map) => {
        setMapRef(map)
        if (mapData.length===1){
        map.setCenter({lat:41.337380,lng:64.478760})
        map.setZoom(7)

        }else {
        const bounds = new google.maps.LatLngBounds();
            mapData?.forEach(({lat, lng}) => bounds.extend({lat:Number(lat), lng:Number(lng)}));
        map.fitBounds(bounds);

        }
    };



    const handleMarkerClick = (id, lat, lng, addressRu, addressUz, nameRu, nameUz, workingTime, tel) => {
        mapRef?.panTo({lat, lng})
        setInfoWindowData({id, addressRu, addressUz, nameRu, nameUz, workingTime, tel})
        setIsOpen(true)
    }



    return (
        <>
            <div
                className={` ${mapData.length>0 ? 'flex' : 'hidden' } static shadow-xl md:absolute top-[10%] left-[3%] md:w-[460px] w-[90%] mx-auto  flex-col md:gap-0 gap-3 items-center  md:py-0 py-5   divide-y-0 md:divide-y max-h-[80%] overflow-y-auto z-50`}>
                {
                    mapData.map((item, ind) => (
                        <div
                            className={'space-y-2 sm:space-y-3 px-4 py-2 sm:px-7 sm:py-5 cursor-pointer bg-white rounded-lg md:rounded-none w-full'}
                            key={ind}
                        onClick={()=>handleMarkerClick(ind,Number(item.lat), Number(item.lng), item.addressRu, item.addressUz, item.nameRu, item.nameUz, item.workingTime, item.tel)}>
                            <h3 className={'text-xl'}>{item.nameRu}</h3>
                            <div className={'space-y-2'}>
                                <div className={'flex items-start gap-3'}>
                                    <RiMapPinLine className={'text-lg flex-shrink-0'}/>
                                    <p className={'break-all text-[#666666]'}>{item.addressRu}</p>
                                </div>
                                <div className={'flex items-start gap-3'}>
                                    <RiTimeLine className={'text-lg flex-shrink-0'}/>
                                    <p className={'break-all text-[#666666]'}>{item.workingTime}</p>
                                </div>
                                <div className={'flex items-start gap-3'}>
                                    <RiPhoneLine className={'text-lg flex-shrink-0'}/>
                                    <p className={'break-all text-[#666666]'}>{item.tel}</p>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="h-[400px] md:h-screen ">
                {!isLoaded ? (
                    <h1>Loading...</h1>
                ) : (
                    <GoogleMap
                        mapContainerClassName="map-container"
                        onLoad={onLoad}
                        options={{mapId: '5d4e37b408dbedeb'}}
                    >
                        {mapData.map(({lat, lng, addressRu, addressUz, nameRu, nameUz, workingTime, tel}, ind) => (
                            <MarkerF position={{lat:Number(lat), lng:Number(lng)}} key={ind}
                                     icon={{
                                         url: '/store-checked.png',
                                         scaledSize: new window.google.maps.Size(45, 50),
                                     }}
                                     onClick={() => {
                                         handleMarkerClick(ind, Number(lat), Number(lng), addressRu, addressUz, nameRu, nameUz, workingTime, tel)
                                     }}
                            >
                                {
                                    isOpen && infoWindowData?.id === ind && (
                                        <InfoWindowF onCloseClick={() => setIsOpen(false)}>
                                            <div className={'space-y-3'}>
                                                <h3 className={'text-xl'}>{infoWindowData.nameRu}</h3>
                                                <div className={'space-y-2'}>
                                                    <div className={'flex items-start gap-3'}>
                                                        <RiMapPinLine className={'text-lg flex-shrink-0'}/>
                                                        <p className={'break-all text-[#666666]'}>{infoWindowData.addressRu}</p>
                                                    </div>
                                                    <div className={'flex items-start gap-3'}>
                                                        <RiTimeLine className={'text-lg flex-shrink-0'}/>
                                                        <p className={'break-all text-[#666666]'}>{infoWindowData.workingTime}</p>
                                                    </div>
                                                    <div className={'flex items-start gap-3'}>
                                                        <RiPhoneLine className={'text-lg flex-shrink-0'}/>
                                                        <p className={'break-all text-[#666666]'}>{infoWindowData.tel}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </InfoWindowF>
                                    )
                                }
                            </MarkerF>
                        ))}
                    </GoogleMap>
                )}
            </div>

        </>

    )

};

export default GoogleMaps;