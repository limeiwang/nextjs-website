'use client';

import { useEffect, useState } from 'react';
import { Amap, Marker } from '@amap/amap-react';

// 高德地图 API Key
const AMAP_KEY = '3848641d7e070d3ced51a7cbc1703bf9';

// 动态加载高德地图脚本
const loadAMapScript = () => {
  return new Promise((resolve, reject) => {
    if (window.AMap) {
      resolve(window.AMap);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://webapi.amap.com/maps?v=2.0&key=${AMAP_KEY}`;
    script.async = true;
    script.onload = () => resolve(window.AMap);
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

interface MapComponentProps {
  address: string;
  className?: string;
}

export default function MapComponent({ address, className = '' }: MapComponentProps) {
  const [position, setPosition] = useState<[number, number]>([115.877622, 39.042023]); // 默认北京坐标
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    loadAMapScript().then(() => {
      setMapLoaded(true);
    }).catch(error => {
      console.error('加载高德地图失败:', error);
    });
  }, []);

  useEffect(() => {
    if (!mapLoaded) return;

    // 在组件加载时根据地址获取坐标
    const getCoordinates = async () => {
      try {
        const response = await fetch(
          `https://restapi.amap.com/v3/geocode/geo?address=${encodeURIComponent(
            address
          )}&key=${AMAP_KEY}`
        );
        const data = await response.json();
        if (data.status === '1' && data.geocodes && data.geocodes[0]) {
          const [lng, lat] = data.geocodes[0].location.split(',').map(Number);
          setPosition([lng, lat]);
        }
      } catch (error) {
        console.error('获取地址坐标失败:', error);
      }
    };

    getCoordinates();
  }, [address, mapLoaded]);

  if (!mapLoaded) {
    return <div className={className}>地图加载中...</div>;
  }

  return (
    <div className={className}>
      <Amap
        zoom={15}
        center={position}
        mapStyle="amap://styles/normal"
      >
        <Marker position={position} />
      </Amap>
    </div>
  );
} 
