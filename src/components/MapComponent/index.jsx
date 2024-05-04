import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = () => {
    const mapStyles = {
        height: '400px',
        width: '100%',
    };

    const defaultCenter = {
        lat: 21.0278, // Vĩ độ của Hà Nội
        lng: 105.8342, // Kinh độ của Hà Nội
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyAOBZoYTHYJ3VwEoSlLB388GtXlKQixdkm">
            <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
