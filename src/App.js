import React, { useState } from 'react';
import logo from './logo.svg';
import Cover1_Img from './style/image/cover_1.jpg';
import Cover2_Img from './style/image/cover_2.jpg';
import Cover3_Img from './style/image/cover_3.jpg';
import Cover4_Img from './style/image/cover_4.jpg';
import Cover5_Img from './style/image/cover_5.jpg';
import Cover6_Img from './style/image/cover_6.jpg';
import './App.css';

import { MdAdd, MdSearch, MdPerson, MdPlayCircleOutline, MdSkipNext, MdSkipPrevious, MdShuffle, MdRepeat, MdVolumeUp } from "react-icons/md";

function App() {
  return (
    <div className="App">
      <div className="side-bar">
        <div className="side-bar-header"><span>我的專輯</span> <MdAdd /></div>
        {/* 專輯清單 */}
        <nav className="side-album-list">
          <ul>
            <li>Friction Looks</li>
            <li>November</li>
            <li>Space Hunter</li>
            <li>Jessica</li>
            <li>Crawdad Stomp</li>
            <li>How it Began</li>
          </ul>
        </nav>
        {/* </div> */}

        {/* 1.現在播放 2.專輯名稱 3.歌名 */}
        <div className="current-playing">
          <div className="playing-info">
            <p>現在播放</p>
            <p>Friction Looks</p>
          </div>
          <img src={Cover1_Img} />
        </div>

      </div>

      <div className="main-content">
        <div className="album">
          {/* search bar */}
          <div className="album-top">
            <div><MdSearch fontSize="18px" /><input placeholder="Search" /></div>
            <div><MdPerson fontSize="18px" />Josh</div>
          </div>
          {/* 專輯封面 */}
          <div className="album-banner">
            <div className="background-image" style={{ backgroundImage: `url(${Cover1_Img})` }} />
            <div className="album-info">
              <img className="cover-image" src={Cover1_Img} style={{ marginRight: "35px" }} />
              <div style={{ paddingBottom: "10px", color: "#ffffff" }}>
                <h3>Friction Looks</h3>
                <p>sing a song</p>
                <button className="play-album-btn">專輯播放</button>
              </div>
            </div>
          </div>

          {/* 專輯封面清單 */}
          <div className="album-list">
            <span className="album-wrapper">
              <img className="album-cover" src={Cover1_Img} />
              <div className="album-name">Friction Looks</div>
            </span>
            <span className="album-wrapper">
              <img className="album-cover" src={Cover2_Img} />
              <div className="album-name">November</div>
            </span>
            <span className="album-wrapper">
              <img className="album-cover" src={Cover3_Img} />
              <div className="album-name">Space Hunter</div>
            </span>
            <span className="album-wrapper">
              <img className="album-cover" src={Cover4_Img} />
              <div className="album-name">Jessica</div>
            </span>
            <span className="album-wrapper">
              <img className="album-cover" src={Cover5_Img} />
              <div className="album-name">Crawdad Stomp</div>
            </span>
            <span className="album-wrapper">
              <img className="album-cover" src={Cover6_Img} />
              <div className="album-name">How it Began</div>
            </span>

          </div>

          {/* 播放按鈕 */}
          <div className="music-player">
            <div className="time-line"></div>
            <div className="player-status">
              <div className="time">00:00 / 00:00</div>
              <div className="control-btn-group">
                  <MdShuffle />
                  <MdSkipPrevious />
                  <MdPlayCircleOutline />
                  <MdSkipNext />
                  <MdRepeat />
              </div>
              <div className="volume">
                <MdVolumeUp />
                <input type="range" min="0" max="100" step="1" value="50"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
