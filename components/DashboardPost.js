import { nanoid } from "nanoid"
import Image from "next/image"
import styles from "../styles/Gallery.module.css"
import VideoFrame from "./VideoFrame"
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import {isMobile} from "react-device-detect"

const previewPost=({type,item})=>{
    switch(type){
        case "pic":
            return(
                <>
                <div 
                    style={{boxShadow:isMobile?"1px 1px 10px rgba(0,0,0,0.164)":"none"}}
                    className={styles.authPostContainer}>
                    <div className={styles.authPostContainer}>
                    <Image
                        src={item}
                        alt={nanoid(10)}
                        layout="fill"
                        objectFit='cover'
                        objectPosition='center'
                    />
                            <p className={styles.textForImageAuth}>{item.description}</p>
                    </div>
                </div>               
                </>)
        case "video":
            return(
                    <div className={`${styles.authPostVideoContainer}`}>
                        <VideoFrame muted={true} videoURL={item.imageList[0]}/>
                        <div className={`${styles.playPostButton}`}>
                            <PlayArrowOutlinedIcon className="text-white"/>
                            <p className={`${styles.textVideoPost} text-sm text-white`}>{item.about.slice(0,25)}</p>
                        </div>
                    </div>
            )
        default:
            return(<p className="text-red-500 text-center">Something is wrong</p>)
            
    }
}

export default previewPost