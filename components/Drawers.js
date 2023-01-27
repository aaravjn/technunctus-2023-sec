import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Image from 'next/image'
import { isMobile } from "react-device-detect"

export default function TemporaryDrawer({ title, reg_close, image, description, broughtToYouBy, reg_url, buttonText, drive_link }) {
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <div>
            {[isMobile ? 'bottom' : 'right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <button className="gradientButton" onClick={toggleDrawer(anchor, true)}>{buttonText}</button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        style={{ width: "30rem" }}
                    >
                        <Box
                            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 550 }}
                            role="presentation"
                            onClick={toggleDrawer(anchor, false)}
                            onKeyDown={toggleDrawer(anchor, false)}
                        >
                            <div className={`bg-[#1a1a1a] min-h-screen text-white`}
                                style={{ height: isMobile ? "90vh" : "100vh" }}
                            >
                                <div

                                >
                                    <Image
                                        src={image}
                                        alt="event image"
                                        layout="responsive"
                                        width={isMobile ? 1.5 : 2}
                                        height={1}
                                        objectFit="cover"
                                    />
                                </div>
                                <div className='m-4'>
                                    <p className='gradientText text-sm'>{broughtToYouBy.slice(4,)}</p>
                                    <p className="font-bold text-4xl">{title}</p>
                                    <p className=" mt-4">{description}</p>
                                    <div className="mt-4">
                                        {/* {
                                            drive_link.length !== 0
                                            &&
                                            <button className='border border-[#00fffb] gradientButton'
                                                onClick={() => window.open(drive_link)}
                                                style={{ background: "Transparent", marginRight: "1rem" }}
                                            >Brochure</button>
                                        } */}

                                        {
                                            // !reg_close && reg_url.length !== 14
                                            // &&
                                            <button className="gradientButton"
                                                onClick={() => window.open(reg_url)}
                                                disabled={true}
                                            >Coming soon....</button>
                                        }
                                        {/* {
                                            reg_close === true
                                            &&
                                            <button 
                                            className='border border-[#00fffb]  hover:scale-1 cursor-no-drop gradientButton'
                                            style={{ background: "Transparent", marginRight: "1rem" }}

                                            >Registeration Closed</button>
                                        } */}

                                    </div>
                                </div>
                            </div>
                        </Box>
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
