import React, { useContext } from "react";
import { SocketContext } from "../main";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  return (
    <div >
      {/* my video */}
      {stream && (
        <div >
          <h5>{name || 'Name'}</h5>
          <video playsInline muted ref={myVideo} autoPlay width="600" />
        </div>
      )}
      
      {/* user's video */}
      {callAccepted && !callEnded && (
        <div >
          <h5>{call.name || 'Name'}</h5>
          <video playsInline ref={userVideo} autoPlay width="600" />
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
