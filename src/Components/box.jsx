import React, { useMemo } from "react";
import * as THREE from 'three';
import { extend } from '@react-three/fiber';

export default function Box() {
    useMemo(() => extend(THREE), []);
    return (<mesh>
        {/* <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="hotpink" /> */}
        <boxGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="white" />
        </mesh>)
}
