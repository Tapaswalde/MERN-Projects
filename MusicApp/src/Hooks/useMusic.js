import { useState } from "react";

export const useMusic=()=>{

    const songs=[
        {
            id:1,
            name:"Song 1",
            artist:"Artist 1",
            url:"./songs/song1.mpeg"
        },
        {
            id:2,
            name:"Song 2",
            artist:"Artist 2",
            url:"./songs/song2.mpeg"
        },
        {
            id:3,
            name:"Song 3",  
            artist:"Artist 3",
            url:"./songs/song3.mpeg"
        },
        {
            id:4,
            name:"Song 4",
            artist:"Artist 4",
            url:"./songs/song4.mpeg"
        },
        {
            id:5,
            name:"Song 5",
            artist:"Artist 5",
            url:"./songs/song5.mpeg"
        },
        {
            id:6,
            name:"Song 6",
            artist:"Artist 6",
            url:"./songs/song6.mpeg"
        },
        {
            id:7,
            name:"Song 7",
            artist:"Artist 7",
            url:"./songs/song7.mpeg"
        },
        {
            id:8,
            name:"Song 8",
            artist:"Artist 8",
            url:"./songs/song8.mpeg"
        },
        {
            id:9,
            name:"Song 9",
            artist:"Artist 9",
            url:"./songs/song9.mpeg"
        },
        {
            id:10,
            name:"Song 10",
            artist:"Artist 10",
            url:"./songs/song10.mpeg"
        }
    ];

    const [allsongs,setAllsongs]=useState(songs);
    const [currentSong,setCurrentSong]=useState(null);
    const [currentSongIndex,setCurrentSongIndex]=useState(songs[0]);


    return {}

}